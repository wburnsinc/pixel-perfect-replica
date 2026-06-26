import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/contractor/portal")({
  head: () => ({ meta: [{ title: "Contractor portal — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Pro tools"
      title="Contractor Portal"
      tagline="One inbox for every job."
      description="See incoming bookings, dispatch your crew, message clients and track payouts from a single dashboard."
      icon={LayoutDashboard}
      accent="var(--primary-deep)"
      badges={["📅 Schedule", "💬 Messages", "💵 Payouts"]}
      primaryCta={{ label: "Sign in", to: "/sign-in" }}
      secondaryCta={{ label: "Create account", to: "/sign-up" }}
      bullets={[
        "Calendar with crew assignments",
        "Quote builder with templates",
        "Customer notes and history",
        "Photo proof per visit",
        "Instant payout button",
        "Mobile-friendly for field crews",
      ]}
    />
  ),
});
