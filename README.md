# Paycif

A modern web application that enables tourists in Thailand to scan and pay via PromptPay QR codes using their home currency. The merchant receives Thai Baht instantly while tourists pay in their preferred currency with transparent exchange rates.

## Features

- **Scan & Pay Like a Local**: Scan PromptPay QR codes at shops and pay seamlessly without language barriers
- **Multi-Currency Support**: Prices displayed in both Thai Baht and your home currency
- **Instant Merchant Payment**: Merchants receive Thai Baht via PromptPay within seconds
- **Transparent & Secure**: Clear exchange rates and fees shown before confirmation with encrypted transactions
- **Responsive Design**: Built with Tailwind CSS and shadcn/ui components for a modern UI
- **Client-Side Routing**: React Router for smooth navigation between pages

## Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17 with shadcn/ui components
- **Routing**: React Router DOM 6.30.1
- **State Management**: TanStack Query (React Query) 5.83.0
- **Form Handling**: React Hook Form 7.61.1 with Zod validation
- **UI Components**: Radix UI primitives via shadcn/ui
- **Icons**: Lucide React
- **Testing**: Vitest 3.2.4 and Playwright 1.57.0
- **Package Manager**: Bun

## Project Structure

```
├── src/
│   ├── assets/          # Static assets (images, etc.)
│   ├── components/      # Reusable React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Layout.tsx  # Main layout component
│   │   └── ScrollToTop.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and configurations
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Home page
│   │   ├── About.tsx   # About page
│   │   ├── HowItWorks.tsx
│   │   ├── Contact.tsx
│   │   ├── Terms.tsx
│   │   ├── Privacy.tsx
│   │   ├── AmlPolicy.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx         # Main application component
│   ├── App.css         # App-specific styles
│   ├── index.css       # Global styles
│   └── main.tsx        # Application entry point
├── public/             # Public static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── vitest.config.ts    # Vitest testing configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

### Development

Start the development server:

```bash
bun run dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
bun run build
# or
npm run build
```

Preview the production build:

```bash
bun run preview
# or
npm run preview
```

### Testing

Run unit tests:

```bash
bun run test
# or
npm run test
```

Run tests in watch mode:

```bash
bun run test:watch
# or
npm run test:watch
```

### Code Quality

Run ESLint:

```bash
bun run lint
# or
npm run lint
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `build:dev` | Build in development mode |
| `preview` | Preview production build |
| `lint` | Run ESLint |
| `test` | Run Vitest tests |
| `test:watch` | Run tests in watch mode |

## Pages

- **Home** (`/`) - Landing page with feature highlights
- **About** (`/about`) - Information about Paycif
- **How It Works** (`/how-it-works`) - Step-by-step guide
- **Contact** (`/contact`) - Contact form and information
- **Terms of Service** (`/terms`) - Terms and conditions
- **Privacy Policy** (`/privacy`) - Privacy information
- **AML Policy** (`/aml-policy`) - Anti-Money Laundering policy

## Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
VITE_API_URL=your-api-url
VITE_APP_NAME=Paycif
```

## License

This project is private and proprietary.

## Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
