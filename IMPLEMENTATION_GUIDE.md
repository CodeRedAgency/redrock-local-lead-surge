# Performance Optimization Implementation Guide

## ✅ Completed Steps

1. **Build Configuration Optimized** (`vite.config.ts`)
   - Modern JavaScript target (no legacy code)
   - Code splitting with manual chunks
   - Compression (Gzip + Brotli)
   - Minification with Terser
   - CSS code splitting

2. **Caching Headers Added** (`vercel.json`)
   - Long-term caching for static assets (1 year)
   - Proper cache headers for JS, CSS, images, fonts

3. **Helper Components Created**
   - `OptimizedImage`: Image component with WebP support
   - `LazyRoute`: Route lazy loading wrapper

4. **Dependencies Installed**
   - `vite-plugin-compression2`: Asset compression
   - `sharp`: Image conversion to WebP
   - `vite-bundle-visualizer`: Bundle analysis

## 🚀 Quick Start

### Step 1: Convert Images to WebP
```bash
npm run convert-images
```

This will convert all JPG/PNG images to WebP format, saving 25-35% file size.

### Step 2: Update Image Components

Find all `<img>` tags and replace with `<OptimizedImage>`:

#### Example 1: Hero Images (LCP - High Priority)

**Before:**
```tsx
<img 
  src="/src/assets/hero-residential.jpg" 
  alt="Residential cleaning services"
  className="w-full h-full object-cover"
/>
```

**After:**
```tsx
import { OptimizedImage } from "@/components/OptimizedImage";

<OptimizedImage
  src="/src/assets/hero-residential.jpg"
  alt="Residential cleaning services"
  width={1920}
  height={1080}
  priority={true}  // Critical for LCP!
  className="w-full h-full object-cover"
/>
```

#### Example 2: Regular Images (Lazy Load)

**Before:**
```tsx
<img 
  src="/src/assets/team-trust.jpg" 
  alt="Our trusted team"
  className="rounded-lg"
/>
```

**After:**
```tsx
<OptimizedImage
  src="/src/assets/team-trust.jpg"
  alt="Our trusted team"
  width={800}
  height={600}
  priority={false}  // Lazy load non-critical images
  className="rounded-lg"
/>
```

### Step 3: Identify Your LCP Image

1. Go to https://pagespeed.web.dev/
2. Test your main page (likely `/` or `/south-florida`, etc.)
3. Look for "Largest Contentful Paint element" in the diagnostics
4. Note which image is your LCP

### Step 4: Preload LCP Image

Update `index.html` line 24:

```html
<!-- Replace with your actual LCP image path -->
<link rel="preload" as="image" href="/src/assets/[YOUR-LCP-IMAGE].webp" type="image/webp" />
```

For example, if your hero image is the LCP:
```html
<link rel="preload" as="image" href="/src/assets/hero-residential.webp" type="image/webp" />
```

### Step 5: Implement Route Lazy Loading (Optional but Recommended)

Update `src/App.tsx` to lazy load routes:

**Before:**
```tsx
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
```

**After:**
```tsx
import { createLazyRoute } from "@/components/LazyRoute";

const Index = createLazyRoute(() => import("./pages/Index"));
const AboutUs = createLazyRoute(() => import("./pages/AboutUs"));
const FAQ = createLazyRoute(() => import("./pages/FAQ"));
```

No changes needed in your Routes - it works the same way!

## 🔍 Testing & Validation

### 1. Build and Preview
```bash
npm run build
npm run preview
```

### 2. Analyze Bundle Size
```bash
npm run analyze
```

This will show you:
- Which chunks are largest
- What's included in each chunk
- Opportunities for further optimization

### 3. Test with PageSpeed Insights
- URL: https://pagespeed.web.dev/
- Test both Mobile and Desktop
- Check all Core Web Vitals

### 4. Verify WebP Images
- Open DevTools → Network tab
- Look for `.webp` extensions
- Verify images are loading correctly
- Check browser console for errors

## 📊 Expected Results

### Before
- Mobile Performance: **65/100**
- LCP: **7,850ms**
- Desktop Performance: 90/100

### After (Target)
- Mobile Performance: **85-90/100** 🎯
- LCP: **< 2,500ms** 🎯
- Desktop Performance: **95+/100** 🎯

### Key Improvements
- ⬇️ JavaScript bundle: -30-40%
- ⬇️ Image sizes: -25-35%
- ⬆️ Cache hit rate: +80%
- ⬆️ First paint: +40%

## 🐛 Troubleshooting

### Issue: Images not displaying
- Check WebP conversion completed successfully
- Verify paths are correct
- Check browser console for 404 errors
- Ensure fallback images (original JPG/PNG) still exist

### Issue: Build errors with compression
```bash
# If you get compression errors, try:
npm install --save-dev vite-plugin-compression2@latest
```

### Issue: TypeScript errors
```bash
# Ensure types are installed:
npm install --save-dev @types/node
```

### Issue: Routes not lazy loading
- Check that import() is used correctly
- Ensure Suspense is wrapping the component
- Verify there are no circular dependencies

## 📝 Checklist

- [ ] Run `npm run convert-images`
- [ ] Update all `<img>` tags to `<OptimizedImage>`
- [ ] Set `priority={true}` for LCP image
- [ ] Identify and preload LCP image in index.html
- [ ] Test build: `npm run build`
- [ ] Preview: `npm run preview`
- [ ] Run PageSpeed Insights test
- [ ] Deploy to Vercel
- [ ] Test production URL with PageSpeed Insights
- [ ] Verify mobile score improved
- [ ] Verify LCP < 2,500ms

## 🎯 Priority Images to Update

Based on your codebase, focus on these high-traffic pages first:

1. **Home Page** (`/`)
   - Hero image (LCP candidate)
   - Trust section images

2. **Location Pages**
   - `/south-florida`
   - `/las-vegas`
   - `/oahu`
   - `/maui`
   - `/columbus-ohio`
   - `/dallas`

3. **Service Pages**
   - Hero images on each service page
   - Before/after photos

## 🔗 Component Examples

### Finding Images to Update

Search for image patterns:
```bash
# Windows PowerShell
Select-String -Path "src\**\*.tsx" -Pattern "<img"

# Or check specific files:
# - Navigation components (logos)
# - Hero sections
# - Service cards
# - Trust/testimonial sections
```

### Common Image Locations

1. **Navigation Components**
   - Logo images: `src/components/*Navigation.tsx`

2. **Hero Sections**
   - Hero images in location pages

3. **Service Cards**
   - Service icons/images

4. **Assets**
   - `src/assets/`: All static images

## 📚 Additional Resources

- [Vite Performance](https://vitejs.dev/guide/performance.html)
- [WebP Format Guide](https://developers.google.com/speed/webp)
- [React Code Splitting](https://react.dev/reference/react/lazy)
- [Core Web Vitals](https://web.dev/vitals/)
- [Image Optimization](https://web.dev/fast/#optimize-your-images)

## 💡 Pro Tips

1. **Always set explicit width/height** - Prevents layout shift (CLS)
2. **Priority for above-the-fold images only** - First 2-3 images
3. **Lazy load everything else** - Saves initial bandwidth
4. **Test on mobile devices** - Real device testing > simulator
5. **Monitor Core Web Vitals** - Use Google Search Console

## 🚀 Next Level Optimizations (Future)

Once basic optimizations are complete:

1. **CDN for Images**: Consider Cloudinary or ImgIX
2. **Service Worker**: Implement caching strategy
3. **Critical CSS**: Inline critical CSS
4. **Font Optimization**: Subset fonts, preload
5. **HTTP/2 Push**: For critical resources
6. **Responsive Images**: Multiple sizes via srcset

---

**Questions?** Review `PERFORMANCE_OPTIMIZATION.md` for detailed technical explanations.

