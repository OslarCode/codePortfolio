# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Struture

oslar-code-portfolio/
├── node_modules/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── LoadingScreen.jsx # Pantalla de carga con BoltLoader
│ │ ├── MainContent.jsx # Contenido principal de tu portfolio
│ ├── App.jsx # Componente principal de la aplicación
│ ├── index.css # Estilos globales
│ ├── main.jsx # Punto de entrada de la aplicación
│ └── vite-env.d.ts
├── .gitignore
├── package.json
├── tailwind.config.js # Configuración de Tailwind CSS
├── postcss.config.js # Configuración de PostCSS
├── vite.config.js # Configuración de Vite
└── README.md
