import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Calendar, ArrowRight } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Blog = () => {
  const categories = [
    { value: "cleaning tips", label: "Cleaning Tips" },
    { value: "South Florida", label: "South Florida" },
    { value: "Las Vegas", label: "Las Vegas" },
    { value: "Oahu", label: "Oahu" },
    { value: "Maui", label: "Maui" },
    { value: "Dallas", label: "Dallas" },
    { value: "Columbus Ohio", label: "Columbus Ohio" }
  ];

  const baseArticles = [
    {
      title: "Navigating Health Code Violations: A Commercial Cleaning Guide",
      excerpt: "Protect your business from costly fines and closure. Learn how professional commercial cleaning ensures compliance with health code regulations.",
      date: "October 18, 2025",
      slug: "/blog/cleaning-tips/health-code-violations",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=400&fit=crop&q=80"
    },
    {
      title: "Grill Maintenance 101: The Ultimate Guide to Cleaning Your Outdoor Grill",
      excerpt: "Master grill maintenance with our ultimate guide. Learn how to clean your outdoor grill for better taste, longer life, and a healthier cooking experience.",
      date: "October 18, 2025",
      slug: "/blog/cleaning-tips/grill-maintenance-101-the-ultimate-guide-to-cleaning-your-outdoor-grill",
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=400&fit=crop&q=80"
    },
    {
      title: "Step-by-Step Guide: Effective Techniques for Removing Ink Stains from Carpets",
      excerpt: "Don't panic over ink stains! Follow our step-by-step guide to effectively remove ink from carpets and learn when to call the professionals for stubborn spots.",
      date: "October 18, 2025",
      slug: "/blog/cleaning-tips/step-by-step-guide-effective-techniques-for-removing-ink-stains-from-carpets",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=400&fit=crop&q=80"
    },
    {
      title: "Your Essential Guide to the Ultimate Move-Out Cleaning Checklist",
      excerpt: "Our ultimate move-out cleaning checklist ensures you get your security deposit back. Follow our room-by-room guide for a perfect clean, or hire our pros to do it for you.",
      date: "July 12, 2022",
      slug: "/blog/cleaning-tips/your-essential-guide-to-the-ultimate-move-out-cleaning-checklist",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop&q=80"
    },
    {
      title: "6 Handy Tips to Help You Minimize Your Time on Housework",
      excerpt: "Tired of endless chores? Discover 6 handy tips to help you minimize your time on housework and reclaim your free time.",
      date: "September 5, 2023",
      slug: "/blog/cleaning-tips/6-handy-tips-to-help-you-minimize-your-time-on-housework",
      image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop&q=80"
    },
    {
      title: "Airbnb Bedding Management You Should Know",
      excerpt: "Essential strategies for selecting, maintaining, and rotating quality linens to ensure guest comfort, maximize efficiency, and secure 5-star reviews.",
      date: "October 17, 2025",
      slug: "/blog/cleaning-tips/airbnb-bedding-management-you-should-know",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=400&fit=crop&q=80"
    },
    {
      title: "The Science of Spring Cleaning: Why It Boosts Your Mood and Health",
      excerpt: "Discover the science of spring cleaning! Learn how decluttering and a deep clean can improve your mood, health, and focus. Get our ultimate checklist.",
      date: "March 15, 2024",
      slug: "/blog/cleaning-tips/the-science-of-spring-cleaning",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=400&fit=crop&q=80"
    },
    {
      title: "Carpet Cleaning to Remove Flea Infestation: A Step-by-Step Guide",
      excerpt: "Dealing with a flea infestation? Our step-by-step guide shows you how professional carpet cleaning can help eradicate fleas from your home for good.",
      date: "August 20, 2024",
      slug: "/blog/cleaning-tips/carpet-cleaning-to-remove-flea-infestation",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=400&fit=crop&q=80"
    },
    {
      title: "Get It Done Together: Why You Should Host a Spring Cleaning Party",
      excerpt: "Turn spring cleaning into a fun social event! Learn how to plan a cleaning party with friends and when to bring in the pros for tough jobs.",
      date: "April 22, 2023",
      slug: "/blog/cleaning-tips/why-you-should-host-a-spring-cleaning-party",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=400&fit=crop&q=80"
    },
    
  ];

  const articles = useMemo(
    () => baseArticles.map((a) => ({ category: "cleaning tips", ...a })),
    []
  );
  const { t } = useTranslation();

  const { page } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || "all");
  const [query, setQuery] = useState<string>(searchParams.get("q") || "");

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory && selectedCategory !== "all") params.set("category", selectedCategory);
    if (query) params.set("q", query);
    setSearchParams(params);
  }, [selectedCategory, query, setSearchParams]);
  const pageSize = 8;

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
      return bTime - aTime;
    });
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return sortedArticles.filter((article) => {
      const matchesCategory = selectedCategory === "all"
        ? true
        : (article as any).category?.toLowerCase() === selectedCategory.toLowerCase();
      const text = `${article.title} ${article.excerpt}`.toLowerCase();
      const matchesQuery = query ? text.includes(query.toLowerCase()) : true;
      return matchesCategory && matchesQuery;
    });
  }, [sortedArticles, selectedCategory, query]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / pageSize));
  const parsed = Number(page);
  const currentPage = !isNaN(parsed) && parsed >= 1 ? Math.min(parsed, totalPages) : 1;
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedArticles = filteredArticles.slice(start, end);

  const getPageLink = (n: number) => {
    const qs = new URLSearchParams();
    if (selectedCategory && selectedCategory !== "all") qs.set("category", selectedCategory);
    if (query) qs.set("q", query);
    const base = n === 1 ? "/blog" : `/blog/page/${n}`;
    const suffix = qs.toString();
    return suffix ? `${base}?${suffix}` : base;
  };

  return (
    <>
      <Helmet>
        <title>
          {currentPage > 1
            ? `Cleaning Tips & Advice Blog - Page ${currentPage} | Red Rock Cleaning`
            : "Cleaning Tips & Advice Blog | Red Rock Cleaning"}
        </title>
        <meta name="description" content="Expert cleaning tips, advice, and guides from Red Rock Cleaning professionals. Learn how to maintain a cleaner, healthier home." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">{t("blog.title")}</h1>
                <p className="text-xl text-muted-foreground">
                  {t("blog.subtitle")}
                </p>
                {totalPages > 1 && (
                  <p className="mt-2 text-sm text-muted-foreground">{t("blog.pageOf", { current: currentPage, total: totalPages })}</p>
                )}
              </div>

              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <Select value={selectedCategory} onValueChange={(v) => setSelectedCategory(v)}>
                    <SelectTrigger className="w-56">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t("blog.allCategories")}</SelectItem>
                      {categories.map((c) => (
                        <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t("blog.searchPlaceholder")}
                    className="w-full md:w-80"
                    aria-label="Search articles"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedArticles.map((article, index) => (
                  <article key={index} className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Link to={article.slug} className="block">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
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
                        <span>{t("blog.readMore")}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
                  <Link
                    className={`px-4 py-2 rounded border text-sm ${currentPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-accent"}`}
                    to={getPageLink(Math.max(1, currentPage - 1))}
                    aria-disabled={currentPage === 1}
                  >
                    Previous
                  </Link>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <Link
                      key={n}
                      to={getPageLink(n)}
                      className={`px-4 py-2 rounded border text-sm ${n === currentPage ? "bg-primary text-primary-foreground border-primary" : "hover:bg-accent"}`}
                      aria-current={n === currentPage ? "page" : undefined}
                    >
                      {n}
                    </Link>
                  ))}
                  <Link
                    className={`px-4 py-2 rounded border text-sm ${currentPage === totalPages ? "pointer-events-none opacity-50" : "hover:bg-accent"}`}
                    to={getPageLink(Math.min(totalPages, currentPage + 1))}
                    aria-disabled={currentPage === totalPages}
                  >
                    Next
                  </Link>
                </nav>
              )}

              <div className="mt-16 bg-primary text-primary-foreground p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">{t("cta.needPro")}</h2>
                <p className="text-lg mb-6">
                  While these tips help maintain your space, nothing beats professional cleaning service.
                </p>
                <a href="tel:+18888051733" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  {t("cta.phone")}
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
