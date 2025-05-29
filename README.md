# Arvan Challenge

A modern dashboard application built with Next.js 15, React 19, and TypeScript. This project features a comprehensive article management system with authentication, dark mode support, and a beautiful responsive UI.

## ✨ Features

- 📱 **Responsive Dashboard** - Modern, mobile-first design with sidebar navigation
- 📝 **Article Management** - Create, view, and manage articles with pagination
- 🔐 **Authentication System** - Login and registration functionality
- 🌙 **Dark Mode Support** - Theme switching with `next-themes`
- 🎨 **Modern UI Components** - Built with Shadcn/UI and Radix UI primitives
- ⚡ **Performance Optimized** - Turbopack for faster development builds
- 🎯 **TypeScript** - Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Frontend**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd arvan-challenge
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
arvan-challenge/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes (login, register)
│   ├── dashboard/         # Dashboard pages and components
│   │   ├── articles/      # Article management
│   │   └── components/    # Dashboard-specific components
│   ├── api/              # API routes
│   ├── components/       # Shared components
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   └── ui/              # Shadcn/UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
└── public/              # Static assets
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🎨 UI Components

This project uses a comprehensive set of UI components built with Radix UI primitives and styled with Tailwind CSS:

- **Navigation**: Sidebar, breadcrumbs, dropdown menus
- **Data Display**: Tables, tooltips, separators
- **Feedback**: Toasts (Sonner), loading skeletons
- **Forms**: Input fields, buttons
- **Layout**: Sheets, dialogs

## 🌙 Theme Support

The application supports both light and dark themes using `next-themes`. The theme can be toggled throughout the application with persistent storage.

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop screens (1024px+)

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev/) - Learn about React 19 features
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Shadcn/UI](https://ui.shadcn.com/) - Beautiful and accessible components
- [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript documentation
