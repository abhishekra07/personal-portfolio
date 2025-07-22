import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Search, ArrowRight, Heart, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogData } from '@/data/portfolio';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'AI/ML', 'Java', 'Backend', 'Frontend', 'DevOps', 'Career'];

  const filteredBlogs = blogData.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Tech Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Insights, tutorials, and thoughts on modern software development
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-background border-border/50 focus:border-primary"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {filteredBlogs.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground mb-4">No articles found</p>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBlogs.map((blog, index) => (
                    <Card
                      key={blog.id}
                      className="group hover:shadow-colored transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm animate-fade-in overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {blog.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar size={12} />
                            {blog.publishedDate}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {blog.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {blog.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock size={12} />
                              {blog.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart size={12} />
                              {blog.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye size={12} />
                              {blog.views}
                            </div>
                          </div>

                          <Link to={`/blog/${blog.slug}`}>
                            <Button variant="ghost" size="sm" className="group/btn">
                              Read
                              <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Load More Button (for future pagination) */}
              {filteredBlogs.length > 9 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;