# Performance Optimization Guide

## Current Status
- **Desktop Performance**: 90/100 ✅
- **Mobile Performance**: 65/100 ⚠️
- **Accessibility**: 90/100 ✅

## Implemented Optimizations

### 1. Build Configuration (`vite.config.ts`)
- ✅ **Code Splitting**: Vendor chunks separated for better caching
  - React vendors
  - UI library vendors
  - Form/validation vendors
  - Icons separated
- ✅ **Modern JavaScript Target**: `es2015` - No legacy JavaScript
- ✅ **Minification**: Terser with console removal in production
- ✅ **Compression**: Gzip and Brotli compression enabled
- ✅ **CSS Code Splitting**: Separate CSS files per route

### 2. Caching Strategy (`vercel.json`)
- ✅ **Long-term Caching**: 1-year cache for hashed assets
- ✅ **Asset-specific Headers**: Different caching for JS, CSS, images, fonts

### 3. Image Optimization
- ✅ **OptimizedImage Component**: Created with:
  - Explicit width/height attributes
  - WebP format support with fallback
  - Lazy loading for non-critical images
  - Proper aspect ratio handling
  - Priority loading for LCP images

### 4. Critical Resource Optimization (`index.html`)
- ✅ **Preconnect**: Added for Google Analytics and Facebook Pixel
- ✅ **Preload LCP Image**: Hero image preloaded
- ✅ **Deferred Scripts**: Analytics scripts load after page load

## Required Actions

### 1. Convert Images to WebP ⚠️
**Priority: HIGH**

Convert all JPG/PNG images to WebP format for 25-35% smaller file sizes:

```bash
# Install Sharp (if not installed)
npm install --save-dev sharp

# Run the conversion script
npm run convert-images
```

The script will:
- Convert all JPG/PNG to WebP
- Keep original files as fallback
- Maintain image quality at 85%

### 2. Update Image Usage in Components ⚠️
**Priority: HIGH**

Replace all `<img>` tags with the `<OptimizedImage>` component:

**Before:**
```tsx
<img 
  src="/src/assets/hero-commercial.jpg" 
  alt="Commercial cleaning"
  className="w-full h-full object-cover"
/>
```

**After:**
```tsx
<OptimizedImage
  src="/src/assets/hero-commercial.jpg"
  alt="Commercial cleaning"
  width={1920}
  height={1080}
  priority={true} // For LCP images only
  className="w-full h-full object-cover"
/>
```

### 3. Identify and Optimize LCP Image ⚠️
**Priority: HIGH**

1. Run PageSpeed Insights to identify the LCP element
2. Update the preload link in `index.html`:
```html
<link rel="preload" as="image" href="/path/to/lcp-image.webp" type="image/webp" />
```

### 4. Code Splitting for Routes 📝
**Priority: MEDIUM**

Implement lazy loading for route components:

```tsx
// In App.tsx
import { lazy, Suspense } from 'react';

const Index = lazy(() => import('./pages/Index'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
// ... etc

// Wrap Routes in Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Index />} />
    // ... etc
  </Routes>
</Suspense>
```

### 5. Remove Unused Dependencies 📝
**Priority: MEDIUM**

Audit and remove unused packages:
```bash
npx depcheck
```

Consider if all @radix-ui components are needed on every page.

### 6. Optimize Third-Party Scripts 📝
**Priority: LOW**

- Consider using Google Tag Manager for analytics consolidation
- Implement consent management to load scripts only when needed

## Monitoring Performance

### Test After Each Change
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Or deploy to Vercel preview
vercel --prod
```

### Run PageSpeed Insights
- Test URL: https://pagespeed.web.dev/
- Test both mobile and desktop
- Focus on Core Web Vitals:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

## Expected Improvements

After implementing all optimizations:
- **Mobile Performance**: 65 → 85+ (Target)
- **Desktop Performance**: 90 → 95+ (Target)
- **LCP**: 7,850ms → < 2,500ms
- **Bundle Size**: Reduced by 30-40%
- **Image Size**: Reduced by 25-35%

## Next Steps

1. ✅ Install compression plugin: `npm install --save-dev vite-plugin-compression2`
2. ⚠️ Convert images to WebP format
3. ⚠️ Replace `<img>` tags with `<OptimizedImage>` component
4. ⚠️ Identify and preload LCP image
5. 📝 Implement route-based code splitting
6. 📝 Audit and remove unused dependencies
7. 📝 Test and measure improvements

## Resources

- [web.dev Performance](https://web.dev/performance/)
- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [React Performance](https://react.dev/learn/render-and-commit#optimizing-performance)
- [WebP Image Format](https://developers.google.com/speed/webp)

