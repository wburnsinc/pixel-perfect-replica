import { createFileRoute } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/earntree")({
  head: () => ({ meta: [{ title: "EarnTree — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Affiliate & referrals"
      title="EarnTree"
      tagline="Grow your tree. Earn forever."
      description="EarnTree is the BUYSHARE referral and affiliate engine. Earn commissions when neighbors join, list, or book — and again when their referrals do too."
      icon={Sprout}
      accent="var(--brand-earn)"
      badges={["🌱 Multi-tier", "💸 Weekly payouts", "🔗 Unique links"]}
      primaryCta={{ label: "Get your link", to: "/sign-up" }}
      secondaryCta={{ label: "See campaigns", to: "/dashboard" }}
      bullets={[
        "Earn on direct & second-tier referrals",
        "Custom QR codes and shortlinks",
        "Real-time dashboard for clicks & signups",
        "Brand-safe creative library",
        "Weekly payouts to PocketCash",
        "No minimum payout threshold",
      ]}
    />
  ),
});
