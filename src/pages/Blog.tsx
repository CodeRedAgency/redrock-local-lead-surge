import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      title: "10 Tips for Keeping Your Home Clean Between Professional Cleanings",
      excerpt: "Maintain a spotless home with these simple daily habits and quick cleaning tricks.",
      date: "March 15, 2025",
      slug: "#"
    },
    {
      title: "The Ultimate Spring Cleaning Checklist",
      excerpt: "Comprehensive guide to deep cleaning every room in your home this spring.",
      date: "March 10, 2025",
      slug: "#"
    },
    {
      title: "Green Cleaning: Eco-Friendly Products That Actually Work",
      excerpt: "Discover environmentally safe cleaning solutions that deliver professional results.",
      date: "March 5, 2025",
      slug: "#"
    },
    {
      title: "How Often Should You Deep Clean Your Home?",
      excerpt: "Expert recommendations for scheduling deep cleaning based on household size and lifestyle.",
      date: "February 28, 2025",
      slug: "#"
    },
    {
      title: "Airbnb Host Success: The Importance of Professional Cleaning",
      excerpt: "Why professional cleaning is essential for maintaining 5-star ratings and repeat bookings.",
      date: "February 20, 2025",
      slug: "#"
    },
    {
      title: "Post-Construction Cleaning: What to Expect",
      excerpt: "A detailed guide to the cleaning process after renovation or new construction projects.",
      date: "February 15, 2025",
      slug: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cleaning Tips & Advice Blog | Red Rock Cleaning</title>
        <meta name="description" content="Expert cleaning tips, advice, and guides from Red Rock Cleaning professionals. Learn how to maintain a cleaner, healthier home." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">Cleaning Tips & Advice</h1>
                <p className="text-xl text-muted-foreground">
                  Expert insights and practical guides for a cleaner, healthier space
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <article key={index} className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-muted"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                        <Link to={article.slug}>{article.title}</Link>
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {article.excerpt}
                      </p>
                      <Link 
                        to={article.slug} 
                        className="inline-flex items-center space-x-2 text-primary hover:underline font-semibold"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-16 bg-primary text-primary-foreground p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Need Professional Cleaning?</h2>
                <p className="text-lg mb-6">
                  While these tips help maintain your space, nothing beats professional cleaning service.
                </p>
                <a href="tel:+18888051733" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Call (888) 805-1733
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
