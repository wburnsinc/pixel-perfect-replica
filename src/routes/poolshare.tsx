import { createFileRoute } from "@tanstack/react-router";
import { Waves } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/poolshare")({
  head: () => ({ meta: [{ title: "PoolShare — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Sub-brand of SHARE"
      title="PoolShare"
      tagline="Private pools, by the hour."
      description="Rent a private pool by the hour in Charlotte County. Perfect for parties, cool-downs, or a luxurious afternoon dip with palm trees overhead."
      icon={Waves}
      accent="var(--brand-pool)"
      badges={["📍 SWFL Backyards", "💵 From $25/hr", "🎉 Parties & Families"]}
      primaryCta={{ label: "List your pool", to: "/sign-up" }}
      secondaryCta={{ label: "Browse pools", to: "/share" }}
      bullets={[
        "Hourly pricing with weekend boosts",
        "Guest counts, rules and house manuals built-in",
        "Heated, saltwater & spa filters",
        "Owner approval for every booking",
        "Damage protection up to $1,000",
        "Instant chat with the pool owner",
      ]}
    />
  ),
});
