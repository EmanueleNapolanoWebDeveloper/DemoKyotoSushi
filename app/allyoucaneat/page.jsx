'use client'

import { motion } from 'framer-motion';
import Image from "next/image";
import './allyoucaneat.css'

export default function Allyoucaneat() {
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

    const cardVariants = {
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

    const listVariants = {
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

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
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
        <main className="bgAyce min-h-screen">
            <section className="min-h-screen flex flex-col gap-5 items-center justify-center bg-black/90 py-6">
                <motion.div
                    className="flex flex-col gap-5 items-center justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={logoVariants}>
                        <Image
                            src={"/media/logoDemoSushinobgwhite.png"}
                            width={250}
                            height={250}
                            alt="Logo Kyoto Sushi"
                            className="w-[150px] h-[150px]"
                        />
                    </motion.div>
                    <motion.h2
                        className="text-5xl md:text-5xl font-bold text-white"
                        variants={titleVariants}
                    >
                        ALL YOU CAN EAT
                    </motion.h2>
                </motion.div>

                {/* card prezzi pranzo/cena */}
                <motion.div
                    className="flex flex-wrap gap-6 justify-center w-full max-w-4xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Card Pranzo */}
                    <motion.div
                        className="bg-gradient-to-br from-black/20 to-yellow-500/20 backdrop-blur-md p-8 flex-1 min-w-[280px] border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
                        variants={cardVariants}
                    >
                        <div className="flex gap-3 items-center justify-center mb-10">
                            <Image
                                src={"/media/iconaPranzo.png"}
                                alt="Icona Cena"
                                width={50}
                                height={50}
                                className="w-[80px] h-[80px]"
                            />
                            <h3 className="text-3xl font-bold text-white mb-3">Pranzo</h3>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <p className="text-5xl font-bold text-white mb-4">€19.90</p>

                            <p className="text-white/80 text-sm mb-6">Lun - Ven: 12:00 - 15:00</p>

                            <div className="mt-6 pt-6 border-t border-white/20">
                                <p className="text-white/70 text-xs">*Bevande escluse</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card Cena */}
                    <motion.div
                        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md p-8 flex-1 min-w-[280px] border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
                        variants={cardVariants}
                    >
                        <div className="flex gap-3 items-center justify-center mb-10">
                            <Image
                                src={"/media/iconaCena.png"}
                                alt="Icona Cena"
                                width={50}
                                height={50}
                                className="w-[80px] h-[80px]"
                            />
                            <h3 className="text-3xl font-bold text-white mb-3">Cena</h3>
                        </div>

                        <div className="flex flex-col gap-5 items-center justify-center">
                            <p className="text-5xl font-bold text-white mb-4">€29.90</p>

                            <p className="text-white/80 text-sm mb-6">Tutti i giorni: 19:00 - 23:00</p>

                            <div className="mt-6 pt-6 border-t border-white/20">
                                <p className="text-white/70 text-xs">*Bevande escluse</p>
                                <p className="text-white/70 text-xs">Weekend e festivi: +€3.00</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* lista */}
                <motion.div
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.ol
                        className="list-decimal list-inside space-y-4 text-white text-lg leading-relaxed max-w-3xl mx-auto px-4"
                        variants={containerVariants}
                    >
                        <motion.li variants={itemVariants}>
                            La formula <span className="font-semibold text-red-400">"All You Can Eat Luxury"</span> consente di ordinare quattro piatti a persona alla prima ordinazione, dopodiché sarà possibile ordinare un piatto a persona fino a quando volete.
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            La formula deve essere valevole per <span className="font-semibold text-red-400">tutto il tavolo</span>.
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            Questa formula è limitata ai primi <span className="font-semibold text-red-400">venti che hanno prenotato</span> la suddetta formula.
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            Per poter accedere all'ordine della portata successiva sarà tassativo aver terminato la portata precedente.
                            L'inottemperanza di questa regola comporta il pagamento di <span className="font-semibold text-red-400">1 € per ogni pezzo residuo</span>, o dell'intera pietanza, qualora dovesse trattarsi di piatti come riso, udon, tartare, miso shiro, ecc.
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            Ogni pietanza non può essere ordinata più di <span className="font-semibold text-red-400">tre volte</span>.
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <span className="font-semibold text-red-400">Bevande, amari e dolci</span> non sono compresi.
                        </motion.li>
                    </motion.ol>
                </motion.div>

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
                        Prenota un tavolo
                    </motion.button>
                </motion.div>
            </section>
        </main>
    )
}