# My CTF Journey Website

![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-blue.svg)
![Jekyll](https://img.shields.io/badge/Powered_by-Jekyll-red.svg)
![Theme](https://img.shields.io/badge/Theme-Dark/Light-ff69b4.svg)

A dynamic knowledge base for documenting my cybersecurity journey, CTF writeups, and technical notes with advanced privacy controls.

🔗 **Live Site:** [https://pathogenickatt.github.io](https://pathogenickatt.github.io)

## ✨ Features

### Core Systems
- **Writeups Hub**: Filterable CTF solutions by difficulty (Easy/Medium/Hard)
- **Knowledge Base**: Searchable technical notes with tagging
- **Private CV**: Password-protected 
- **Dark/Light Mode**: Automatic system preference detection

### Technical Highlights
- **Advanced Search**:
  - Real-time note filtering
  - Writeup difficulty filtering
- **Content Protection**:
  - Client-side password gates
  - Obfuscated sensitive content
- **Developer Experience**:
  - Code snippet copy buttons
  - Zoomable challenge screenshots
  - Syntax-highlighted exploit code

## 🛠️ Tech Stack
- **Framework**: Jekyll (Ruby)
- **Frontend**: HTML5, CSS3, JavaScript
- **Deployment**: GitHub Pages
- **Extensions**:
  - Marked.js (Markdown rendering)
  - Highlight.js (Code syntax)
  - Font Awesome (Icons)

## 🚀 Getting Started

### Local Development
```bash
# Install dependencies
bundle install

# Run development server
bundle exec jekyll serve --livereload

# Build production site
JEKYLL_ENV=production bundle exec jekyll build