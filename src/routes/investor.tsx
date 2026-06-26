import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/investor")({
  head: () => ({ meta: [{ title: "Investors — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Investors"
      title="BUYSHARE Investors"
      tagline="Backed by neighbors. Built for growth."
      description="A snapshot of platform health across SHARE, Blue Truck, ThriftGirl, RideShare, EarnTree and BurnCall — plus quarterly updates and document access."
      icon={TrendingUp}
      accent="var(--brand-investor)"
      badges={["📊 Quarterly KPIs", "📄 Cap table access", "📈 Real-time MRR"]}
      primaryCta={{ label: "Investor sign in", to: "/sign-in" }}
      secondaryCta={{ label: "Request a deck", to: "/help" }}
      bullets={[
        "Live platform KPIs (GMV, MRR, users)",
        "Quarterly partner letter",
        "Cap table and SAFE document vault",
        "Brand-by-brand revenue breakdown",
        "Roadmap and milestone tracker",
        "Secure NDA-gated docs",
      ]}
    />
  ),
});
