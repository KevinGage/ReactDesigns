"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Links = [
  { href: "/cards", label: "Cards" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/datatable", label: "Datatable" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex py-6">
        {Links.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className={"flex items-center px-4 mx-6 ".concat(
              pathname?.startsWith(href)
                ? "font-bold text-primary"
                : "font-medium text-muted-foreground"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
