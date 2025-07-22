import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, Heart, Eye, ArrowLeft, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogData } from '@/data/portfolio';
import { toast } from 'sonner';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const blog = blogData.find((b) => b.slug === slug);

  useEffect(() => {
    if (!blog) {
      navigate('/blog');
      return;
    }
    
    setLikes(blog.likes);
    
    // Check if user has liked this post (in real app, this would come from backend)
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    setIsLiked(likedPosts.includes(blog.id));
  }, [blog, navigate]);

  if (!blog) {
    return null;
  }

  const handleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    
    if (isLiked) {
      // Unlike
      const newLikedPosts = likedPosts.filter((id: number) => id !== blog.id);
      localStorage.setItem('likedPosts', JSON.stringify(newLikedPosts));
      setIsLiked(false);
      setLikes(prev => prev - 1);
      toast.success('Removed from favorites');
    } else {
      // Like
      likedPosts.push(blog.id);
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
      setIsLiked(true);
      setLikes(prev => prev + 1);
      toast.success('Added to favorites!');
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: url,
        });
        toast.success('Shared successfully!');
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
      } catch (error) {
        toast.error('Failed to copy link');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Back Navigation */}
        <section className="py-6 border-b border-border/50">
          <div className="container mx-auto px-6">
            <Link to="/blog">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Badge variant="secondary">{blog.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {blog.publishedDate}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock size={14} />
                    {blog.readTime}
                  </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
                  {blog.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-6 animate-fade-in animation-delay-200">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Hero Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-8 animate-fade-in animation-delay-400">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Actions */}
              <div className="flex items-center justify-between mb-8 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    {blog.views} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={16} />
                    {likes} likes
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant={isLiked ? "default" : "outline"}
                    size="sm"
                    onClick={handleLike}
                    className={isLiked ? "bg-red-500 hover:bg-red-600 text-white" : ""}
                  >
                    <Heart size={16} className={`mr-1 ${isLiked ? 'fill-current' : ''}`} />
                    {isLiked ? 'Liked' : 'Like'}
                  </Button>
                  
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 size={16} className="mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert prose-lg">
              <div
                className="text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Related Posts */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogData
                  .filter((b) => b.id !== blog.id && (
                    b.category === blog.category || 
                    b.tags.some(tag => blog.tags.includes(tag))
                  ))
                  .slice(0, 3)
                  .map((relatedBlog) => (
                    <Link key={relatedBlog.id} to={`/blog/${relatedBlog.slug}`}>
                      <div className="group border border-border/50 rounded-lg overflow-hidden hover:shadow-colored transition-all duration-300 hover:border-primary/30">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedBlog.image}
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {relatedBlog.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {relatedBlog.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;