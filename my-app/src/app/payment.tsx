"use client"
import { useRef } from "react";

interface PaymentProps {
    bankHTML: string
}

export const Payment: React.FC<PaymentProps> = ({ bankHTML }) => {
    const ref = useRef<HTMLDivElement>(null);
    const onClick = async () => {
        const html = document.createRange().createContextualFragment(bankHTML);
        ref.current?.appendChild(html);
    };
    return (
        <div ref={ref}>
            <button onClick={onClick}>start payment</button>
        </div>
    );
}