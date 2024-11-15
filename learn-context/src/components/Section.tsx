import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return <section className="section">{children}</section>;
}
