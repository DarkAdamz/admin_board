import Image from "next/image";
import Link from "next/link";
import Logo from "../img/BLACKGRAM-logo-white.png";
import {Avatar, AvatarImage, AvatarFallback} from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {ModeToggle} from "./ui/mode-toggler";

const Navbar = () => {
    return (
        <div className="bg-primary text-white dark:bg-slate-700 py-2 px-5 flex justify-between">
            {/* LOGO */}
            <Link href="/">
                <Image src={Logo} alt="Company's Logo" width={180} />
            </Link>
            <div className="flex items-center">
                {/* DROPDOWN MENU */}
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        {/* AVATAR */}
                        <Avatar>
                            <AvatarImage src=" https://github.com/shadcn.png " alt="@shadcn" />
                            {/* https://github.com/shadcn.png */}
                            <AvatarFallback className="text-black">No Avatar</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/auth">Logout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Navbar;
