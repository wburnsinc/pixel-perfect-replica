import { Link } from "@tanstack/react-router";

const COLS = [
  {
    title: "Marketplace",
    links: [
      { label: "SHARE", to: "/share" },
      { label: "PoolShare", to: "/poolshare" },
      { label: "ThriftGirl", to: "/thriftgirl" },
      { label: "Playdate", to: "/playdate" },
      { label: "RideShare", to: "/rideshare" },
      { label: "EarnTree", to: "/earntree" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Find a pro", to: "/services" },
      { label: "Blue Truck", to: "/blue-truck" },
      { label: "BurnCall", to: "/burncall" },
      { label: "Contractor portal", to: "/contractor/portal" },
      { label: "Join as contractor", to: "/contractors/join" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Investors", to: "/investor" },
      { label: "Help", to: "/help" },
      { label: "Admin", to: "/admin" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign in", to: "/sign-in" },
      { label: "Create account", to: "/sign-up" },
      { label: "Dashboard", to: "/dashboard" },
      { label: "Settings", to: "/settings" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link to="/" className="font-black text-2xl tracking-tight">
              <span className="text-white">BUY</span>
              <span className="text-secondary">SHARE</span>
              <span className="text-white/60 text-lg font-semibold">.co</span>
            </Link>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              One platform connecting homeowners, businesses and property owners with trusted service
              professionals across every industry in Southwest Florida.
            </p>
            <p className="mt-4 text-xs text-white/50">
              Charlotte County · Lee County · SHARE™ by BlueTruck LLC &amp; BURNS INC.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link to={l.to} className="text-sm text-white/80 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/60">
          <span>© {new Date().getFullYear()} BUYSHARE.co — All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/legal/$page" params={{ page: "terms" }}>Terms</Link>
            <Link to="/legal/$page" params={{ page: "privacy" }}>Privacy</Link>
            <Link to="/legal/$page" params={{ page: "contact" }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
