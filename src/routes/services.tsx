import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Leaf, Hammer, Droplets, Sparkles, Wind, Zap, Home, Paintbrush, Wrench, Truck, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Find services — BUYSHARE.co" }] }),
  component: ServicesPage,
});

const INDUSTRIES = [
  { label: "Lawn Care", icon: Leaf },
  { label: "Construction", icon: Hammer },
  { label: "Pool Services", icon: Droplets },
  { label: "Cleaning", icon: Sparkles },
  { label: "HVAC", icon: Wind },
  { label: "Plumbing", icon: Wrench },
  { label: "Electrical", icon: Zap },
  { label: "Painting", icon: Paintbrush },
  { label: "Roofing", icon: Home },
  { label: "Handyman", icon: Hammer },
  { label: "Delivery", icon: Truck },
  { label: "View all", icon: LayoutGrid },
];

function ServicesPage() {
  return (
    <div>
      <section className="bg-primary text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Find a local pro</h1>
          <p className="mt-3 text-white/80">
            Search trusted, reviewed contractors across Charlotte and Lee County.
          </p>
          <div className="mt-6 max-w-2xl mx-auto bg-white rounded-full flex items-center shadow-xl overflow-hidden">
            <Search className="w-5 h-5 text-muted-foreground ml-4" />
            <input
              className="flex-1 px-3 py-3 outline-none text-foreground"
              placeholder="What do you need? e.g. pool cleaning, lawn mow"
            />
            <Button className="rounded-full m-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6">
              Search
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Popular categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((c) => (
            <Link
              key={c.label}
              to="/blue-truck"
              className="group rounded-2xl border border-border bg-card p-4 flex flex-col items-center text-center hover:border-primary hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <c.icon className="w-5 h-5" />
              </div>
              <span className="mt-2 text-sm font-medium">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
