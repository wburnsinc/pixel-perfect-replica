import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/contractors")({
  head: () => ({ meta: [{ title: "Contractors — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="For the trades"
      title="Contractors"
      tagline="Grow your service business."
      description="Join the BUYSHARE pro network. Get matched with quality jobs, manage clients, and get paid faster — backed by BurnCall AI and PocketCash payouts."
      icon={Wrench}
      accent="var(--primary)"
      badges={["🛠️ All trades", "💸 Low fees", "📈 Free CRM"]}
      primaryCta={{ label: "Join the network", to: "/contractors/join" }}
      secondaryCta={{ label: "Open my portal", to: "/contractor/portal" }}
      bullets={[
        "Direct booking requests from real homeowners",
        "Free contractor CRM",
        "AI receptionist included on Pro plans",
        "Instant ACH payouts via PocketCash",
        "Crew scheduling and route planner",
        "Reviews syndicated to Google Business",
      ]}
    />
  ),
});
