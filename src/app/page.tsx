import { CreateTripForm } from "@/components/create-trip-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center bg-shape bg-center bg-no-repeat h-screen mx-auto relative">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold font-mono">Tripp.er</h1>
          <p className="text-sm max-w-md">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <CreateTripForm />
        <footer className="max-w-md">
          <p className="text-center text-muted-foreground text-xs">
            Ao planejar sua viagem pela tripp.er você automaticamente concorda
            com nossos
            <Button variant="link" className="px-1 text-xs" asChild>
              <Link href="/">termos de uso</Link>
            </Button>
            e
            <Button variant="link" className="pr-0.5 pl-1 text-xs" asChild>
              <Link href="/">políticas de privacidade</Link>
            </Button>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
