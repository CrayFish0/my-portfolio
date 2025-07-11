# My Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, minimalistic design
- 📱 Fully responsive across all devices
- 🌙 Dark/Light theme toggle with system preference support
- ✨ Smooth scroll animations and page transitions
- 🚀 Optimized performance
- 📧 Contact form with validation
- 🔍 SEO optimized with meta tags
- ♿ Accessible design

## Tech Stack

- **Frontend**: React, JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 16.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.jsx` - Name, title, and introduction
- `src/components/About.jsx` - About section content
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills and expertise
- `src/components/Contact.jsx` - Contact information
- `index.html` - Meta tags and SEO information

### Styling

The design uses Tailwind CSS with custom color schemes defined in `tailwind.config.js`. You can customize:

- Colors in the `theme.extend.colors` section
- Fonts in the `theme.extend.fontFamily` section
- Animations in the `theme.extend.animation` section

### Images

Replace the placeholder images in the projects section with your actual project screenshots:

- Add your images to the `public` folder
- Update the `image` property in the projects array in `src/components/Projects.jsx`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
