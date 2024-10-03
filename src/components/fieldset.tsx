import type { ReactNode } from "react";

export function Fieldset({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center px-3 shadow-shape rounded-md bg-card gap-2">
      {children}
    </div>
  );
}
