import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/dashboard/tracker")({
  head: () => ({ meta: [{ title: "Live tracker — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="On the way"
      title="Live tracker"
      tagline="See your pro arrive."
      description="Real-time GPS tracking for Blue Truck visits, RideShare pickups, and SHARE handoffs."
      icon={MapPin}
      accent="var(--brand-pool)"
      primaryCta={{ label: "Back to dashboard", to: "/dashboard" }}
      secondaryCta={{ label: "Sign in", to: "/sign-in" }}
      bullets={[
        "Live ETA on every active booking",
        "Driver/crew profile and photo",
        "Share trip with a friend",
        "Arrival notifications by SMS",
      ]}
    />
  ),
});
