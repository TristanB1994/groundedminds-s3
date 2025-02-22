import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})

// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// // import { ViteSSG } from 'vite-ssg';
// import { ViteSSG } from 'vite-react-ssg';

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react(), ViteSSG({
//       // Configure your routes
//       routes: [
//             { path: '/', component: () => import('./src/pages/Home.jsx') },
//             { path: '/home', component: () => import('./src/pages/Home.jsx') },
//             { path: '/about', component: () => import('./src/pages/About.jsx') },
//             { path: '/angieblandford', component: () => import('./src/pages/AboutAngieBlandford.jsx') },
//             { path: '/ankakrivokuca', component: () => import('./src/pages/AboutAnkaKrivokuca.jsx') },
//             { path: '/daniellekirshenbaum', component: () => import('./src/pages/AboutDanielleKirshenbaum.jsx') },
//             { path: '/moonsunjang', component: () => import('./src/pages/AboutMoonsunJang.jsx') },
//             { path: '/rafeyashami', component: () => import('./src/pages/AboutRafeyaShami.jsx') },
//             { path: '/contact', component: () => import('./src/pages/Contact.jsx') },
//             { path: '/faq', component: () => import('./src/pages/FAQ.jsx') },
//             { path: '/services', component: () => import('./src/pages/ServicesAll.jsx') },
//             { path: '/anxiety', component: () => import('./src/pages/ServicesAnxiety.jsx') },
//             { path: '/consultation', component: () => import('./src/pages/ServicesClinicalConsult.jsx') },
//             { path: '/individualtherapy', component: () => import('./src/pages/ServicesIndividualTherapy.jsx') },
//             { path: '/ocd', component: () => import('./src/pages/ServicesOcd.jsx') },
//             { path: '/trauma', component: () => import('./src/pages/ServicesTrauma.jsx') },
//             { path: '/resources', component: () => import('./src/pages/Resources.jsx') },
//           { path: '/', component: () => import('./src/pages/Home.jsx') },
//           { path: '/about', component: () => import('./src/pages/About.jsx') },
//           // Add more routes as necessary
//       ],
//     })],
//     server: {
//       port: 5173,
//     },
//     build: {
//       outDir: 'dist',
//     },
//     resolve: {
//       alias: {
//         '@': '/src',
//       },
//     },
//     // ssgOptions: {
//         // format: 'cjs', // Can also use 'esm' depending on your preference
//         // You can specify routes here if needed.
//         // routes: routes could be added here if custom routing is required
//     // },
// });