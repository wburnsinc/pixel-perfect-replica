import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/$page")({
  head: () => ({ meta: [{ title: "Legal — BUYSHARE.co" }] }),
  component: LegalPage,
});

const COPY: Record<string, { title: string; body: string }> = {
  terms: {
    title: "Terms of Service",
    body: "These Terms of Service govern your use of BUYSHARE.co. By using the platform you agree to fair-use community guidelines, payment terms, and brand-specific policies. Full terms will be published before public launch.",
  },
  privacy: {
    title: "Privacy Policy",
    body: "BUYSHARE collects only the information needed to run the service: account details, listings, bookings, messages, and payouts. We never sell your personal data. Full policy will be published before public launch.",
  },
  contact: {
    title: "Contact",
    body: "BlueTruck LLC & BURNS INC. — Charlotte County, FL. Call (223) 254-8299 or email hello@buyshare.co.",
  },
};

function LegalPage() {
  const { page } = Route.useParams();
  const entry = COPY[page] ?? {
    title: "Legal",
    body: "This document is being prepared.",
  };
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-black tracking-tight">{entry.title}</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">{entry.body}</p>
    </div>
  );
}
