import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <header className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] text-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold cursor-pointer tracking-wide">
                    Redz
                </Link>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">
                        <a href="#manifesto">About Us</a>
                    </li>

                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">
                        <a href="#purpose">Our Purpose</a>
                    </li>
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">
                        <a href="#about">About RPL</a>
                    </li>
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">
                        <a href="#team">Our Team</a></li>
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">
                        <a href="#why">Why Rugby</a></li>
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">
                        <a href="#shop">Shop</a></li>
                </ul>

                {/* Contact Button */}
                <div>
                    <Button variant="default" className="bg-red-600 hover:bg-red-700 transition-colors">
                        <a href="#contact">
                            Contact Us
                        </a>
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
