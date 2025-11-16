# Marshall Chen - Portfolio Website

A modern, terminal-themed portfolio website built with React, featuring glassmorphism design and smooth animations.

## 🎨 Design Features

- **Deep Ocean Glassmorphism Theme** - Modern glass-card UI with terminal aesthetics
- **Custom Cursor** - Interactive custom cursor with blend modes
- **Scroll Animations** - Fade-in sections and animated hero text
- **Terminal Typing Effect** - Simulated terminal text animation
- **Fully Responsive** - Mobile-first design that works on all devices
- **Accessibility** - Respects `prefers-reduced-motion` for accessibility

## 🚀 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** JetBrains Mono, Inter (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
portfolio-website/
├── src/
│   ├── components/        # Reusable components
│   │   ├── AnimatedHeroText.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── FadeInSection.jsx
│   │   ├── GlassCard.jsx
│   │   ├── TerminalCard.jsx
│   │   └── TerminalText.jsx
│   ├── sections/          # Page sections
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── SkillsSection.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── DESIGN.md             # Comprehensive design document
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎯 Sections

1. **Hero** - Full-screen introduction with terminal prompt and info cards
2. **About** - Code-formatted bio showcasing developer profile
3. **Skills** - Categorized technical skills with badges
4. **Experience** - Work history with expandable details
5. **Projects** - Featured projects with tech stacks
6. **Contact** - Social links and email CTA

## 🎨 Color Palette

- **Background:** Deep ocean gradient (`#0a1929` → `#1a2332` → `#0d1b2a`)
- **Primary Accent:** Cyan (`#00d9ff`)
- **Secondary Accent:** Green (`#00ff88`)
- **Text Primary:** Light blue (`#e0f2fe`)
- **Text Secondary:** Sky blue (`#7dd3fc`)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1023px
- **Desktop:** 1024px - 1279px
- **Large Desktop:** ≥ 1280px

## ⚡ Performance

- Optimized bundle size with code splitting
- Lazy loading for sections
- Efficient animations with CSS transforms
- Minimal dependencies

## 🔧 Customization

To customize the portfolio for your own use:

1. Update personal information in `/src/sections/`
2. Modify colors in `tailwind.config.js` and `src/index.css`
3. Add/remove skills in `SkillsSection.jsx`
4. Update experience in `ExperienceSection.jsx`
5. Modify projects in `ProjectsSection.jsx`
6. Change contact info in `ContactSection.jsx`

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙋‍♂️ Author

**Marshall Chen**
- Email: marshallxie16@gmail.com
- GitHub: [@MarshallXie16](https://github.com/MarshallXie16)
- LinkedIn: [marshallxie](https://linkedin.com/in/marshallxie)

---

Built with ❤️ using React, Tailwind CSS, and Vite
