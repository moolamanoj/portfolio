# Manoj Kumar Moola - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my experience as a Front-End Developer and AI Engineer, highlighting projects, skills, and professional experience.

## Features

- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance Optimized**: Built with Next.js for optimal performance
- ♿ **Accessible**: Follows WCAG accessibility standards
- 🎭 **Smooth Animations**: Powered by Framer Motion for engaging interactions
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment using GitHub Actions.

### Quick Setup

1. **Create a GitHub repository** (name it `portfolio` or your preferred name)
2. **Update base path** if your repo name is not `portfolio`:
   - Edit `.github/workflows/deploy.yml` and change `BASE_PATH` and `ASSET_PREFIX`
   - Edit `next.config.js` and update the default basePath
3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as the source
5. **Wait for deployment** (check the Actions tab)

Your portfolio will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

📖 **For detailed instructions**, see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Featured projects
│   ├── Skills.tsx       # Technical skills
│   ├── Contact.tsx      # Contact information
│   └── Footer.tsx       # Footer component
└── public/              # Static assets
```

## Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Personal background and motivation
3. **Experience**: Professional work history
4. **Projects**: Featured projects with descriptions
5. **Skills**: Technical skills with proficiency levels
6. **Contact**: Contact information and social links

## Customization

To customize this portfolio:

1. Update personal information in the respective component files
2. Modify colors in `tailwind.config.js`
3. Add/remove projects in `components/Projects.tsx`
4. Update skills in `components/Skills.tsx`

## License

This project is open source and available for personal use.

