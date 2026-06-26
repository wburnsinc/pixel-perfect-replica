import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Master control"
      title="Admin"
      tagline="Platform overview."
      description="Buyshare.co · Charlotte County, FL · SHARE by BlueTruck LLC & BURNS INC. Manage users, subscriptions, listings, bookings, reviews and contractors from a single console."
      icon={ShieldCheck}
      accent="var(--primary-deep)"
      badges={["👥 Users", "💳 Subscriptions", "📦 Listings", "📅 Bookings"]}
      primaryCta={{ label: "Sign in", to: "/sign-in" }}
      secondaryCta={{ label: "View site", to: "/" }}
      bullets={[
        "Site health and database status",
        "Maintenance mode toggle",
        "Manage all users and roles",
        "Approve or reject listings",
        "Subscription and revenue analytics",
        "Contractor verification queue",
      ]}
    />
  ),
});
