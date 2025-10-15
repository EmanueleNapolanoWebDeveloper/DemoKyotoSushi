'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
    const slides = [
        {
            image: "/media/Header1.jpg",
            title: "Benvenuti da Kyoto Sushi",
            subtitle: "L'autentica esperienza della cucina giapponese",
            imgSrc: "/media/logoDemoSushinobgwhite.png",
            position: "left" // testo a sinistra, immagine a destra
        },
        {
            image: "/media/Header2.jpg",
            title: "All You Can Eat",
            subtitle: "Gusto illimitato ad un prezzo imbattibile",
            imgSrc: "/media/logoDemoSushinobg.png",
            position: "right" // testo a destra, immagine a sinistra
        },
        {
            image: "/media/Header3.jpg",
            title: "Prenota il Tuo Tavolo",
            subtitle: "Un'atmosfera unica per ogni occasione",
            imgSrc: "/media/logoDemoSushinobgwhite.png",
            position: "left"
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <header className="h-screen relative overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Layout Desktop */}
                    <div className="hidden md:grid md:grid-cols-2 h-full">
                        {/* Parte Testo */}
                        <div
                            className={`flex flex-col items-center justify-center p-12 bg-black/80 ${slide.position === "right" ? "md:order-2" : ""
                                }`}
                        >
                            <div className="text-center space-y-6 max-w-lg">
                                <Image
                                    src={"/media/logoDemoSushinobgwhite.png"}
                                    alt="Logo Kyoto Sushi"
                                    width={200}
                                    height={200}
                                    className="w-[150px] md:w-[200px] mb-4"
                                />
                                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-300">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Parte Immagine */}
                        <div className={`relative ${slide.position === "right" ? "md:order-1" : ""}`}>
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover h-96 w-96"
                            />
                        </div>
                    </div>

                    {/* Layout Mobile - Full Screen con overlay */}
                    <div className="md:hidden relative h-full">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-6">
                            <div className="text-center space-y-6">
                                <div className="text-7xl mb-4 animate-bounce">
                                    <Image
                                        src={"/media/logoDemoSushinobgwhite.png"}
                                        alt="Logo Kyoto Sushi"
                                        width={200}
                                        height={200}
                                        className="w-[150px] md:w-[200px] mb-4"
                                    />
                                </div>
                                <h1 className="text-4xl font-bold text-white leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg text-gray-300">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Indicatori slide */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                            ? "bg-yellow-500 w-8"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Vai allo slide ${index + 1}`}
                    />
                ))}
            </div>
        </header>
    );
}