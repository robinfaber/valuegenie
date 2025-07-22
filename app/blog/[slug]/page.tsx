import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { Navbar } from "@/components/navbar";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';

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
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white -mt-16 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              {post.title}
            </h1>
            
            {post.summary && (
              <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                {post.summary}
              </p>
            )}

            <div className="flex items-center gap-6 text-blue-100">
              <span className="font-medium">{post.author}</span>
              <span className="text-blue-200">
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
          <article className="prose prose-lg prose-gray max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed text-gray-800">
              {post.content}
            </div>
          </article>

          {/* Navigation Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="text-sm text-gray-500">
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
    title: `${post.title} | WorthSnap Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}