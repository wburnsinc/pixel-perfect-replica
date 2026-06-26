import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help")({
  head: () => ({ meta: [{ title: "Help — BUYSHARE.co" }] }),
  component: HelpPage,
});

const FAQ = [
  { q: "Is BUYSHARE free to use?", a: "Yes — browsing, signing up and posting most listings is free. Some brands like ThriftGirl have a small $5/mo subscription after a free trial." },
  { q: "Which areas do you serve?", a: "We currently serve Charlotte County and Lee County, Florida. Sister markets are launching in 2026." },
  { q: "How do payouts work?", a: "All earnings land in your PocketCash wallet. You can request an instant ACH or debit-card payout any time." },
  { q: "Is my listing insured?", a: "SHARE rentals include damage protection up to $1,000. Higher tiers are available for hosts." },
  { q: "Can I list across multiple brands?", a: "Yes — one BUYSHARE account works across SHARE, PoolShare, ThriftGirl and more." },
];

function HelpPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-black tracking-tight">Help &amp; FAQ</h1>
      <p className="mt-2 text-muted-foreground">Quick answers to common questions.</p>
      <div className="mt-8 divide-y divide-border border border-border rounded-2xl overflow-hidden">
        {FAQ.map((f) => (
          <details key={f.q} className="group bg-card">
            <summary className="cursor-pointer list-none px-5 py-4 font-semibold flex items-center justify-between hover:bg-muted">
              {f.q}
              <span className="text-muted-foreground group-open:rotate-180 transition-transform">⌄</span>
            </summary>
            <div className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</div>
          </details>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Still need help? Call (223) 254-8299 or email hello@buyshare.co.
      </p>
    </div>
  );
}
