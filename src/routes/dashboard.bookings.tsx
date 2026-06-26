import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/dashboard/bookings")({
  head: () => ({ meta: [{ title: "Bookings — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Dashboard"
      title="Bookings"
      tagline="One calendar. Every brand."
      description="See upcoming and past bookings across SHARE, PoolShare, Blue Truck, RideShare and more in a single timeline."
      icon={Calendar}
      accent="var(--primary)"
      primaryCta={{ label: "Back to dashboard", to: "/dashboard" }}
      secondaryCta={{ label: "Sign in", to: "/sign-in" }}
      bullets={[
        "Filter by brand, status or date",
        "Cancel or reschedule in one click",
        "Add to Google or Apple calendar",
        "Reminders by SMS or email",
      ]}
    />
  ),
});
