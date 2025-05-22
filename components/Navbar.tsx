import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div>
            <ul className="flex justify-between px-16 py-4">
                <div>
                    <li className="cursor-pointer">Logo</li>
                </div>
                <div className="flex gap-5 cursor-pointer">
                    <li>About Us</li>
                    <li>Our Purpose</li>
                    <li>About RPL</li>
                    <li>Our Team</li>
                    <li>Why Rugby</li>
                    <li>Shop</li>
                </div>
                <div>
                    <Button className="cursor-pointer" >Contact Us</Button>
                </div>
            </ul>

        </div>
    );
}

export default Navbar;

{/* <Image
    src="/assests/headcoach.png"
    alt="Brooklyn Simmons"
    width={260}
    height={260}
/> */}