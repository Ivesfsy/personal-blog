# Personal Blog

A beautiful and responsive personal blog built with React, TypeScript, and styled-components.

![Personal Blog Screenshot](https://i.imgur.com/YourScreenshotHere.png)

## Features

- 📱 Fully responsive design for all devices
- 🎨 Beautiful and modern UI with customizable theme colors
- 📝 Blog posts with categories and tags
- 🔍 Search and filter functionality
- 📄 About page with timeline and skills sections
- 📞 Contact form with validation
- 🔗 SEO-friendly URLs

## Tech Stack

- React
- TypeScript
- React Router
- styled-components
- React Icons

## Project Structure

```
personal-blog/
├── public/              # Public assets
├── src/                 # Source files
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── assets/          # Assets (images, fonts, etc.)
│   ├── styles/          # Global styles
│   ├── data/            # Mock data
│   ├── App.tsx          # Main App component
│   └── index.tsx        # Entry point
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── webpack.config.js    # Webpack configuration
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/personal-blog.git
cd personal-blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Starts the development server
- `npm build` - Builds the app for production
- `npm test` - Runs tests

## Customization

### Colors

You can customize the theme colors by modifying the CSS variables in `src/styles/GlobalStyles.ts`.

```typescript
:root {
  --primary-color: #6b3fa0;  // Change to your desired primary color
  --secondary-color: #f8f9fa;
  --text-color: #333333;
  --light-text: #757575;
  --accent-color: #ff6b6b;
  --background-color: #ffffff;
  --card-color: #ffffff;
  --border-color: #e0e0e0;
  --hover-color: #f0f0f0;
}
```

### Content

Blog posts data is stored in `src/data/posts.ts`. You can modify this file to add, remove, or update blog posts.

## Deployment

You can deploy this project to any static site hosting service like Netlify, Vercel, or GitHub Pages.

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Unsplash](https://unsplash.com/) for the beautiful placeholder images
- [Google Fonts](https://fonts.google.com/) for the typography
- [React Icons](https://react-icons.github.io/react-icons/) for the icons
