import {ModeToggle} from "@/components/ui/mode-toggler";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className=" flex items-center justify-center relative h-[100vh]">
            <div className="absolute bottom-5 right-0 text-white">
                <ModeToggle />
            </div>
            {children}
        </div>
    );
};

export default AuthLayout;
