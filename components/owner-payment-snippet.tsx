import React, { useState, useEffect } from "react";
import { Snippet } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default function PaymentSnippet() {
    const [promoCode, setPromoCode] = useState("");

    useEffect(() => {
        const newPromoCode = generatePromoCode();
        setPromoCode(newPromoCode);
        const interval = setInterval(() => {
            const newPromoCode = generatePromoCode();
            setPromoCode(newPromoCode);
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const generatePromoCode = () => {
        // Generate a random 6-digit alphanumeric code
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    };

    return (
        <>
            <div>
                <span>მოგვწერე ჩვენს </span> <Link isBlock showAnchorIcon href="https://www.instagram.com/tenzityy/" color="warning">
                    Instagram
                </Link> გვერდზე პრომოკოდი და მიიღე 10% ფასდაკლება ახალ დამატებულ კოლექციაზე ! 🚀 </div>
            <div style={{ padding: '20px' }}>

                <Snippet style={{ marginTop: '10px', }} variant="flat" color="warning">{`პრომო კოდი: ${promoCode}`}</Snippet>
            </div>
            <div className="flex flex-wrap gap-4 absolute left-48 top-20">

                <style jsx>{`
    @media (max-width: 768px) {
        .flex {
            flex-direction: column;
            left: 0;
            margin-left: 40px;
            top: 20;
        }
    }
`}</style>
            </div>
        </>


    );
}
