import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:max-w-[72rem] ${className}`}>
      {children}
    </div>
  );
}
