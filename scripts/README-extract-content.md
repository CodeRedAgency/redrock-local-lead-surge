# Content Extraction Script

This script extracts content from the old Vite project's TSX service page files and converts them to structured JSON files.

## Usage

```bash
node scripts/extract-content.js
```

## What it does

1. **Scans** `src/pages/[location]/[service]/+Page.tsx` files recursively
2. **Extracts** the following content:
   - Hero section (H1, subtitle, image)
   - Metadata (title, description)
   - Trust/benefits section
   - Areas served (neighborhoods with FAQs and testimonials)
   - FAQ section
   - Other services section
   - CTA section
3. **Outputs** JSON files to `my-next-app/data/location-services/[location]-[service].json`

## Requirements

- Node.js
- cheerio (installed as dev dependency)

## File Naming

Files are named using the pattern: `[location]-[service].json`

Examples:
- `las-vegas-church-cleaning.json`
- `dallas-standard-cleaning-services.json`
- `maui-deep-cleaning-services.json`

## Output Format

The script generates JSON files matching the `ServicePageContent` type defined in `my-next-app/types/service-page.ts`.

## Notes

- The script uses cheerio for HTML/JSX parsing
- Falls back to regex parsing if cheerio fails
- Handles nested neighborhood data structures
- Preserves FAQs, testimonials, and other structured content


