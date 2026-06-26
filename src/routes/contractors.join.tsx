import { createFileRoute } from "@tanstack/react-router";
import { UserPlus } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/contractors/join")({
  head: () => ({ meta: [{ title: "Join as a contractor — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="3-minute application"
      title="Join BUYSHARE"
      tagline="Apply once. Get jobs forever."
      description="Submit your trade, license and service area. We'll verify and turn on bookings the same week."
      icon={UserPlus}
      accent="var(--brand-share)"
      badges={["⚡ Same-week approval", "💵 Keep 90%+", "🛡️ Insurance friendly"]}
      primaryCta={{ label: "Start application", to: "/sign-up" }}
      secondaryCta={{ label: "Talk to a human", to: "/help" }}
      bullets={[
        "Upload license & insurance documents",
        "Set service area and trades",
        "Choose booking radius and capacity",
        "Connect PocketCash for payouts",
        "Optional BurnCall AI receptionist add-on",
        "No setup fees, ever",
      ]}
    />
  ),
});
