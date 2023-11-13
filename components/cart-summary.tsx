"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { Button } from "@/components/ui/button"
import Link from 'next/link';


export function CartSummary() {

  const {
    formattedTotalPrice,
    totalPrice = 0,
    cartDetails,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart();

  const [isLoading, setIsLoading] = useState(false);
  const isDisabled = isLoading === true || cartCount === 0;
  const [isComingSoon, setIsComingSoon] = useState(false);


  const shippingAmount = cartCount! > 0 ? 500 : 0;
  const totalAmount = totalPrice + shippingAmount;

  async function onCheckout() {
    setIsLoading(true);
    console.log("cartDetails:", cartDetails);

    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(cartDetails),
    });
    console.log("Server response:", response);

    const data = await response.json();
    console.log("Data:", data);
    // Wait for the checkout process to complete before changing the route
    await redirectToCheckout(data.id);


    setIsLoading(false);
  }

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
          <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">
            {formatCurrencyString({ value: shippingAmount, currency: "USD" })}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">
            {formatCurrencyString({ value: totalAmount, currency: "USD" })}
          </dd>

        </div>
      </dl>

      <div className="mt-6">
        <Button onClick={onCheckout} disabled={true} className="w-full">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Loading..." : "COMING SOON"}
        </Button>
        <Button disabled={false} className="w-full mt-4">
          <a target="blank" className="w-full uppercase " href="https://nextjs.org">For Purchase DM Us in instagram</a>
        </Button>


      </div>
      <dt className="text-xs opacity-75 bold mt-4  text-cyan-600">Payment system is coming soon untill, contact us our <a href="#">IG</a>, Thanks for choose Tenzity 💌</dt>

    </section>
  )
}