'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
    const images = [
        "/media/Header1.jpg",
        "/media/Header2.jpg",
        "/media/Header3.jpg",
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    })

    return (
        <header className="h-screen relative overflow-hidden">
            {/* Carousel images */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}
        </header>
    );
}
