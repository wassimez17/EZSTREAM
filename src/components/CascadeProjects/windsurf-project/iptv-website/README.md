# EZSTREAM IPTV Website

## Project Description
Premium IPTV streaming service with modern responsive design, featuring multi-language support, device compatibility, and secure payment options.

## Technology Stack
- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with modern animations and glassmorphism effects
- **Deployment**: Static site compatible with Vercel, GitHub Pages

## Features
- 🌍 Multi-language support (FR, EN, AR, DE, ES)
- 📱 Fully responsive design (Desktop/Mobile/Tablet)
- 🎨 Modern UI with glassmorphism and 3D effects
- 💳 Multiple payment methods
- 📺 Device compatibility showcase
- 🎬 Premium content streaming
- ⏰ Real-time countdown timer

## Project Structure
```
iptv-website/
├── public/           # Static assets
├── src/             # React components and styles
│   ├── App.jsx       # Main application component
│   ├── main.jsx      # React entry point
│   ├── App.css       # Main stylesheet
│   └── translations.js # Multi-language support
├── dist/            # Built production files
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
└── vercel.json      # Vercel deployment config
```

## Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

### Vercel (Recommended)
1. Run `npm run build`
2. Deploy the `dist/` folder to Vercel
3. Set root directory to `dist/` in Vercel settings

### GitHub Pages
1. Run `npm run build`
2. Push the `dist/` folder to your repository
3. Configure GitHub Pages to use the `dist/` folder as source

## File Structure for Static Deployment
The project is configured for static hosting with the following key files:
- `dist/index.html` - Main HTML file
- `dist/assets/` - CSS and JavaScript bundles
- `dist/vercel.json` - Vercel routing configuration
- `.gitignore` - Excludes unnecessary files from Git

## Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License
© 2025 EZSTREAM. All rights reserved.
