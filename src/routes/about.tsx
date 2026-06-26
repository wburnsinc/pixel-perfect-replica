import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — BUYSHARE.co" }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 prose prose-neutral">
      <h1 className="text-4xl font-black tracking-tight">About BUYSHARE</h1>
      <p className="text-lg text-muted-foreground">
        BUYSHARE.co is one platform for sharing, renting and earning across Southwest Florida —
        powered by BlueTruck LLC and BURNS INC.
      </p>
      <p>
        We started with a simple idea: neighbors helping neighbors. Today, BUYSHARE brings together
        eight sub-brands under one login: SHARE, PoolShare, ThriftGirl, Playdate, RideShare,
        EarnTree, Blue Truck and BurnCall.
      </p>
      <p>
        Every brand shares the same wallet (PocketCash), the same inbox, and the same trusted
        community of Charlotte and Lee County residents.
      </p>
      <h2 className="mt-10 text-2xl font-bold">Get in touch</h2>
      <p className="text-muted-foreground">
        Call (223) 254-8299 or email hello@buyshare.co — we read every message.
      </p>
    </div>
  );
}
