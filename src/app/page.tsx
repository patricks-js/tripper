export default function Home() {
  return (
    <main className="grid place-items-center bg-shape bg-center bg-no-repeat min-h-screen">
      <div className="space-y-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold font-mono">Tripp.er</h1>
          <p className="text-sm max-w-md">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <p className="text-center text-muted-foreground text-xs max-w-md">
          Ao planejar sua viagem pela tripp.er você automaticamente concorda com
          nossos <a href="/">termos de uso</a> e{" "}
          <a href="/">políticas de privacidade</a>.
        </p>
      </div>
    </main>
  );
}
