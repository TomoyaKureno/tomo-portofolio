# Tomo Portfolio

Modern personal portfolio website with Apple-like visual direction, motion-driven UI, and CMS-based content management.

## Project Overview

This project is a multi-page portfolio application built to present profile, resumes, projects, certificates, and contact information in a clean and premium interface.
Content is managed from Hygraph and rendered through a typed GraphQL integration, while UI interactions are powered by Mantine and Framer Motion.

## Main Features

- Apple-like dark and light theme with toggle support
- Responsive layout with dedicated desktop sidebar and mobile navigation
- Project listing, filtering, and project detail pages
- Resume timeline for education and experience
- Certificates and technologies showcase
- Contact form with SMTP mail delivery
- Per-page/per-item animation behaviors for better UX consistency

## Pages

- `About`
- `Resumes`
- `Projects`
- `Project Detail`
- `Certificates`
- `Contact`

## Tech Stack

- Framework: `Next.js 16` (App Router)
- Language: `TypeScript`
- UI Library: `Mantine`
- Animation: `Framer Motion`
- Icons: `Lucide React`
- Data Fetching: `graphql-request`
- Client Cache/State Utilities: `@tanstack/react-query`
- CMS: `Hygraph` (GraphQL API)
- Code Generation: `GraphQL Code Generator`
- Deployment Target: `Vercel`

## Content Source

All portfolio data (profile, projects, resumes, certificates, technologies, testimonials) is modeled and served from Hygraph via GraphQL queries.

## Project Goal

Deliver a production-ready portfolio that is visually polished, easy to update from CMS, and scalable for future sections/features without changing core architecture.
