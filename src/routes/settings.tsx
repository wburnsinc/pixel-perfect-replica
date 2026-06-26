import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — BUYSHARE.co" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-black tracking-tight">Settings</h1>
      <p className="mt-2 text-muted-foreground">Manage your BUYSHARE account.</p>
      <div className="mt-8 space-y-4">
        {["Profile", "Notifications", "Payment methods", "Connected brands", "Privacy", "Security"].map((s) => (
          <div key={s} className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-bold">{s}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {s} options will be available after you sign in.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
