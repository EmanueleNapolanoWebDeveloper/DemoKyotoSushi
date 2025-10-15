'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import './navbar.css';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 450) {
                setIsFixed(true);
            } else if (window.scrollY < 10) {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav
                className={`grid grid-cols-2 w-full h-[110px] transition-all duration-500 ${isFixed
                    ? 'fixed top-0 left-0 right-0 animate-fadeIn z-10'
                    : 'relative'
                    }`}
                id="navbarContainer"
            >
                {/* logo */}
                <div className="col-span-1 flex items-center justify-start">
                    <Image
                        src="/media/logoDemoSushinobg.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="ml-10"
                    />
                </div>

                {/* Hamburger Button - Mobile */}
                <div className="col-span-1 lg:hidden flex items-center justify-end mr-10">
                    <button
                        onClick={toggleMenu}
                        className="text-black focus:outline-none z-50"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Links Desktop */}
                <div className="hidden lg:flex col-span-1 items-center justify-center gap-3">
                    <ul className="flex items-center justify-center gap-6">
                        <li className="text-black font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-black font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer">
                            <Link href="/location">Location</Link>

                        </li>
                        <li className="text-black font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer">
                            <Link href="/servizi">Servizi</Link>

                        </li>
                        <li className="text-black font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer">
                            <Link href="/allyoucaneat">All You Can Eat</Link>
                        </li>
                        <li className="text-black font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer">
                            <Link href="#footerContatti">Contatti</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Offcanvas Menu - Mobile */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col items-start justify-start p-8 mt-20">
                    <ul className="flex flex-col gap-6 w-full">
                        <li
                            onClick={closeMenu}
                            className="text-black text-xl font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer border-b border-gray-200 pb-4"
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            onClick={closeMenu}
                            className="text-black text-xl font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer border-b border-gray-200 pb-4"
                        >
                            <Link href="/location">Location</Link>
                        </li>
                        <li
                            onClick={closeMenu}
                            className="text-black text-xl font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer border-b border-gray-200 pb-4"
                        >
                            <Link href="/servizi">Servizi</Link>
                        </li>
                        <li
                            onClick={closeMenu}
                            className="text-black text-xl font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer border-b border-gray-200 pb-4"
                        >
                            <Link href="/allyoucaneat">All You Can Eat</Link>
                        </li>
                        <li
                            onClick={closeMenu}
                            className="text-black text-xl font-semibold transition-colors duration-300 hover:text-pink-500 cursor-pointer"
                        >
                            <Link href="#footerContatti">Contatti</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Overlay quando menu è aperto */}
            {isOpen && (
                <div
                    onClick={closeMenu}
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
                />
            )}
        </>
    );
}