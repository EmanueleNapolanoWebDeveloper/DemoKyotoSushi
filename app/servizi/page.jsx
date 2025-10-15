"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
import './servizi.css';

export default function ServicesSection() {
    const services = [
        {
            title: "CATERING",
            text: "Offriamo un servizio di catering esclusivo per eventi privati e aziendali. Ogni piatto è preparato con ingredienti freschi e selezionati per garantire la massima qualità e presentazione.",
            img: "/media/services/catering.jpg",
            reverse: true,
        },
        {
            title: "BUSINESS EVENT",
            text: "Rendi il tuo evento aziendale indimenticabile con le nostre proposte di sushi premium, servite con eleganza e professionalità. Ideale per meeting, conferenze o cene di rappresentanza.",
            img: "/media/services/eventiaziendali.jpg",
            reverse: false,
        },
        {
            title: "WEDDING CATERING",
            text: "Celebra il tuo giorno speciale con un tocco di raffinatezza giapponese. Il nostro team realizzerà un servizio su misura per rendere il tuo matrimonio unico ed elegante.",
            img: "/media/services/weddingcatering.jpg",
            reverse: true,
        },
        {
            title: "PARTY PRIVATI",
            text: "Festeggia con gusto! Dai compleanni agli eventi esclusivi, il nostro sushi bar offre soluzioni personalizzate per rendere ogni festa un'esperienza gastronomica indimenticabile.",
            img: "/media/services/privateparty.jpg",
            reverse: false,
        },
        {
            title: "CONSEGNA SU BARCHE",
            text: "Sushi fresco e di alta qualità direttamente a bordo! Serviamo porti e marine con consegne puntuali, perfette per un pranzo o una cena sul mare.",
            img: "/media/services/boat.jpg",
            reverse: true,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const logoVariants = {
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

    const serviceVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const ctaVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <main className="text-gray-800 backgroundServizi">
            <section className="max-w-7xl mx-auto px-6 py-16 bg-black/80">
                <motion.div
                    className="w-full flex gap-5 items-center justify-center"
                    variants={logoVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image
                        src={'/media/logoDemoSushinobgwhite.png'}
                        width={250}
                        height={250}
                        alt="Logo Kyoto Sushi"
                        className="w-[150px] h-[150px]" />
                </motion.div>

                <motion.div
                    className="flex flex-col items-center justify-center gap-6 my-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className="text-[2rem] font-bold text-white"
                        variants={titleVariants}
                    >
                        Servizi
                    </motion.h2>
                    <motion.h3
                        className="text-[1.6rem] font-bold text-white"
                        variants={titleVariants}
                    >
                        Offriamo un servizio di catering esclusivo per eventi privati e aziendali
                    </motion.h3>
                </motion.div>

                <div className="space-y-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row ${service.reverse ? "md:flex-row-reverse" : ""
                                } items-center justify-between gap-10`}
                            variants={serviceVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* Testo */}
                            <motion.div
                                className="md:w-1/2 text-center md:text-left"
                                variants={textVariants}
                            >
                                <h3 className="text-5xl font-semibold text-pink-400/70 mb-4 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-white leading-relaxed text-center">
                                    {service.text}
                                </p>
                            </motion.div>

                            {/* Immagine */}
                            <motion.div
                                className="md:w-1/2 flex justify-center"
                                variants={imageVariants}
                            >
                                <div className="rounded-xl overflow-hidden shadow-lg w-full md:w-4/5">
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-[300px] md:h-[400px]"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="flex justify-center mt-8"
                    variants={ctaVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.button
                        className="border-2 border-yellow-500 text-yellow-500 font-semibold px-8 py-3 
                   hover:bg-yellow-500 hover:text-black transition-colors duration-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contattaci per il tuo evento
                    </motion.button>
                </motion.div>
            </section>
        </main>
    );
}