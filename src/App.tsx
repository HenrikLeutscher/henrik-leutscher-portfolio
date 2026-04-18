import { NavLink, Navigate, Outlet, Route, Routes, BrowserRouter } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-indigo-600 text-white'
      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
  }`

function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold">Henrik Leutscher Portfolio</h1>
          <nav className="flex gap-2" aria-label="Main navigation">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <Outlet />
      </main>
    </div>
  )
}

function HomePage() {
  return (
    <section className="space-y-4">
      <p className="text-sm uppercase tracking-wide text-indigo-300">Vite + React + Tailwind + TypeScript</p>
      <h2 className="text-4xl font-bold">Hi, I&apos;m Henrik.</h2>
      <p className="max-w-2xl text-slate-300">
        Welcome to my portfolio. This app is set up with route-based navigation so each section has its own URL.
      </p>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="space-y-3">
      <h2 className="text-3xl font-semibold">About</h2>
      <p className="max-w-2xl text-slate-300">I build modern web applications with clean UX and reliable frontend architecture.</p>
    </section>
  )
}

function ProjectsPage() {
  return (
    <section className="space-y-3">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="max-w-2xl text-slate-300">Selected work will appear here, including project details and technologies used.</p>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="space-y-3">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="max-w-2xl text-slate-300">Reach out for collaboration opportunities.</p>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
