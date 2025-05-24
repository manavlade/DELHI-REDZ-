import {
    Box,
    Users,
    CalendarDays,
    Tv,
    Globe,
    Flag,
    Clock,
    LayoutGrid,
    BadgeCheck,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
    X,
    Trophy, School, TrendingUp, Flame,
    Telescope,
    Rocket
} from "lucide-react";
import Navbar from "./Navbar";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { Button } from "./ui/button";
import { ShineBorder } from "./magicui/shine-border";


const HomePage = () => {

    const features = [
        {
            title: "Relentless",
            subtitle: "Grit. Fire. Determination.",
            icon: Flame, // symbol of energy and grit
        },
        {
            title: "Proudly Indian",
            subtitle: "Rooted in Delhi, rising for the nation.",
            icon: Flag, // represents patriotism
        },
        {
            title: "Visionary",
            subtitle: "Reimagining Indian sport through innovation.",
            icon: Telescope, // symbolizes vision and foresight
        },
        {
            title: "Inclusive",
            subtitle: "A team that speaks for all of India.",
            icon: Users, // represents community and diversity
        },
        {
            title: "Empowering",
            subtitle: "Building platforms for youth and pride for the nation.",
            icon: Rocket, // symbolizes growth and empowerment
        },
    ];

    const highlights = [
        {
            icon: Users,
            title: "6 Teams",
            description: "Diverse teams from across India",
        },
        {
            icon: CalendarDays,
            title: "34 Matches",
            description: "Spread across 15 thrilling match days",
        },
        {
            icon: Tv,
            title: "Broadcast",
            description: "Digital & TV in 2 languages",
        },
        {
            icon: Globe,
            title: "50M+ Viewership",
            description: "Massive national and international reach",
        },
        {
            icon: Flag,
            title: "Team Composition",
            description: "8 International + 5 Indian players per team",
        },
        {
            icon: Clock,
            title: "Match Duration",
            description: "16 minutes total • 4 quarters (4 mins each) Rugby Sevens format",
        },
    ];


    const rugbyHighlights = [
        {
            icon: Globe,
            title: "133 World Rugby National Members",
            description: "Rugby is played and governed by over 133 national unions globally.",
        },
        {
            icon: Users,
            title: "100K+ Active Players in India",
            description: "The sport has seen a surge in registered and active players nationwide.",
        },
        {
            icon: School,
            title: "2,000+ Schools Play Rugby",
            description: "Rugby is gaining popularity in school curriculums across India.",
        },
        {
            icon: TrendingUp,
            title: "66% Rise in Women’s Participation",
            description: "Since 2019, women’s engagement in Rugby has seen a remarkable spike.",
        },
        {
            icon: Flame,
            title: "Played in 322+ Districts",
            description: "Rugby is now played at the grassroots level in hundreds of Indian districts.",
        },
        {
            icon: Trophy,
            title: "Rugby is an Olympic Sport",
            description: "It enjoys global appeal and continues to grow in grassroots participation.",
        },
    ];

    const testimonials = [
        {
            name: "Rajdeep Saha",
            src: "/assests/players/REDZ Candid Photoshoot-16.jpg",
        },
        {
            name: "Raj Kumar",
            src: "/assests/players/REDZ Candid Photoshoot-28.jpg",
        },
        {
            name: "Deepak Punia",
            src: "/assests/players/REDZ Candid Photoshoot-43.jpg",
        },
        {
            name: "Sunil Chavan",
            src: "/assests/players/REDZ Candid Photoshoot-57.jpg",
        },
        {
            name: "Mohit",
            src: "/assests/players/REDZ Candid Photoshoot-72.jpg",
        },
    ];

    return (
        <>
            <div>
                <Navbar />
                <div>

                    {/* home sectiom */}
                    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center text-white">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        >
                            <source src="/assests/homevid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
                        <div className="z-20 px-4">
                            <div className="mb-6 flex items-center justify-center">
                                <Image
                                    src="/assests/DR_LOGO.png"
                                    alt="logo"
                                    width={150}
                                    height={150}
                                    className="md:h-80 md:w-80 h-40 w-40"
                                />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Dil Dil Mein Redz
                            </h1>
                            <p className="text-lg max-w-xl mx-auto mb-8">
                                Welcome to the Delhi Redz, where passion meets purpose in the heart of Indian rugby.
                                Together, we’re not just playing a game; we’re igniting a movement that unites fans and athletes alike.
                            </p>

                        </div>
                    </section>

                    <div>
                        <section className="bg-black text-white px-4 md:px-12 py-20" id="manifesto">
                            <div className="max-w-5xl mx-auto text-center relative">
                                <h2 className="text-2xl md:text-5xl text-red-500 font-extrabold mb-8">DIL DIL MEIN REDZ</h2>

                                <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-xl p-8 md:p-12 shadow-xl">
                                    <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed relative z-10">
                                        “This is more than a game. It is a movement. A calling. <br />
                                        We play for the team. For the fans. For Delhi. <br />
                                        We are not just building a team—we are building the future of Indian rugby.”
                                    </p>

                                    <p className="mt-6 text-red-500 font-bold text-lg">#DilDilMeinRedz</p>
                                </div>

                                {/* Optional decorative background */}
                                <div className="absolute -top-8 -left-6 w-32 h-32 bg-red-500 opacity-20 rounded-full blur-3xl hidden md:block" />
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl hidden md:block" />
                            </div>
                        </section>

                    </div>

                    {/* purpose section */}
                    <div>
                        <section
                            id="purpose"
                            className="relative bg-gradient-to-b from-[#7A1120] to-black text-white px-4 md:px-12 py-20 overflow-hidden"
                        >
                            <div className="absolute inset-0 z-0 flex justify-start">
                                <img
                                    src="/assests/i5.jpg"
                                    alt="Background"
                                    className="h-full object-cover opacity-30 mix-blend-overlay" 
                                />
                                <div className="absolute inset-0 bg-black/50" />
                            </div>

                            <div className="relative z-10">
                                <h1 className="font-bold text-2xl md:text-5xl text-center text-white mb-12">
                                    Our Purpose
                                </h1>

                                <div className="max-w-7xl mx-auto">
                                    <section className="py-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {features.map((feature, idx) => (
                                                <Card
                                                    key={idx}
                                                    className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#B6995A]/20 hover:shadow-2xl transition-shadow duration-300"
                                                >
                                                    <CardContent className="flex items-start gap-4 p-6">
                                                        <div className="flex-shrink-0">
                                                            <feature.icon className="h-10 w-10 text-[#B6995A]" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl text-[#B6995A] font-bold">{feature.title}</h3>
                                                            <p className="text-gray-400 text-sm mt-1">{feature.subtitle}</p>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section
                            id="about"
                            className="relative bg-gradient-to-b from-[#7A1120] to-black text-white px-4 md:px-12 py-20 overflow-hidden"
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="/assests/i6.jpg"
                                    alt="Background"
                                    className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                                />
                                <div className="absolute inset-0 bg-black/50" />
                            </div>
                            <div className="relative z-10">
                                <h1 className="font-bold text-2xl md:text-5xl text-center text-white mb-12">
                                    About RUBY PREMIER LEAGUE
                                </h1>

                                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {highlights.map(({ icon: Icon, title, description }, index) => (
                                        <Card
                                            key={index}
                                            className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#B6995A]/20 hover:shadow-2xl transition-shadow duration-300"
                                        >
                                            <CardContent className="flex items-start gap-4 p-6">
                                                <div className="flex-shrink-0">
                                                    <Icon className="h-10 w-10 text-[#B6995A]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg text-[#B6995A] font-bold">{title}</h3>
                                                    <p className="text-gray-400 text-sm mt-1">{description}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </section>


                    </div>

                    <section id="team" className="bg-gradient-to-b from-[#7A1120] to-black text-white px-4 md:px-12 py-20">
                        <h1 className="font-bold text-2xl md:text-5xl text-center text-white mb-12">Meet The Team</h1>

                        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl border border-[#B6995A]/20 shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">

                            <div className="flex-1 space-y-4">
                                <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm text-[#B6995A] uppercase tracking-widest font-semibold">
                                    Head Coach
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#B6995A]">TOMASI CAMA</h2>
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                    Tomasi Cama Jr. is a Fijian-born rugby sevens legend who became the all-time leading points scorer
                                    for the All Blacks Sevens and was named World Rugby Sevens Player of the Year in 2012.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <Image
                                    src="/assests/headcoach.png"
                                    alt="Tomasi Cama"
                                    width={300}
                                    height={300}
                                    className="rounded-xl -mt-10 md:-mt-20"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-b from-[#7A1120] to-black text-white px-4 md:px-12 py-20">

                        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl border border-[#B6995A]/20 shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">

                            {/* Left Side - Text Content */}
                            <div className="flex-1 space-y-4">
                                <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm text-[#B6995A] uppercase tracking-widest font-semibold">
                                    Assistant Coach
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#B6995A]"> ARUN DAGAR</h2>
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                    Arun Dagar is a dynamic Indian rugby scrum-half known for his speed, who has represented India in major tournaments like the 2019 World Cup Qualifiers and Asian Five Nations
                                </p>
                            </div>

                            {/* Right Side - Image */}
                            <div className="flex-shrink-0">
                                <Image
                                    src="/assests/assist.png"
                                    alt="Tomasi Cama"
                                    width={300}
                                    height={300}
                                    className="rounded-xl -mt-10 md:-mt-20"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="bg-gradient-to-b from-[#7A1120] to-black text-white px-4 md:px-12 py-20">
                        <h1 className="font-bold text-2xl md:text-5xl text-center pb-10">What Our Players Say</h1>
                        <AnimatedTestimonials testimonials={testimonials} />
                    </div>

                    <div>
                        <section
                            id="why"
                            className="relative bg-gradient-to-b from-[#7A1120] to-black text-white px-4 md:px-12 py-20 overflow-hidden"
                        >
                            <div className="absolute inset-0 z-0 flex justify-end">
                                <img
                                    src="/assests/i8.jpg"
                                    alt="Background"
                                    className="h-full object-cover opacity-30 mix-blend-overlay" 
                                />
                                <div className="absolute inset-0 bg-black/50" />
                            </div>

                            <div className="relative z-10">
                                <h1 className="font-bold text-2xl md:text-5xl text-center pb-12">
                                    WHY RUGBY, WHY NOW?
                                </h1>

                                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {rugbyHighlights.map(({ icon: Icon, title, description }, index) => (
                                        <Card
                                            key={index}
                                            className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#B6995A]/20 hover:shadow-xl transition-shadow duration-300"
                                        >
                                            <CardContent className="flex items-start gap-4 p-6">
                                                <div className="flex-shrink-0">
                                                    <Icon className="h-10 w-10 text-[#B6995A]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg text-[#B6995A] font-bold">{title}</h3>
                                                    <p className="text-gray-400 text-sm mt-1">{description}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </section>

                    </div>

                    <div>
                        <section id="shop" className="bg-gradient-to-b from-[#7A1120] to-black text-white px-4 md:px-12 py-20">
                            <h1 className="font-bold text-2xl md:text-5xl text-center pb-12">Shop Now</h1>

                            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Card 1: Shirt */}
                                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#B6995A]/20 hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <img src="/assests/players/REDZ Candid Photoshoot-16.jpg" alt="Team Shirt" className="w-full h-48 object-cover rounded-md" />
                                        <h3 className="text-[#B6995A] text-xl font-semibold">Team Shirt</h3>
                                        <p className="text-gray-400 text-sm">Official RPL merchandise for fans and players alike.</p>
                                        <p className="text-[#B6995A] font-bold text-lg">₹799</p>
                                        <Button variant="default" className="bg-[#B6995A] hover:bg-[#B6995A]/80 transition-colors">
                                            Add to Cart
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Card 2: Shorts */}
                                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#B6995A]/20 hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <img src="/assests/players/REDZ Candid Photoshoot-16.jpg" alt="Team Shorts" className="w-full h-48 object-cover rounded-md" />
                                        <h3 className="text-[#B6995A] text-xl font-semibold">Team Shorts</h3>
                                        <p className="text-gray-400 text-sm">Lightweight and durable shorts for performance.</p>
                                        <p className="text-[#B6995A] font-bold text-lg">₹499</p>
                                        <Button variant="default" className="bg-[#B6995A] hover:bg-[#B6995A]/80 transition-colors">
                                            Add to Cart
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Card 3: Shoes */}
                                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-[#B6995A]/20 hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <img src="/assests/players/REDZ Candid Photoshoot-16.jpg" alt="Rugby Shoes" className="w-full h-48 object-cover rounded-md" />
                                        <h3 className="text-[#B6995A] text-xl font-semibold">Rugby Shoes</h3>
                                        <p className="text-gray-400 text-sm">High-traction shoes built for speed and grip.</p>
                                        <p className="text-[#B6995A] font-bold text-lg">₹1,299</p>
                                        <Button variant="default" className="bg-[#B6995A] hover:bg-[#B6995A]/80 transition-colors">
                                            Add to Cart
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                    </div>

                    {/* footer */}
                    <div>
                        <section id="contact" className="bg-gradient-to-b from-[#7A1120] to-black text-white px-4 md:px-12 py-20">
                            <h1 className="font-bold text-2xl md:text-5xl text-center mb-12">Contact Us</h1>
                            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                                {/* Email Card */}
                                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-white/10 hover:shadow-xl transition-shadow">
                                    <CardContent className="p-6 space-y-4 text-center md:text-left">
                                        <div className="flex flex-col items-center md:flex-row md:items-start gap-3 md:gap-5">
                                            <Mail className="h-8 w-8 text-[#B6995A]" />
                                            <h3 className="text-xl text-[#B6995A] font-bold text-center md:text-left">Email</h3>
                                        </div>
                                        <p className="text-gray-400">For sponsorships or partnerships, reach out to us directly.</p>
                                        <Link href="mailto:contact@delhiredz.in" className="text-[#B6995A] hover:underline block">
                                            contact@delhiredz.in
                                        </Link>
                                    </CardContent>
                                </Card>

                                {/* Phone Card */}
                                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-white/10 hover:shadow-xl transition-shadow">
                                    <CardContent className="p-6 space-y-4 text-center md:text-left">
                                        <div className="flex flex-col items-center md:flex-row md:items-start gap-3 md:gap-5">
                                            <Phone className="h-8 w-8 text-[#B6995A]" />
                                            <h3 className="text-xl text-[#B6995A] font-bold text-center md:text-left">Phone</h3>
                                        </div>
                                        <p className="text-gray-400">Call us for inquiries or collaboration opportunities.</p>
                                        <Link href="tel:+919876543210" className="text-[#B6995A] hover:underline block">
                                            +91 98765 43210
                                        </Link>
                                    </CardContent>
                                </Card>

                                {/* Office Card */}
                                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#000000] border border-white/10 hover:shadow-xl transition-shadow">
                                    <CardContent className="p-6 space-y-4 text-center md:text-left">
                                        <div className="flex flex-col items-center md:flex-row md:items-start gap-3 md:gap-5">
                                            <MapPin className="h-8 w-8 text-[#B6995A]" />
                                            <h3 className="text-xl text-[#B6995A] font-bold text-center md:text-left">Office</h3>
                                        </div>
                                        <p className="text-gray-400">Visit us for discussions and collaborations.</p>
                                        <Link
                                            href="https://maps.google.com?q=456+Rugby+Lane,+Delhi,+India+110001"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#B6995A] hover:underline block"
                                        >
                                            456 Rugby Lane, Delhi, India 110001
                                        </Link>
                                    </CardContent>
                                </Card>

                            </div>
                        </section>
                    </div>

                    <footer className="bg-black text-white px-4 md:px-12 py-12 border-t">
                        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
                            {/* Logo & Contact */}
                            <Image
                                src="/assests/DR_LOGO.png"
                                alt="logo"
                                width={150}
                                height={150}
                                className="md:h-60 md:w-60 h-40 w-40"
                            />

                            <div>
                                <p className="font-semibold">Address:</p>
                                <p>456 Rugby Lane, Delhi, India 110001</p>
                            </div>

                            <div>
                                <p className="font-semibold">Contact:</p>
                                <p>
                                    <Link href="tel:18001234567" className="hover:underline text-[#B6995A]">
                                        +91 98765 43210
                                    </Link>{" "}
                                    |{" "}
                                    <Link href="mailto:contact@delhiredz.in" className="hover:underline text-[#B6995A]">
                                        contact@delhiredz.in
                                    </Link>
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 text-[#B6995A] justify-center">
                                <Link href="#"><Facebook className="hover:text-blue-500" /></Link>
                                <Link href="#"><Instagram className="hover:text-pink-500" /></Link>
                                <Link href="#"><X className="hover:text-blue-400" /></Link>
                                <Link href="#"><Linkedin className="hover:text-blue-700" /></Link>
                                <Link href="#"><Youtube className="hover:text-red-600" /></Link>
                            </div>
                        </div>

                        {/* Bottom line */}
                        <div className="mt-10 border-t pt-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
                            <p>© 2025  Redz. All rights reserved.</p>
                            <div className="flex gap-6 mt-4 md:mt-0">
                                <Link href="#" className="hover:underline">Privacy Policy</Link>
                                <Link href="#" className="hover:underline">Terms of Service</Link>
                                <Link href="#" className="hover:underline">Cookies Settings</Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default HomePage;