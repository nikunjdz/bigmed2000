import { Suspense, lazy, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routes } from "./routesConfig";

const Bigmed2001Bigmedic = lazy(() => import("./pages/Bigmed2001/Bigmedic"));

// Helper component to handle scrolling to anchors (#hash) smoothly on route changes
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = decodeURIComponent(location.hash.substring(1));
      setTimeout(() => {
        const element = document.getElementById(hash) || document.querySelector(`a[name="${hash}"]`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const queryClient = new QueryClient();

const navLinks = [
  { to: "/nanmain2.html", label: "Intro" },
  { to: "/bigmedic.html", label: "VP Elect" },
  { to: "/bigally.html", label: "Allies" },
  { to: "/bigcraft.html", label: "Tactics" },
  { to: `${import.meta.env.BASE_URL}bignews/bigbnews.html`, label: "News", native: true },
  { to: "/bigstudy.html", label: "Study" },
  { to: "/epistles.html", label: "Epistles" },
  { to: "/aidabet.html", label: "Help" },
  { to: "/bigfaq.html", label: "FAQ" },
  { to: "/av.html", label: "A/V Cache" },
  { to: "/nh.html", label: "NH Win" },
];

const sidebarLinks = [
  { to: "/homesite.html", img: `${import.meta.env.BASE_URL}graph/fleart1.jpg`, alt: "Home", width: 128, height: 198 },
  { to: "/password.html", img: `${import.meta.env.BASE_URL}graph/fpass3.jpg`, alt: "Passwords", width: 128, height: 35 },
  { to: "/platform.html", img: `${import.meta.env.BASE_URL}graph/fplat1.jpg`, alt: "Platform", width: 128, height: 35 },
  { to: "/strategy.html", img: `${import.meta.env.BASE_URL}graph/fstrat1.jpg`, alt: "Strategy", width: 128, height: 35 },
  { to: "/advisors.html", img: `${import.meta.env.BASE_URL}graph/fadv3.jpg`, alt: "Advisors", width: 128, height: 35 },
];

// Loading spinner component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    flexDirection: 'column',
    gap: '20px'
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #0000A0',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <p style={{ fontSize: '16px', color: '#666' }}>Loading...</p>
  </div>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleGlobalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;

    const href = target.getAttribute("href");
    if (!href) return;

    if (href.startsWith("http://") || href.startsWith("https://")) {
      return;
    }
    if (href.startsWith("mailto:") || href.startsWith("javascript:")) {
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const hash = href.substring(1);
      const el = document.getElementById(hash) || document.querySelector(`a[name="${hash}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.location.hash = hash;
      }
      return;
    }

    try {
      const url = new URL(target.href);
      if (url.origin === window.location.origin) {
        e.preventDefault();
        const base = import.meta.env.BASE_URL;
        let path = url.pathname;
        if (path.startsWith(base)) {
          path = path.slice(base.length - 1);
        }
        navigate(path + url.search + url.hash);
      }
    } catch (err) {
      // Fallback
    }
  };

  return (
    <div className="app-layout" onClick={handleGlobalClick}>
      {/* TOP NAV BAR */}
      <div className="top-frame">
        {/* Logo row */}
        <div className="logo-row">
          <div className="logo-box">
            <img src={`${import.meta.env.BASE_URL}graph/anim/nanlogo9.gif`} alt="Nancho 2002" className="top-logo" onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }} />
            <span className="app-logo-text">
              &nbsp;NANCHO BIG MED 2002
            </span>
          </div>
        </div>
        {/* Nav links row */}
        <div className="legacy-nav-row">
          <a href="#/" className="pulse-link" aria-label="Features">
            <img src={`${import.meta.env.BASE_URL}graph/pulse2.gif`} alt="" width={15} height={15} />
          </a>
          <nav className="legacy-top-nav">
            {navLinks.map((link, index) => (
              <span key={link.to}>
                {index > 0 && <span className="nav-separator">|&nbsp;</span>}
                {"native" in link && link.native ? (
                  <a href={link.to}>{link.label}</a>
                ) : (
                  <Link to={link.to}>{link.label}</Link>
                )}
                &nbsp;
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* BODY: SIDEBAR + MAIN CONTENT */}
      <div className="body-frame">
        {/* SIDEBAR */}
        <div
          className="side-frame"
        >
          {sidebarLinks.map((link) => (
            <Link to={link.to} key={link.to} className="side-link">
              <img
                src={link.img}
                alt={link.alt}
                width={link.width}
                height={link.height}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </Link>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="main-frame">
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <ScrollToHash />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Bigmed2001Bigmedic />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
