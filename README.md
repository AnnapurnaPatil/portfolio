# Annapurna Patil's Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing my journey as a Front-End Developer.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: System-aware theme switching with manual override
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessibility First**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Code splitting, lazy loading, and optimized animations
- **Type Safe**: Full TypeScript implementation with strict type checking

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)
- **Development**: Turbopack for fast development builds

## 📁 Project Structure

```
annapurna-portfolio/
├── app/
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   │   ├── ErrorBoundary.tsx  # Error handling
│   │   ├── LoadingSpinner.tsx # Loading states
│   │   ├── SEO.tsx           # Structured data
│   │   └── theme-*.tsx       # Theme components
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── data/
│   └── portfolio-data.ts    # Portfolio content data
├── lib/
│   ├── constants.ts         # App constants
│   └── utils.ts            # Utility functions
├── types/
│   └── portfolio.ts        # TypeScript interfaces
└── public/                 # Static assets
```

## 🎨 Design Philosophy

The portfolio follows a **code-like aesthetic** designed specifically for developers:

- **Terminal-inspired UI**: Command-line aesthetics with syntax highlighting
- **Monospace fonts**: Code-style typography for technical sections
- **Syntax highlighting**: Color-coded information display
- **Developer-friendly**: Built by a developer, for developers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnnapurnaPatil/annapurna-portfolio.git
cd annapurna-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/portfolio/](http://localhost:3000/portfolio/) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production and generate static export
- `npm run export` - Build for production and generate static export (alias for build)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## 📊 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Optimized Animations**: Hardware-accelerated animations with `will-change`
- **Image Optimization**: Next.js Image component (when enabled)
- **Bundle Analysis**: Built-in bundle analyzer support

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user's motion preferences
- **High Contrast**: Support for high contrast mode

## 🔧 Customization

### Updating Content

Edit the data in `data/portfolio-data.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};
```

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. Update colors in `app/globals.css`:

```css
:root {
  --primary: #your-color;
  --secondary: #your-secondary-color;
  /* ... other variables */
}
```

### Adding New Sections

1. Create a new component in `app/components/sections/`
2. Add the data structure to `types/portfolio.ts`
3. Update `data/portfolio-data.ts` with your content
4. Import and use in `app/page.tsx`

## 🚀 Deployment

The project is configured for static export and deployment on GitHub Pages:

### Automatic Deployment
1. Push your code to GitHub
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Site will be available at `https://annapurnapatil.github.io/portfolio/`

### Manual Deployment
1. Run `npm run build` to generate static files in the `out/` directory
2. Upload the `out/` folder contents to any static hosting service

### GitHub Pages Setup
The project includes:
- **Static Export**: Configured in `next.config.ts` with `output: 'export'`
- **GitHub Actions**: Automated deployment workflow in `.github/workflows/nextjs.yml`
- **Base Path**: Configured for GitHub Pages subdirectory deployment


## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD structured data for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: annapurnapatil23@gmail.com
- **LinkedIn**: [Annapurna Patil](https://www.linkedin.com/in/annapurna-patil-34b988128/)
- **GitHub**: [AnnapurnaPatil](https://github.com/AnnapurnaPatil)

---

Built with ❤️ by Annapurna Patil using Next.js, TypeScript, and Tailwind CSS.
