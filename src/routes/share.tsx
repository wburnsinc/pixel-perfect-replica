import { createFileRoute } from "@tanstack/react-router";
import { Share2 } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/share")({
  head: () => ({ meta: [{ title: "SHARE — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Marketplace"
      title="SHARE"
      tagline="Share Anything. Earn Anytime."
      description="Peer-to-peer rentals across Southwest Florida — pools, homes, parking, boats, yards, RVs and more. Rent out what you own or find what you need, locally and safely."
      icon={Share2}
      accent="var(--brand-share)"
      badges={["📍 SWFL", "💸 0% setup fees", "🛡️ Verified neighbors"]}
      primaryCta={{ label: "Post a listing", to: "/sign-up" }}
      secondaryCta={{ label: "Browse listings", to: "/services" }}
      bullets={[
        "List pools, homes, parking, boats, yards or RVs in minutes",
        "Set your own price, availability and rules",
        "Built-in messaging and ID-verified renters",
        "Secure payouts directly to your bank",
        "Automatic insurance summary on each booking",
        "Cancel anytime — no monthly fees",
      ]}
    />
  ),
});
