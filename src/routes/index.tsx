import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  Share2,
  Waves,
  ShoppingBag,
  Smile,
  Car,
  Sprout,
  PhoneCall,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSunset from "@/assets/hero-sunset.jpg";
import shareLogo from "@/assets/share-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BUYSHARE.co — Share Anything. Earn Anytime." },
      {
        name: "description",
        content:
          "Rent out what you own or find what you need — locally, safely, easily. Charlotte County & Lee County, FL.",
      },
      { property: "og:title", content: "BUYSHARE.co — Share Anything. Earn Anytime." },
      {
        property: "og:description",
        content: "One platform. Marketplace, services, ride-share, payouts. SHARE, PoolShare, ThriftGirl, Playdate, RideShare, EarnTree, BurnCall.",
      },
    ],
  }),
  component: HomePage,
});

const BRANDS = [
  {
    name: "SHARE",
    to: "/share",
    desc: "Pools, homes, parking, boats, yards & RVs — peer-to-peer rentals.",
    icon: Share2,
    accent: "var(--brand-share)",
  },
  {
    name: "PoolShare",
    to: "/poolshare",
    desc: "Rent a private pool by the hour. Parties, cool-downs, lazy afternoons.",
    icon: Waves,
    accent: "var(--brand-pool)",
  },
  {
    name: "ThriftGirl",
    to: "/thriftgirl",
    desc: "Buy, sell, trade & free marketplace for SWFL — clothes, kids, kitchen.",
    icon: ShoppingBag,
    accent: "var(--brand-thrift)",
  },
  {
    name: "Playdate",
    to: "/playdate",
    desc: "Find local playdates, family meetups, kid-friendly events.",
    icon: Smile,
    accent: "var(--brand-play)",
  },
  {
    name: "RideShare",
    to: "/rideshare",
    desc: "Hop on a local ride. Drivers welcome — keep more of every fare.",
    icon: Car,
    accent: "var(--brand-ride)",
  },
  {
    name: "EarnTree",
    to: "/earntree",
    desc: "Affiliate & referral campaigns. Get paid when neighbors join.",
    icon: Sprout,
    accent: "var(--brand-earn)",
  },
  {
    name: "Blue Truck",
    to: "/blue-truck",
    desc: "Pool care, lawn care, delivery & hauling — local pros, fair prices.",
    icon: Truck,
    accent: "var(--primary)",
  },
  {
    name: "BurnCall",
    to: "/burncall",
    desc: "AI phone & SMS receptionist. Capture every lead, dispatch automatically.",
    icon: PhoneCall,
    accent: "var(--brand-burn)",
  },
];

const STATS = [
  { value: "6+", label: "Items listed" },
  { value: "4+", label: "Neighbors" },
  { value: "2", label: "Counties" },
  { value: "8", label: "Sub-brands" },
];

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroSunset}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/45 -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center text-white">
          <div className="mx-auto inline-flex items-center justify-center rounded-2xl bg-primary-deep/80 border border-white/10 px-6 py-4 mb-8 backdrop-blur">
            <img
              src={shareLogo.url}
              alt="SHARE — Pools, Homes, Parking, Boats, Yards & RVs"
              className="h-20 md:h-24 w-auto"
            />
          </div>

          <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05]">
            Share Anything.{" "}
            <span className="text-accent-cyan">Earn Anytime.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto">
            Rent out what you own or find what you need — locally, safely, easily.
            <br className="hidden sm:block" />
            Charlotte County &amp; Lee County, FL.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/rideshare">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 font-semibold rounded-md px-6">
                🚕 Ride Share
              </Button>
            </Link>
            <Link to="/blue-truck">
              <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 font-semibold rounded-md px-6">
                🚚 Delivery Services
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black">{s.value}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-primary-deep text-white py-2.5 px-6 flex flex-wrap items-center justify-center md:justify-between text-xs font-semibold gap-4">
        <span className="uppercase tracking-widest text-white/70">
          The future of workforce is here.
        </span>
        <span className="font-extrabold text-base tracking-wide text-secondary">
          CONNECT · HIRE · DELIVER · GROW
        </span>
        <span className="inline-flex items-center gap-1.5 text-white/70 uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" /> Local. Reliable.
        </span>
      </div>

      {/* BRANDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-secondary mb-3">
            One account · Eight brands
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Everything BUYSHARE does, in one place.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick a tab to jump into any sub-brand. Each one shares the same login, wallet and
            messages.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRANDS.map((b) => (
            <Link
              key={b.to}
              to={b.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ background: b.accent }}
              >
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">{b.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1 transition-all">
                Open <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-muted/40 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              title: "For Homeowners & Renters",
              color: "var(--primary)",
              items: [
                "Find trusted local pros",
                "Rent pools, parking, boats, yards & RVs",
                "Book & pay in one app",
                "Message neighbors safely",
              ],
            },
            {
              title: "For Contractors & Drivers",
              color: "var(--brand-share)",
              items: [
                "Get matched with quality jobs",
                "Keep more of every dollar",
                "Manage clients & schedules",
                "Instant payouts via PocketCash",
              ],
            },
            {
              title: "For Investors & Partners",
              color: "var(--brand-investor)",
              items: [
                "Track growth metrics",
                "Access investor documents",
                "Real-time platform analytics",
                "Quarterly partner updates",
              ],
            },
          ].map((a) => (
            <div key={a.title} className="bg-card border border-border rounded-2xl p-6">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 text-white"
                style={{ background: a.color }}
              >
                <TrendingUp className="w-3.5 h-3.5" /> Built for you
              </div>
              <h3 className="text-xl font-bold">{a.title}</h3>
              <ul className="mt-4 space-y-2">
                {a.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: a.color }}
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Ready to <span className="text-secondary">Share Anything</span> &amp;{" "}
          <span className="text-accent-cyan">Earn Anytime</span>?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Create your free account and start listing, booking or earning today.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/sign-up">
            <Button size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-7">
              Create free account
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="rounded-full font-semibold px-7">
              Browse services
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
