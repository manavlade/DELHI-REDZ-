"use client"
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
    { label: "About Us", href: "#manifesto" },
    { label: "Our Purpose", href: "#purpose" },
    { label: "About RPL", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Why Rugby", href: "#why" },
    { label: "Shop", href: "#shop" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <header className=" sticky top-0 bg-gradient-to-br from-[#1a1a1a] to-[#000000] text-white shadow-md z-50">
            <nav className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold cursor-pointer tracking-wide">
                    <Image
                    src="/assests/DR_LOGO.png"
                    alt="logo"
                    width={50}
                    height={50}
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
                    {navLinks.map((link) => (
                        <li
                            key={link.href}
                            className="hover:text-red-500 transition-colors duration-200 cursor-pointer"
                        >
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:block">
                    <Button className="bg-red-600 hover:bg-red-700 transition-colors">
                        <a href="#contact">Contact Us</a>
                    </Button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/90 backdrop-blur-sm fixed top-16 left-0 w-full px-4 py-6 z-40"
                    >
                        <ul className="flex flex-col gap-6 text-lg font-medium">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block hover:text-red-500 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Button className="bg-red-600 hover:bg-red-700 w-full">
                                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                                        Contact Us
                                    </a>
                                </Button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
