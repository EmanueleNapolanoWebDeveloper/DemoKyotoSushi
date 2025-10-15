'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import '../landing.css';

export default function IntroHome() {
    // Varianti per le animazioni
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <main className="bg-white/60">
            <section className="min-h-[80vh] px-6 md:px-16 py-12 items-center backgroundIntroHome">
                {/* Titolo */}
                <motion.div
                    className="flex flex-col items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <Image
                        src={'/media/logoDemoSushinobg.png'}
                        width={250}
                        height={250}
                        alt="Logo Kyoto Sushi"
                    />
                    <h2 className="text-4xl text-center md:text-4xl font-bold text-gray-900 mb-6">
                        L'autentico ristorante giapponese
                    </h2>
                </motion.div>

                {/* Testo descrittivo */}
                <div className="grid grid-cols-2 gap-6">
                    <motion.div
                        className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center text-2xl leading-relaxed text-black lg:px-25 lg:py-15 px-10 py-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInLeft}
                    >
                        <p className="text-center text-lg md:text-2xl font-semibold">
                            Da <strong className="text-red-600">Kyoto Sushi</strong> ogni piatto è preparato con ingredienti freschi e di alta qualità, seguendo le tradizioni culinarie giapponesi. Il nostro sushi è un'esperienza unica che unisce gusto e arte.
                            Scopri i nostri nigiri, sashimi e rolls speciali, realizzati con passione dai nostri chef esperti. Ogni morso racconta la storia di Kyoto e della sua cucina millenaria.
                        </p>
                    </motion.div>

                    <motion.div
                        className="col-span-2 lg:col-span-1 text-2xl leading-relaxed text-black lg:px-25 lg:py-15 px-10 py-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInRight}
                    >
                        <Image
                            src={'/media/photoLocation/Photo1.jpg'}
                            width={500}
                            height={500}
                            alt="Logo Kyoto Sushi"
                            className="w-[450px] h-[350px]"
                        />
                    </motion.div>

                    <motion.div
                        className="col-span-2 lg:col-span-1 text-2xl leading-relaxed text-black lg:px-25 lg:py-15 px-10 py-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInLeft}
                    >
                        <Image
                            src={'/media/photoLocation/Photo3.jpg'}
                            width={500}
                            height={500}
                            alt="Logo Kyoto Sushi"
                            className="w-[450px] h-[350px]"
                        />
                    </motion.div>

                    <motion.div
                        className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center text-2xl leading-relaxed text-black lg:px-25 lg:py-15 px-10 py-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInRight}
                    >
                        <p className="text-center text-lg md:text-2xl font-semibold">
                            Il nostro ambiente accogliente e raffinato ti farà sentire come in Giappone. Perfetto per una cena romantica, un pranzo tra amici o una celebrazione speciale.
                            Offriamo anche opzioni <strong className="text-red-600">All You Can Eat</strong> per chi vuole assaporare una varietà di piatti senza limiti, sempre con la massima freschezza.
                        </p>
                    </motion.div>
                </div>

                {/* SERVIZI GENERALI */}
                <div className="w-full min-h-[50vh] p-5 md:p-5">
                    {/* Sezione servizi */}
                    <motion.div
                        className="grid grid-cols-3 gap-10 text-black"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {/* LOCATION */}
                        <motion.div
                            className="col-span-3 md:col-span-1 flex flex-col items-center text-center"
                            variants={fadeInUp}
                        >
                            <Image
                                src="/media/photoLocation/Photo2.jpg"
                                alt="Location Kyoto Sushi"
                                width={250}
                                height={250}
                                className="rounded-xl shadow-lg mb-6 object-cover h-[200px] w-[250px]"
                            />
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-title">
                                A la carte
                            </h3>
                            <p className="text-sm md:text-base font-text mb-6 px-3 md:px-0 leading-relaxed">
                                Un ambiente elegante e accogliente nel cuore della città, dove l'atmosfera orientale incontra la modernità. Perfetto per una cena romantica o una serata tra amici.
                            </p>
                            <Link
                                href="/location"
                                className="bg-black/60 border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 hover:text-white transition-colors"
                            >
                                Prenota un tavolo
                            </Link>
                        </motion.div>

                        {/* SERVIZI */}
                        <motion.div
                            className="col-span-3 md:col-span-1 flex flex-col items-center text-center"
                            variants={fadeInUp}
                        >
                            <Image
                                src="/media/services/catering.jpg"
                                alt="Servizi Kyoto Sushi"
                                width={250}
                                height={250}
                                className="rounded-xl shadow-lg mb-6 object-cover h-[200px] w-[250px]"
                            />
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-title">
                                All You Can Eat
                            </h3>
                            <p className="text-sm md:text-base font-text mb-6 px-3 md:px-0 leading-relaxed">
                                Offriamo servizio catering per eventi, ordini take-away e delivery. La qualità del nostro sushi arriva ovunque, con la stessa cura e freschezza del ristorante.
                            </p>
                            <Link
                                href="/servizi"
                                className="bg-black/60 border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 hover:text-white transition-colors"
                            >
                                Prenota un tavolo
                            </Link>
                        </motion.div>

                        {/* PROMOZIONI */}
                        <motion.div
                            className="col-span-3 md:col-span-1 flex flex-col items-center text-center"
                            variants={fadeInUp}
                        >
                            <Image
                                src="/media/ayce.jpg"
                                alt="Promozioni Kyoto Sushi"
                                width={250}
                                height={250}
                                className="rounded-xl shadow-lg mb-6 object-cover h-[200px] w-[250px]"
                            />
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-title">
                                Eventi
                            </h3>
                            <p className="text-sm md:text-base font-text mb-6 px-3 md:px-0 leading-relaxed">
                                Approfitta delle nostre offerte All You Can Eat e delle promozioni stagionali. Gusta il meglio del sushi a un prezzo speciale, senza rinunciare alla qualità.
                            </p>
                            <Link
                                href="/promozioni"
                                className="bg-black/60 border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 hover:text-white transition-colors"
                            >
                                Contattci per il tuo evento
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Epilogo */}
                <motion.div
                    className="mt-8 text-gray-800 text-lg md:text-xl leading-relaxed"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <h5 className="text-[2rem] text-center">
                        Vieni a vivere l'autentica esperienza giapponese nel cuore della tua città. <br />
                    </h5>
                </motion.div>
            </section>
        </main>
    );
}