# Shoaib Ghulam — Portfolio

Source code for my personal portfolio site, live at **[shoaibghulam.vercel.app](https://shoaibghulam.vercel.app)**.

A single-page React site with hero, what-I-do, skills, portfolio, certificates, testimonials, blog and contact sections. Section content (projects, skills, certificates, testimonials) is loaded from a JSON data file through a small `useData` hook and a shared Axios client, so it can be pointed at a real backend by changing one base URL.

## Stack

| Layer | Choice |
|---|---|
| UI | React 18 · Vite · Tailwind CSS · Flowbite React |
| Motion | AOS (animate on scroll) · Swiper · react-scroll |
| Data | Axios instance + `useData` hook over a JSON data file (backend-ready) |
| Tooling | ESLint (react, react-hooks, react-refresh) · PostCSS · Autoprefixer |
| Deploy | Vercel |

## Structure

```
src/
  sections/     Hero, WhatIDo, Skill, Portfolio, Certificate, Testimonial, Blog, Contact
  components/   Navbar, NavItem, Footer, TestimonialItem
  hooks/        useData.js — fetches section content from the API
  services/     allData.js — API endpoints
  utils/        axiosInstance.js — shared Axios client
  common/       Loader
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
npm run lint
```

## Author

**Shoaib Ghulam** — Full-Stack Developer · [LinkedIn](https://linkedin.com/in/shoaibghulam) · [GitHub](https://github.com/shoaibghulam)
