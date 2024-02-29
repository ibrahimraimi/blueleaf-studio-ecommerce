"use client";

import { CartProvider } from "use-shopping-cart";

import { Toaster } from "@/components/ui/toaster";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <CartProvider
      currency="NGN"
      shouldPersist
      cartMode="checkout-session"
      stripe=""
    >
      <Toaster />
      {children}
    </CartProvider>
  );
}
