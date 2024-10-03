import { CreateTripForm } from "@/components/create-trip-form";
import { TermsAndPolicies } from "@/components/terms-and-policies";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-items-center bg-shape bg-center bg-no-repeat min-h-screen max-w-screen-lg mx-auto relative">
      <Button variant="outline" asChild className="absolute top-14 right-0">
        <Link href="/login">Entrar</Link>
      </Button>
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold font-mono">Tripp.er</h1>
          <p className="text-sm max-w-md">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <CreateTripForm />
        <TermsAndPolicies />
      </div>
    </main>
  );
}
