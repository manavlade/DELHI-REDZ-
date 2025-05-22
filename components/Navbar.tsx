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
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">About Us</li>
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Our Purpose</li>
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">About RPL</li>
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Our Team</li>
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Why Rugby</li>
                    <li className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Shop</li>
                </ul>

                {/* Contact Button */}
                <div>
                    <Button variant="default" className="bg-red-600 hover:bg-red-700 transition-colors">
                        Contact Us
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
