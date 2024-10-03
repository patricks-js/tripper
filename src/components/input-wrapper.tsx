import type { ReactNode } from "react";

export function InputWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 items-center gap-2">{children}</div>;
}
