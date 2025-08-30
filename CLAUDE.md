# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 3000 with auto-open browser
- `npm run build` - Build for production 
- `npm run preview` - Preview production build locally

**Note:** Always run `npm install` first if dependencies are missing (Vite not recognized error).

## Application Architecture

This is a **vanilla JavaScript SPA** built with Vite, featuring an Apple-inspired design for showcasing brain-AI device technology.

### Core Structure
- **Entry Point**: `src/main.js` instantiates the App class
- **Main Application**: `src/app.js` contains the App class that manages all UI rendering and interactions
- **Styling**: `src/style.css` uses CSS custom properties with Apple-inspired design system
- **No Framework**: Pure vanilla JS with class-based architecture, no routing library

### App Class Architecture
The `App` class in `src/app.js` uses a component-like approach:
- `render()` - Builds the entire HTML structure using template literals
- `getHeroSection()`, `getProductSection()`, `getFeaturesSection()` - Modular section generators
- `bindEvents()` - Handles all DOM event listeners after rendering
- Event delegation pattern for button interactions and hover effects

### Design System
The CSS follows Apple's design principles:
- CSS custom properties for consistent theming (`--primary-blue`, `--gradient-*`, etc.)
- Product sections with gradient backgrounds and hover animations
- Responsive grid system for features
- Apple system fonts and spacing patterns

### Product Content
The application showcases three brain-AI devices:
1. **NeuroCore Pro** - Neural processing unit
2. **MindBridge Interface** - Thought-to-digital connection
3. **ThoughtStream Processor** - Consciousness analysis

Features section highlights: Lightning Fast, Secure & Private, Precision Control, Universal Compatibility, AI-Powered, Real-time Processing.

## Development Notes

- **Port Configuration**: Vite runs on port 3000 (configured in `vite.config.js`)
- **Module Type**: Project uses ES modules (`"type": "module"` in package.json)
- **No Build Tools**: Pure Vite setup with no additional bundlers or processors
- **CSS Architecture**: Single stylesheet with CSS Grid/Flexbox and custom properties
- **No State Management**: Simple class-based state management within the App class
- **Git Workflow**: After each change make sure to commit and push it to the git