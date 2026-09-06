# Adora - Multipage React App

A modern, responsive multipage React application built with React Router, Tailwind CSS, and Vite.

## Features

- 🎨 **Modern UI Design** - Beautiful, responsive interface with Tailwind CSS
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🔀 **React Router** - Smooth page navigation with client-side routing
- ⚡ **Vite** - Lightning-fast development and build process
- 🎯 **Multiple Pages** - Home, About, Services, Portfolio, and Contact pages
- 💬 **Contact Form** - Functional contact form with validation
- 🔒 **Modern Best Practices** - Clean code structure and components

## Pages

### Home
Landing page with hero section, features overview, and call-to-action buttons.

### About
Company information, mission statement, and team members.

### Services
Showcase of all services offered with detailed descriptions.

### Portfolio
Display of completed projects and case studies.

### Contact
Contact information and functional contact form.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **PostCSS** - CSS processing

## Customization

You can easily customize:

- **Colors** - Edit `tailwind.config.js` to change the color scheme
- **Content** - Modify page content in `src/pages/`
- **Navigation** - Update navigation links in `src/components/Navigation.jsx`
- **Fonts** - Add custom fonts in `src/index.css`

## License

MIT License - feel free to use this project for your own purposes.
