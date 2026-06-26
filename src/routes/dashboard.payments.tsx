import { createFileRoute } from "@tanstack/react-router";
import { DollarSign } from "lucide-react";
import { BrandPage } from "@/components/brand-page";

export const Route = createFileRoute("/dashboard/payments")({
  head: () => ({ meta: [{ title: "PocketCash — BUYSHARE.co" }] }),
  component: () => (
    <BrandPage
      eyebrow="Wallet & payouts"
      title="PocketCash"
      tagline="Your money, instantly."
      description="PocketCash is the BUYSHARE wallet. Track invoices, get paid by clients, request payouts to your bank in minutes."
      icon={DollarSign}
      accent="var(--brand-investor)"
      primaryCta={{ label: "Connect bank", to: "/sign-up" }}
      secondaryCta={{ label: "Back to dashboard", to: "/dashboard" }}
      bullets={[
        "Instant ACH and debit-card payouts",
        "Send invoices and accept cards",
        "Auto-tagged transactions for taxes",
        "1099-K export at year-end",
        "Referral credits stack with EarnTree",
        "FDIC-insured partner banks",
      ]}
    />
  ),
});
