"use client"
import { Snippet } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";





export default async function Page() {

    return (
        <>

            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    {/* Checkout session */}
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <div className="flex flex-wrap gap-4">
                            <ScrollShadow hideScrollBar orientation="horizontal" className="max-w-[400px] max-h-[500px]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora saepe quidem dolore ipsum minus accusantium praesentium dignissimos ut blanditiis. Quasi!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora saepe quidem dolore ipsum minus accusantium praesentium dignissimos ut blanditiis. Quasi!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora saepe quidem dolore ipsum minus accusantium praesentium dignissimos ut blanditiis. Quasi!   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora saepe quidem dolore ipsum minus accusantium praesentium dignissimos ut blanditiis. Quasi!   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora saepe quidem dolore ipsum minus accusantium praesentium dignissimos ut blanditiis. Quasi!
                            </ScrollShadow>
                            <Image
                                width={800}
                                height={600}
                                alt="NextUI hero Image with delay"
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


