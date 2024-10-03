import type { ReactNode } from "react";

export function FieldWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="h-12 flex items-center pl-4 pr-2 shadow-shape rounded-md bg-card gap-3 w-full">
      {children}
    </div>
  );
}
