'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Allyoucaneat() {
    // Varianti per le animazioni
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeInScale = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    return (
        <section className="min-h-screen p-8 flex flex-col items-center justify-center gap-5 bg-black/70">
            <motion.h2
                className="text-5xl font-bold mb-6 text-yellow-500 text-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                All You Can Eat
            </motion.h2>

            <motion.p
                className="text-white/90 mb-8 max-w-2xl leading-relaxed text-center font-semibold text-[1.2rem]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
            >
                Immergiti in un'esperienza culinaria senza limiti. Il nostro menu All You Can Eat
                ti offre una vasta selezione di piatti autentici della tradizione giapponese,
                preparati con ingredienti freschi e di alta qualità. Scegli tra le nostre formule
                pranzo e cena per un viaggio gastronomico indimenticabile.
            </motion.p>

            {/* card prezzi pranzo/cena */}
            <motion.div
                className="flex flex-wrap gap-6 justify-center w-full max-w-4xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {/* Card Pranzo */}
                <motion.div
                    className="bg-gradient-to-br from-black/20 to-yellow-500/20 backdrop-blur-md p-8 flex-1 min-w-[280px] border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
                    variants={fadeInScale}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)" }}
                >
                    <div className="flex gap-3 items-center justify-center mb-10">
                        <Image
                            src={"/media/iconaPranzo.png"}
                            alt="Icona Pranzo"
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
                    variants={fadeInScale}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
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

            <motion.div
                className="mt-8 text-white text-lg font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
            >
                <p>⏱️ Durata massima: 2 ore | 📱 Prenotazione consigliata</p>
            </motion.div>
        </section>
    );
}