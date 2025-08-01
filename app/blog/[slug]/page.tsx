import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { Navbar } from "@/components/navbar";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary text-white -mt-16 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-8 text-body-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-blue-100 text-brand-primary px-3 py-1 rounded-full text-body-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-headline-sm md:text-headline font-extrabold tracking-tight mb-6 text-white">
              {post.title}
            </h1>
            
            {post.summary && (
              <p className="text-body font-normal text-blue-100 mb-8 max-w-3xl leading-relaxed">
                {post.summary}
              </p>
            )}

            <div className="flex items-center gap-6 text-blue-100">
              <span className="text-body-sm font-medium">{post.author}</span>
              <span className="text-blue-100 text-body-sm font-normal">
                {new Date(post.published).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </header>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 -mt-32 relative z-10">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Content */}
          <article className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => <h1 className="text-headline-sm font-extrabold text-brand-text mb-6 mt-8">{children}</h1>,
                h2: ({children}) => <h2 className="text-subheading font-semibold text-brand-text mb-4 mt-8">{children}</h2>,
                h3: ({children}) => <h3 className="text-subheading-sm font-semibold text-brand-text mb-3 mt-6">{children}</h3>,
                p: ({children}) => <p className="text-body-sm font-normal text-brand-text/80 mb-4 leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="text-body-sm font-normal text-brand-text/80 mb-4 ml-6 list-disc">{children}</ul>,
                ol: ({children}) => <ol className="text-body-sm font-normal text-brand-text/80 mb-4 ml-6 list-decimal">{children}</ol>,
                li: ({children}) => <li className="mb-1">{children}</li>,
                strong: ({children}) => <strong className="font-semibold text-brand-text">{children}</strong>,
                em: ({children}) => <em className="italic text-brand-text/80">{children}</em>,
                code: ({children}) => <code className="bg-brand-accent text-brand-primary px-1 py-0.5 rounded text-body-sm font-mono">{children}</code>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-brand-primary pl-4 italic text-brand-text/70 my-4">{children}</blockquote>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          {/* Navigation Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-medium transition-colors text-body-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="text-body-sm text-brand-text/60 font-normal">
                By {post.author}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | SafeHomeScan Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}