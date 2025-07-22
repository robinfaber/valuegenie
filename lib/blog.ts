import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  author: string;
  published: string;
  image: string;
  category: string;
  content: string;
  htmlContent?: string;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }
  
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      summary: data.summary || '',
      author: data.author || 'ValuationGenie Team',
      published: data.published || new Date().toISOString().split('T')[0],
      image: data.image || '/blog/default-post.jpg',
      category: data.category || 'Business Valuation',
      content,
      htmlContent: content, // For simple markdown, you might want to add a markdown parser here
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      // Sort by published date, newest first
      return new Date(b.published).getTime() - new Date(a.published).getTime();
    });

  return posts;
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}