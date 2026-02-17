import { type ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
}

export function Grid({ children, className = "" }: GridProps) {
  return (
    <div className={`grid gap-6 sm:gap-8 ${className}`}>{children}</div>
  );
}
