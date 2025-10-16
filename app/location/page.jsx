'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function AutoCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        '/media/photoLocation/Photo1.jpg',
        '/media/photoLocation/Photo2.jpg',
        '/media/photoLocation/Photo3.jpg',
        '/media/photoLocation/Photo4.jpg',
        '/media/photoLocation/Photo5.jpg',
        '/media/photoLocation/Photo6.jpg',
        '/media/photoLocation/Photo7.jpg'
    ];

    // Cambio automatico ogni 3 secondi
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden group">
            {/* Immagini */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Frecce navigazione */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Slide precedente"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Slide successiva"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicatori */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Vai a slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}


export default function Location() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const carouselVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <main className='min-h-screen grid grid-cols-4 gap-4 bg-white/90'>
            {/* titolo */}
            <motion.div
                className='col-span-4 flex items-center justify-center w-full gap-3'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={imageVariants}>
                    <Image
                        src={'/media/logoDemoSushinobg.png'}
                        width={250}
                        height={250}
                        alt="Logo Kyoto Sushi"
                        className='w-[150px] h-[150px]'
                    />
                </motion.div>
                <motion.h2
                    className='text-5xl md:text-5xl font-bold text-black'
                    variants={titleVariants}
                >
                    Location
                </motion.h2>
            </motion.div>

            {/* carosello immagini */}
            <motion.div
                className='col-span-4 md:col-span-2 flex items-center justify-center p-4'
                variants={carouselVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <AutoCarousel />
            </motion.div>

            {/* testo */}
            <motion.div
                className='col-span-4 md:col-span-2 flex flex-col items-center justify-center gap-3 text-center'
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h3
                    className='text-[1.5rem] font-bold text-center text-black'
                    variants={paragraphVariants}
                >
                    Benvenuti da Kuoto Sushi, un luogo dove l'eleganza incontra il gusto autentico del Giappone.
                </motion.h3>

                <motion.p variants={paragraphVariants} className='text-black text-center'>
                    La nostra location è pensata per offrire un'esperienza unica: un ambiente raffinato, curato nei dettagli e avvolto da un'atmosfera rilassante che ti farà dimenticare il caos quotidiano.
                </motion.p>

                <motion.p variants={paragraphVariants} className='text-black text-center'>
                    Appena varchi la soglia, verrai accolto da luci soffuse, profumi di riso e alghe appena preparate, e il suono delicato del sushi che prende forma sotto le mani dei nostri chef.
                    Ogni tavolo è disposto per garantire intimità e comfort, perfetto sia per una cena romantica che per un momento conviviale tra amici o colleghi.
                </motion.p>

                <motion.p variants={paragraphVariants} className='text-black text-center'>
                    Il nostro locale unisce la tradizione giapponese al design contemporaneo: legno naturale, dettagli in bambù, pareti con motivi orientali e una cura minuziosa per l'armonia degli spazi. Durante la bella stagione, potrai anche gustare il tuo sushi preferito nel nostro dehors esterno, ideale per cenare all'aperto in un'atmosfera rilassata.
                </motion.p>

                <motion.p variants={paragraphVariants} className='text-black text-center'>
                    Che tu venga per una pausa pranzo o per una serata speciale, Kyoto Sushi è il posto perfetto per vivere un viaggio nel gusto, tra tradizione e modernità.
                </motion.p>
            </motion.div>
        </main>
    )
}