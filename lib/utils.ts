import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSizeName(value: string) {
  switch (value) {
    case "xs":
      return "X-Small";
    case "s":
      return "Small";
    case "m":
      return "Medium";
    case "l":
      return "Large";
    case "xl":
      return "X-Large";
    case "one-size":
      return "One Size";
  }
}

export function formatCurrencyString({
  value,
  currency,
}: {
  value?: number;
  currency: string;
}): string {
  // Check if the currency is already in NGN, if so, return it as is
  if (currency.toUpperCase() === "NGN") {
    // @ts-ignore
    return `₦${value.toLocaleString()}`;
  } else {
    // Assuming the currency conversion mechanism or formatting function
    // Here, we just append NGN to the value as a simple representation
    // @ts-ignore
    return `₦${value.toLocaleString()}`;
  }
}
