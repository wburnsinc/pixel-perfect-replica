import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/thriftgirl")({
  head: () => ({ meta: [{ title: "ThriftGirl — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Buy · Sell · Trade · Free"
      title="ThriftGirl"
      tagline="Flip It. Free It."
      description="Southwest Florida's favorite buy, sell, trade & free marketplace. Clothes, furniture, bikes, toys, kitchen gear and more — from your neighbors."
      icon={ShoppingBag}
      accent="var(--brand-thrift)"
      badges={["👗 Women's & Men's", "🧸 Kids' & Toys", "🪑 Furniture & Home"]}
      primaryCta={{ label: "Start free trial — $5/mo", to: "/sign-up" }}
      secondaryCta={{ label: "Open inbox", to: "/dashboard/messages" }}
      bullets={[
        "Free 3-day trial, then $5/month",
        "Unlimited listings",
        "Message sellers and schedule pickups",
        "Local-only buyers and sellers",
        "Free items section for the community",
        "Cancel anytime",
      ]}
    />
  ),
});
