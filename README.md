# Zernicka-Goetz Lab Website

This is the official website for the Zernicka-Goetz Lab, built with [Next.js](https://nextjs.org/) and powered by [Sanity.io](https://www.sanity.io/) as a headless CMS for content management.

## Tech Stack

- **Frontend**: Next.js 12.1.0 with React 17.0.2
- **Styling**: SCSS modules
- **CMS**: Sanity.io for content management
- **UI Components**: Material-UI (@mui/material)
- **Data Visualization**: D3.js libraries
- **Mapping**: Mapbox GL

## Getting Started

### 1. Install Dependencies

First, install the required dependencies:

```bash
npm install
```

### 2. Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management with Sanity.io

This website uses **Sanity.io** as a headless CMS, meaning all content (text, images, research data, etc.) is managed externally and fetched dynamically.

### How It Works

- **Content Source**: All content comes from the Sanity CMS (Project ID: `m3w3wkm5`)
- **Real-time Updates**: Changes made in Sanity Studio are reflected on the website
- **No Local Content**: The frontend contains no hardcoded content - everything is dynamic

### Key Content Types

- **`homePage`**: Main homepage content and sections
- **`page`**: Generic pages accessible via `/page/[slug]`
- **`labPage`**: People/lab members page
- **`funders`**: Funding organizations for the support page
- **Research, publications, news**: Various content types for different sections

## Site Structure

- **Home** (`/`) - Lab overview, mission, featured research
- **Research** (`/research`) - Research directions and projects
- **People** (`/people`) - Lab members and alumni
- **Publications** (`/publications`) - Academic papers and research outputs
- **News** (`/news`) - Updates and announcements
- **Art** (`/art`) - Scientific visualizations and lab artwork
- **Support** (`/support`) - Funding information and donation options

## Updating Content

### For Content Editors

1. **Access Sanity Studio** - Contact your administrator for Sanity Studio access
2. **Edit Content** - Use the Sanity interface to update text, images, and other content
3. **Publish Changes** - Changes are automatically reflected on the live site

### For Developers

#### Adding New Pages

**Option 1: Generic Page**
1. In Sanity, create a new `page` document
2. Set a unique `slug` (e.g., "new-page")
3. Add content sections
4. Page will be available at `/page/new-page`

**Option 2: Custom Page Type**
1. Create a new document type in Sanity
2. Add a corresponding utility function in `utils/`
3. Create a new page component in `pages/`

#### Component Structure

- **Components**: Reusable React components in `/components`
- **Utilities**: Data fetching functions in `/utils`
- **Styles**: SCSS modules for component-specific styling
- **Pages**: Next.js pages that combine components and data

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run mkComp   # Generate new component (custom script)
```

## Creating Components

Use the custom component generator:

```bash
npm run mkComp ComponentName
```

This creates a new component with the standard file structure and SCSS module.

## Deployment

### Netlify Deployment

This site is configured for deployment on Netlify. Make sure to:

1. Set the **Build command** to: `npm run build`
2. Set the **Publish directory** to: `.next`
3. Install the **@netlify/plugin-nextjs** plugin

### Common Build Issues

#### Image Optimization Error (mozjpeg WASM)

If you encounter the error `Failed to parse URL from node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm`, add this configuration to `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable image optimization for deployment
  },
  // Alternative: Use a different image loader
  // images: {
  //   loader: 'custom',
  //   loaderFile: './my-loader.js',
  // },
}

module.exports = nextConfig
```

**Or** create a custom image loader file if you want to keep optimization:

```javascript
// my-loader.js
export default function myImageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
}
```

#### Other Build Fixes

- **Outdated browserslist**: Run `npx browserslist@latest --update-db`
- **ESLint warnings**: Add rules to `.eslintrc.json` if needed
- **Missing dependencies**: Ensure all packages are in `package.json`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [React Documentation](https://reactjs.org/docs)
- [Netlify Next.js Plugin](https://docs.netlify.com/integrations/frameworks/next-js/)
