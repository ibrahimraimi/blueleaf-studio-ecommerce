import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/assets/logo.svg"
          alt=""
          width={0}
          height={0}
          className="hidden lg:flex h-24 w-24"
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-6 text-sm">
        <Link
          href="/products"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          All Products
        </Link>
        <Link
          href="/about"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          About Us
        </Link>
        <Link
          href="/pricing"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
