import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type BrandPageProps = {
  eyebrow?: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: string; // CSS var, e.g. "var(--brand-share)"
  badges?: string[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  bullets?: string[];
};

export function BrandPage({
  eyebrow,
  title,
  tagline,
  description,
  icon: Icon,
  accent,
  badges = [],
  primaryCta,
  secondaryCta,
  bullets = [],
}: BrandPageProps) {
  return (
    <div>
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${accent} 0%, var(--primary-deep) 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur mb-6">
            <Icon className="w-7 h-7" />
          </div>
          {eyebrow && (
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-white/70 mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight">{title}</h1>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-white/90">{tagline}</p>
          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {badges.length > 0 && (
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 text-sm font-medium backdrop-blur"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {primaryCta && (
                <Link to={primaryCta.to}>
                  <Button size="lg" className="bg-white text-foreground hover:bg-white/90 font-semibold rounded-full">
                    {primaryCta.label}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.to}>
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-semibold rounded-full">
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {bullets.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold mb-8">What you can do here</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <span
                  className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: accent }}
                />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 p-6 rounded-2xl border border-border bg-muted/40 text-center">
            <p className="text-sm text-muted-foreground">
              This page is part of the BUYSHARE master platform. Sign in to post listings, book
              services, message neighbors and track payouts — all in one account.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Link to="/sign-up">
                <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Create free account
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="rounded-full">
                  Go to dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
