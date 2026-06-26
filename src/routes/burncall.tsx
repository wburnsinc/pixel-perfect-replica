import { createFileRoute } from "@tanstack/react-router";
import { PhoneCall } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/burncall")({
  head: () => ({ meta: [{ title: "BurnCall — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="AI receptionist"
      title="BurnCall"
      tagline="Never miss a lead again."
      description="BurnCall is the AI phone & SMS receptionist built for service businesses. Capture every call, qualify the lead, and dispatch the right pro automatically."
      icon={PhoneCall}
      accent="var(--brand-burn)"
      badges={["📞 24/7 answering", "💬 SMS follow-up", "🤖 GPT-powered"]}
      primaryCta={{ label: "Start free trial", to: "/sign-up" }}
      secondaryCta={{ label: "Pricing", to: "/help" }}
      bullets={[
        "Forward your number — we answer instantly",
        "Qualifies callers, books appointments",
        "SMS recap of every call to your phone",
        "CRM logging out of the box",
        "Spam & robocall filtering",
        "Custom greetings and scripts",
      ]}
    />
  ),
});
