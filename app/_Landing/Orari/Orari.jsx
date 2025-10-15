'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../landing.css'

export default function OpeningHours() {
    const lunchHours = [
        { day: "Lunedì", time: "12:00 – 14:30" },
        { day: "Martedì", time: "Chiuso" },
        { day: "Mercoledì", time: "12:00 – 14:30" },
        { day: "Giovedì", time: "12:00 – 14:30" },
        { day: "Venerdì", time: "12:00 – 14:30" },
        { day: "Sabato", time: "12:00 – 15:00" },
        { day: "Domenica", time: "12:00 – 15:00" },
    ];

    const dinnerHours = [
        { day: "Lunedì", time: "19:00 – 22:30" },
        { day: "Martedì", time: "Chiuso" },
        { day: "Mercoledì", time: "19:00 – 22:30" },
        { day: "Giovedì", time: "19:00 – 22:30" },
        { day: "Venerdì", time: "19:00 – 23:30" },
        { day: "Sabato", time: "19:00 – 23:30" },
        { day: "Domenica", time: "19:00 – 23:00" },
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
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const noteVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    return (
        <section className="min-h-screen text-gray-700 dark:text-gray-200 px-6 md:px-16 py-12 backgroundOpeningHours">
            <motion.div
                className="max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Titolo */}
                <motion.div
                    className="text-start mb-10 flex gap-4 items-center justify-center"
                    variants={titleVariants}
                >
                    <Image
                        src={"/media/logoDemoSushinobgwhite.png"}
                        width={250}
                        height={250}
                        alt="Logo Kyoto Sushi"
                        className='w-[150px] h-[150px]'
                    />
                </motion.div>

                {/* Griglia pranzo / cena */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* PRANZO */}
                    <motion.div
                        className="bg-white/30 shadow-lg p-8 border border-gray-200 backdrop-blur"
                        variants={cardVariants}
                    >
                        <h3 className="text-5xl font-bold text-start text-black mb-6">
                            Pranzo
                        </h3>
                        <ul className="divide-y divide-gray-200 dark:divide-zinc-700">
                            {lunchHours.map((item, index) => (
                                <motion.li
                                    key={item.day}
                                    className="flex justify-between items-center py-3 text-lg"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1 + 0.3
                                    }}
                                >
                                    <span className="font-semibold text-black/80 dark:text-gray-100">
                                        {item.day}
                                    </span>
                                    <span
                                        className={`${item.time === "Chiuso"
                                            ? "text-red-600 font-medium"
                                            : "text-black"
                                            }`}
                                    >
                                        {item.time}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CENA */}
                    <motion.div
                        className="bg-black/30 shadow-lg p-8 border border-gray-200 backdrop-blur"
                        variants={cardVariants}
                    >
                        <h3 className="text-5xl font-bold text-start text-white mb-6">
                            Cena
                        </h3>
                        <ul className="divide-y divide-gray-200 dark:divide-zinc-700">
                            {dinnerHours.map((item, index) => (
                                <motion.li
                                    key={item.day}
                                    className="flex justify-between items-center py-3 text-lg"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1 + 0.3
                                    }}
                                >
                                    <span className="font-semibold text-white dark:text-gray-100">
                                        {item.day}
                                    </span>
                                    <span
                                        className={`${item.time === "Chiuso"
                                            ? "text-red-600 font-medium"
                                            : "text-white"
                                            }`}
                                    >
                                        {item.time}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Nota finale */}
                <motion.div
                    className="text-center mt-10 text-white text-[1rem] italic space-y-1"
                    variants={noteVariants}
                >
                    <p>* Gli orari possono variare nei giorni festivi</p>
                    <p>* Ritardo massimo consentito: 10 minuti</p>
                </motion.div>

            </motion.div>
        </section>
    );
}