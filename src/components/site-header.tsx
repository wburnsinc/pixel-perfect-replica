import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Phone, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  {
    label: "Marketplace",
    href: "/share",
    children: [
      { label: "SHARE — rent anything", href: "/share" },
      { label: "PoolShare", href: "/poolshare" },
      { label: "ThriftGirl", href: "/thriftgirl" },
      { label: "Playdate", href: "/playdate" },
      { label: "RideShare", href: "/rideshare" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Blue Truck", href: "/blue-truck" },
  {
    label: "More",
    href: "/about",
    children: [
      { label: "BurnCall", href: "/burncall" },
      { label: "EarnTree", href: "/earntree" },
      { label: "Contractors", href: "/contractors" },
      { label: "Investors", href: "/investor" },
      { label: "About", href: "/about" },
      { label: "Help", href: "/help" },
    ],
  },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-1.5 font-black text-xl tracking-tight select-none">
            <span className="text-primary">BUY</span>
            <span className="text-secondary">SHARE</span>
            <span className="text-muted-foreground text-base font-semibold">.co</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted",
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((c) => (
                      <DropdownMenuItem key={c.href} asChild>
                        <Link to={c.href}>{c.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:2232548299"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <Phone className="w-4 h-4" />
              (223) 254-8299
            </a>
            <Link to="/share" className="hidden sm:inline-flex">
              <Button variant="outline" size="sm" className="rounded-full font-semibold">
                Post a Listing
              </Button>
            </Link>
            <button className="hidden sm:inline-flex p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
              <Bell className="w-4 h-4" />
            </button>
            <Link to="/sign-in" className="hidden sm:inline-flex">
              <Button size="sm" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                Sign in
              </Button>
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border py-3 space-y-1">
            {NAV.flatMap((item) =>
              item.children
                ? [{ label: item.label, href: item.href }, ...item.children]
                : [item],
            ).map((c) => (
              <Link
                key={c.href + c.label}
                to={c.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                {c.label}
              </Link>
            ))}
            <Link to="/sign-in" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm font-semibold text-secondary">
              Sign in
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
