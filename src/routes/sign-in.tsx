import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sign-in")({
  head: () => ({ meta: [{ title: "Sign in — BUYSHARE.co" }] }),
  component: SignInPage,
});

function SignInPage() {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-20">
      <h1 className="text-3xl font-black text-center">Welcome back</h1>
      <p className="mt-2 text-center text-muted-foreground">Sign in to BUYSHARE.</p>
      <form className="mt-8 space-y-4">
        <input className="w-full px-4 py-3 border border-input rounded-md outline-none focus:ring-2 focus:ring-ring" placeholder="Email" type="email" />
        <input className="w-full px-4 py-3 border border-input rounded-md outline-none focus:ring-2 focus:ring-ring" placeholder="Password" type="password" />
        <Button className="w-full rounded-md bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold" size="lg">
          Sign in
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        New here?{" "}
        <Link to="/sign-up" className="text-primary font-semibold hover:underline">
          Create an account
        </Link>
      </p>
      <p className="mt-3 text-xs text-center text-muted-foreground">
        Authentication will be wired to Lovable Cloud in Phase 4.
      </p>
    </div>
  );
}
