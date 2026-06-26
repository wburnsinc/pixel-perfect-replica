import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MessageSquare, DollarSign, MapPin } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — BUYSHARE.co" }] }),
  component: DashboardPage,
});

const CARDS = [
  { to: "/dashboard/bookings", icon: Calendar, title: "Bookings", desc: "Upcoming and past bookings across every brand." },
  { to: "/dashboard/messages", icon: MessageSquare, title: "Messages", desc: "Chat with renters, contractors and neighbors." },
  { to: "/dashboard/payments", icon: DollarSign, title: "PocketCash", desc: "Payouts, invoices, credits and wallet." },
  { to: "/dashboard/tracker", icon: MapPin, title: "Live tracker", desc: "Track services on the way to you." },
];

function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-black">Dashboard</h1>
          <p className="text-muted-foreground">Your single home for every BUYSHARE brand.</p>
        </div>
        <Link to="/sign-in" className="text-sm font-semibold text-primary hover:underline">
          Sign in to load your data →
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CARDS.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="group rounded-2xl border border-border bg-card p-6 hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <c.icon className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
