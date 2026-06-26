import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/dashboard/messages")({
  head: () => ({ meta: [{ title: "Messages — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Dashboard"
      title="Messages"
      tagline="Chat with neighbors and pros."
      description="A unified inbox across every BUYSHARE brand. ID-verified, spam-filtered and BurnCall-assisted."
      icon={MessageSquare}
      accent="var(--brand-share)"
      primaryCta={{ label: "Back to dashboard", to: "/dashboard" }}
      secondaryCta={{ label: "Sign in", to: "/sign-in" }}
      bullets={[
        "Threaded conversations per booking",
        "Photo and attachment sharing",
        "Smart suggested replies (BurnCall AI)",
        "Block, report and rate built-in",
      ]}
    />
  ),
});
