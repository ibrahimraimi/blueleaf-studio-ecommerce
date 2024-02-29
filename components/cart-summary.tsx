"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

import { Button } from "@/components/ui/button";
import { formatCurrencyString } from "@/lib/utils";

export function CartSummary() {
  const { formattedTotalPrice, totalPrice, cartDetails, cartCount } =
    useShoppingCart();

  const shippingAmount = cartCount! > 0 ? 2500 : 0;
  const totalAmount = totalPrice! + shippingAmount;

  function onCheckout() {}

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">
            {formatCurrencyString({ value: totalPrice, currency: "NGN" })}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">
            {" "}
            {formatCurrencyString({ value: shippingAmount, currency: "NGN" })}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">
            {" "}
            {formatCurrencyString({ value: totalAmount, currency: "NGN" })}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button className="w-full">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </Button>
      </div>
    </section>
  );
}
