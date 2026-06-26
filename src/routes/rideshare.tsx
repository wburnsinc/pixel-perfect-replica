import { createFileRoute } from "@tanstack/react-router";
import { Car } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/rideshare")({
  head: () => ({ meta: [{ title: "RideShare — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Local mobility"
      title="RideShare"
      tagline="Hop on a local ride."
      description="Hyper-local ride sharing for Charlotte and Lee County. Riders pay less, drivers keep more — no national middleman."
      icon={Car}
      accent="var(--brand-ride)"
      badges={["🚗 0% surge", "💵 Drivers keep 90%", "📍 SWFL only"]}
      primaryCta={{ label: "Request a ride", to: "/sign-up" }}
      secondaryCta={{ label: "Drive with us", to: "/contractors/join" }}
      bullets={[
        "Flat-rate local fares",
        "Same-day driver onboarding",
        "Background-checked drivers",
        "Tip your driver in-app",
        "Instant payouts to PocketCash",
        "Scheduled and on-demand rides",
      ]}
    />
  ),
});
