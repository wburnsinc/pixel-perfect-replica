import { createFileRoute } from "@tanstack/react-router";
import { Smile } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/playdate")({
  head: () => ({ meta: [{ title: "Playdate — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Family meetups"
      title="Playdate"
      tagline="Local kids, local fun."
      description="Find local playdates, family meetups and kid-friendly events near you. Built for parents in Charlotte and Lee County."
      icon={Smile}
      accent="var(--brand-play)"
      badges={["👶 Ages 0–12", "📅 Weekly meetups", "🌳 Parks & beaches"]}
      primaryCta={{ label: "Find a playdate", to: "/sign-up" }}
      secondaryCta={{ label: "Host one", to: "/dashboard" }}
      bullets={[
        "Search by age, location and interest",
        "RSVP and chat with other parents",
        "Verified parent profiles",
        "Public parks, beaches and host yards",
        "Weather-aware reminders",
        "Free for hosts and attendees",
      ]}
    />
  ),
});
