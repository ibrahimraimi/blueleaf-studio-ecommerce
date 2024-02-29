"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Edit, ShoppingBag, ShoppingCart } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { Suspense } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearchQuery = searchParams.get("search") ?? "";

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search");
    router.replace(`/products/?search=${searchQuery}`);
  }

  if (pathname.startsWith("/studio")) return null;
  return (
    <Suspense>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl flex h-16 items-center lg:justify-between space-x-4 px-6 sm:space-x-0">
          <MainNav />
          <MobileNav />
          <div className="flex items-center space-x-1">
            <form
              onSubmit={onSubmit}
              className="items-center lg:inline-flex lg:mr-4"
            >
              <Input
                id="search"
                name="search"
                type="search"
                autoComplete="off"
                placeholder="Search products..."
                className="h-9 lg:w-[300px]"
                defaultValue={defaultSearchQuery}
              />
            </form>
            <Link href="/cart">
              <Button size="sm" variant="ghost">
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-2 text-sm font-bold">0</span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            {process.env.NODE_ENV === "development" && <ThemeToggle />}
            {process.env.NODE_ENV === "development" && (
              <Link href="/studio">
                <Button size="sm" variant="ghost">
                  <Edit className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </Suspense>
  );
}
