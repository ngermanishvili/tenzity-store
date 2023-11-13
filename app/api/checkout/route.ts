import { NextResponse } from "next/server";
// @ts-ignore
import { validateCartItems } from "use-shopping-cart/utilities";

import { inventory } from "@/config/inventory";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
    try {
        // Log the raw request body for debugging purposes
        const rawRequestBody = await request.text();
        console.log('Raw Request Body:', rawRequestBody);

        // Parse the JSON request body
        const cartDetails = JSON.parse(rawRequestBody);
        console.log('Parsed Cart Details:', cartDetails);

        // Validate cart items
        const lineItems = validateCartItems(inventory, cartDetails);
        console.log('Line Items:', lineItems);

        const origin = request.headers.get("origin");
        const session = await stripe.checkout.sessions.create({
            submit_type: "pay",
            mode: "payment",
            line_items: lineItems,
            shipping_address_collection: {
                allowed_countries: ["US"],
            },
            shipping_options: [
                {
                    shipping_rate: "shr_1Mta4LL2b18r387uAvcNoVDo",
                },
            ],
            billing_address_collection: "auto",
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cart`,
        });

        // Log the session information
        console.log('Stripe Checkout Session:', session);

        return NextResponse.json(session);
    } catch (error) {
        console.error('Error in POST request:', error);

        // Return a more informative error response
        return new Response(
            JSON.stringify({ error: 'Internal Server Error', details: (error as Error).message }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}


