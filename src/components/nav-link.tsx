import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface NavLinkPros extends ComponentProps<"a"> {
  children: string;
  onLink?: boolean;
}

export function NavLink({ onLink, ...props }: NavLinkPros) {
  return (
    <a
      {...props}
      className={twMerge(
        "font-medium text-sm text-zinc-300 rounded",
        onLink ? "text-zinc-50" : null
      )}
    />
  );
}
