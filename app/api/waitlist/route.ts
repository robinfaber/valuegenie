import { NextRequest, NextResponse } from 'next/server';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;
    
    // Email validation
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check for existing email first
    const checkResponse = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}?filterByFormula={email}="${email}"&maxRecords=1`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
      }
    });

    if (checkResponse.ok) {
      const checkData = await checkResponse.json();
      if (checkData.records && checkData.records.length > 0) {
        return NextResponse.json(
          { error: 'This email is already on our waitlist' },
          { status: 409 }
        );
      }
    }

    // Create new record if email doesn't exist
    const airtableResponse = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              email: email,
              status: 'Waiting',
              notes: 'Signed up via website'
            }
          }
        ]
      })
    });

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.text();
      throw new Error(`Airtable error: ${airtableResponse.status} - ${errorData}`);
    }

    const airtableData = await airtableResponse.json();
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined the waitlist!',
        recordId: airtableData.records[0].id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: 'Airtable connection failed',
        details: error instanceof Error ? error.message : 'Unknown error',
        debug: {
          hasApiKey: !!process.env.AIRTABLE_API_KEY,
          hasBaseId: !!process.env.AIRTABLE_BASE_ID,
          hasTableName: !!process.env.AIRTABLE_TABLE_NAME
        }
      },
      { status: 500 }
    );
  }
}