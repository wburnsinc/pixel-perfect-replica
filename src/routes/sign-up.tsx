import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sign-up")({
  head: () => ({ meta: [{ title: "Sign up — BUYSHARE.co" }] }),
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-20">
      <h1 className="text-3xl font-black text-center">Create your account</h1>
      <p className="mt-2 text-center text-muted-foreground">
        One login for SHARE, Blue Truck, BurnCall and more.
      </p>
      <form className="mt-8 space-y-4">
        <input className="w-full px-4 py-3 border border-input rounded-md outline-none focus:ring-2 focus:ring-ring" placeholder="Full name" />
        <input className="w-full px-4 py-3 border border-input rounded-md outline-none focus:ring-2 focus:ring-ring" placeholder="Email" type="email" />
        <input className="w-full px-4 py-3 border border-input rounded-md outline-none focus:ring-2 focus:ring-ring" placeholder="Password" type="password" />
        <Button className="w-full rounded-md bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold" size="lg">
          Create account
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
