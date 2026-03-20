# 🧠 The Verdictor — AI Philosopher

> An AI-powered philosophical reasoning and verdict engine built with React, TypeScript, Supabase, and Vite.

🌐 **Live Demo:** [verdict-ai-philosopher.vercel.app](https://verdict-ai-philosopher.vercel.app)

---

## 📖 About

**The Verdictor** is a web application that brings philosophical reasoning to life through AI. Users can pose moral dilemmas, ethical debates, or philosophical questions and receive thoughtful, structured verdicts powered by AI — in the style of a philosopher.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + `tailwindcss-animate` |
| UI Components | Radix UI + shadcn/ui |
| Animations | Framer Motion |
| Backend / Database | Supabase (PostgreSQL + Auth) |
| Data Fetching | TanStack React Query |
| Forms | React Hook Form + Zod |
| Routing | React Router DOM v6 |
| Charts | Recharts |
| Markdown Rendering | `react-markdown` |
| Testing | Vitest + Playwright |
| Package Manager | Bun |
| Deployment | Vercel |

---

## 📁 Project Structure

```
verdict-ai-philosopher/
├── public/               # Static assets
├── src/                  # Application source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level page components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities and helpers
├── supabase/             # Supabase edge functions and migrations
├── .env                  # Environment variables (see setup below)
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── playwright.config.ts  # E2E test configuration
└── vitest.config.ts      # Unit test configuration
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ or [Bun](https://bun.sh/)
- A [Supabase](https://supabase.com/) account and project

### 1. Clone the Repository

```bash
git clone https://github.com/Suraj-Kumar-Mahato/verdict-ai-philosopher.git
cd verdict-ai-philosopher
```

### 2. Install Dependencies

Using Bun (recommended):
```bash
bun install
```

Or using npm:
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-anon-key
VITE_SUPABASE_PROJECT_ID=your-project-id
```

> ⚠️ Never commit real credentials to version control. Add `.env` to `.gitignore`.

### 4. Run the Development Server

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Testing

### Unit Tests (Vitest)

```bash
bun test
# or watch mode
bun run test:watch
```

### End-to-End Tests (Playwright)

```bash
npx playwright test
```

---

## 🏗️ Building for Production

```bash
bun run build
# Preview the production build
bun run preview
```

---

## 🔧 Available Scripts

| Script | Description |
|---|---|
| `dev` | Start the local development server |
| `build` | Build for production |
| `build:dev` | Build in development mode |
| `preview` | Preview the production build |
| `lint` | Run ESLint |
| `test` | Run unit tests with Vitest |
| `test:watch` | Run tests in watch mode |

---

## 🌍 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/).
3. Add the required environment variables in the Vercel dashboard.
4. Deploy!

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a [GitHub issue](https://github.com/Suraj-Kumar-Mahato/verdict-ai-philosopher/issues) or submit a pull request.

---

## 👤 Author

**Suraj Kumar Mahato**
- GitHub: [@Suraj-Kumar-Mahato](https://github.com/Suraj-Kumar-Mahato)

---

## 📄 License

This project is currently unlicensed. Please contact the author for usage permissions.
