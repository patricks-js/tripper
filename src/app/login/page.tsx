import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid place-items-center bg-shape bg-center bg-no-repeat min-h-screen max-w-screen-lg mx-auto relative">
      <Button variant="outline" asChild className="absolute top-14 left-0">
        <Link href="/" className="flex items-center gap-2">
          <Icons.arrowLeft className="size-4" />
          Back
        </Link>
      </Button>
      <h2 className="text-3xl font-bold font-mono">Login</h2>
    </main>
  );
}
