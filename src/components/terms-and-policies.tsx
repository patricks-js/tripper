import { Button } from "./ui/button";

export function TermsAndPolicies() {
  return (
    <footer className="max-w-md">
      <p className="text-center text-muted-foreground text-xs">
        Ao planejar sua viagem pela tripp.er você automaticamente concorda com
        nossos{" "}
        <Button variant="link" className="px-1 text-xs">
          <a href="/">termos de uso</a>
        </Button>
        e
        <Button variant="link" className="px-1 text-xs">
          <a href="/">políticas de privacidade</a>
        </Button>
        .
      </p>
    </footer>
  );
}
