"use client"
import { ScrollShadow } from "@nextui-org/react";
import OwnerCard from "@/components/owner-card";
import PaymentSnippet from "@/components/owner-payment-snippet";
import { Link } from "@nextui-org/react";



export default async function Page() {


    return (
        <>
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">


                <PaymentSnippet />
                <div className="text-center">
                    {/* Checkout session */}
                    <OwnerCard />
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <div className="flex flex-wrap gap-6">
                            <ScrollShadow hideScrollBar orientation="horizontal" className="max-w-[400px] max-h-[auto]">
                                Tenzity არის, ქართულ ბაზარზე არსებული მაღაზია, რომელიც აწარმოებს ორიგინალური პრინტით ჰუდებს და მაისურებს. ჩვენი მიზანია მომხმარებელს შევუქმნათ კომფორტის და ელეგანტურობის მაღალი განცდა.
                                შესაძენად მოგვწერეთ ჩვენს <Link isBlock showAnchorIcon href="https://www.instagram.com/tenzityy/" color="warning">
                                    Instagram
                                </Link> და <Link isBlock showAnchorIcon href="https://www.facebook.com/profile.php?id=61550605392809" color="warning">
                                    Facebook
                                </Link> გვერდებზე.
                            </ScrollShadow>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


