import { getAllPosts } from '@/lib/blog';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from 'next/link';
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "SafeHomeScan Blog - Home Safety and Aging in Place Insights",
  description: "Expert insights on home safety assessments, aging in place strategies, and tips for maintaining independence at home.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary text-white -mt-16 pt-32">
        <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
          <div className="text-center mb-12">
            <h1 className="text-headline-sm font-extrabold tracking-tight mb-4">
              SafeHomeScan Blog
            </h1>
            <p className="text-body font-normal text-blue-100 max-w-2xl mx-auto">
              Expert insights on home safety assessments, aging in place strategies, and tips for maintaining independence at home.
            </p>
          </div>

          <div className="flex items-end justify-between mb-8">
            <h2 className="text-subheading font-semibold tracking-tight text-white">Posts</h2>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-subheading font-semibold mb-4 text-white">No posts yet</h3>
              <p className="text-blue-100 text-body-sm font-normal">
                Check back soon for valuable insights on home safety and aging in place.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="shadow-none hover:shadow-lg transition-shadow cursor-pointer bg-white/10 backdrop-blur-sm border-white/20">
                    <CardHeader className="p-2">
                      <div className="aspect-video bg-muted rounded-lg w-full overflow-hidden">
                        {post.image ? (
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <span className="text-brand-primary text-body-sm font-semibold">SafeHomeScan</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 pb-5">
                      <Badge className="bg-white/20 text-white border-white/20">{post.category}</Badge>

                      <h3 className="mt-4 text-subheading-sm font-semibold tracking-tight line-clamp-2 text-white">
                        {post.title}
                      </h3>
                      
                      {post.summary && (
                        <p className="mt-2 text-body-sm font-normal text-blue-100 line-clamp-2">
                          {post.summary}
                        </p>
                      )}

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-blue-100 font-medium text-body-sm">
                          {post.author}
                        </span>

                        <span className="text-blue-100 text-body-sm font-normal">
                          {new Date(post.published).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}