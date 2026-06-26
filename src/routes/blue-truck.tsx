import { createFileRoute } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/blue-truck")({
  head: () => ({ meta: [{ title: "Blue Truck — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Services by BlueTruck LLC"
      title="Blue Truck"
      tagline="Local home services, done right."
      description="Pool care, lawn care, delivery and hauling across Southwest Florida. Vetted crews, transparent pricing and on-the-way tracking."
      icon={Truck}
      accent="var(--primary)"
      badges={["🛠️ Licensed & insured", "📅 Same-week booking", "📍 SWFL"]}
      primaryCta={{ label: "Get a quote", to: "/services" }}
      secondaryCta={{ label: "Track my job", to: "/dashboard/tracker" }}
      bullets={[
        "Pool maintenance, cleaning and chemistry",
        "Lawn mowing, edging and seasonal cleanup",
        "Same-day delivery and small-move hauling",
        "Photo proof on every visit",
        "Recurring or one-time bookings",
        "Pay via card, ACH or PocketCash",
      ]}
    />
  ),
});
