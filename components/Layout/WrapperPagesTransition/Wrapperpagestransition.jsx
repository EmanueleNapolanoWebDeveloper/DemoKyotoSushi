"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // durata animazione
    return () => clearTimeout(timer);
  }, [pathname]); // si riattiva quando cambia pagina

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/media/logoDemoSushinobg.png" // cambia con il tuo logo
                alt="Logo Kyoto Sushi"
                width={120}
                height={120}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenuto della pagina */}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}
