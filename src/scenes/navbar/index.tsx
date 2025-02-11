import { useState } from "react";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png';
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { div } from "framer-motion/client";
import ActionButton from "@/shared/ActionButton";


type Props = {
    isTopOfPage: boolean,
    selectedPage:SelectedPage,
    setselectedPage:(value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setselectedPage}: Props) => {
    const flexbetween  = 'flex items-center justify-between';
    const [isMenuToggeLed, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens  = useMediaQuery("(min-width:1060px)");
    const navbarBackground = isTopOfPage ? "": "bg-red-100 drop-shadow";

  return(
     <nav>
        <div className={`${navbarBackground} ${flexbetween} fixed top-0 z-40 w-full py-6`}>
            <div className={`${flexbetween} mx-auto w-5/6` }>
                <div className={`${flexbetween} w-full gap-16`}>
                    {/* Left side */}
                    <img src={Logo} alt="Logo" />

                    {/* Right side */}
                    {isAboveMediumScreens ?
                    (<div className={`${flexbetween} w-full`}>
                        <div className={`${flexbetween} gap-8 text-sm`}>
                            <Link 
                                page="Home"
                                selectedPage={selectedPage} 
                                setselectedPage={setselectedPage} 

                            /> 
                            <Link 
                                page="Benefits" 
                                selectedPage={selectedPage} 
                                setselectedPage={setselectedPage}
                            />
                            <Link 
                                page="Our Classes"
                                selectedPage={selectedPage} 
                                setselectedPage={setselectedPage}
                            />
                            <Link
                                page="Contact Us"
                                selectedPage={selectedPage} 
                                setselectedPage={setselectedPage}
                            />
                        </div>

                        <div className={`${flexbetween} gap-8`}>
                            <p>Sign In</p>

                            <ActionButton  
                                setselectedPage={setselectedPage}
                            >
                                Become a Member
                            </ActionButton>
                        </div>
                    </div>
                    ): (
                        <button
                            className="cursor-pointer rounded-full bg-yellow-500 p-2"
                            onClick={()=>setIsMenuToggled(!isMenuToggeLed)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>
                    )}
                </div>
            </div>
        </div>

        {/* Mobile Menu Modal */}
        {!isAboveMediumScreens && isMenuToggeLed && 
        (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-red-100 drop-shadow-xl ">
                {/* Close Icon */}
                <div className="flex  justify-end p-12">
                    <button onClick={()=>setIsMenuToggled(!isMenuToggeLed)}>
                        <XMarkIcon className="cursor-pointer h-6 w-6 text-gray-400"/>
                    </button>
                </div>

                {/* Menu Items */}
                <div className="ml-[33%] flex flex-col gap-10 text-xl">
                    <Link 
                        page="Home"
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage} 

                    /> 
                    <Link 
                        page="Benefits" 
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage}
                    />
                    <Link 
                        page="Our Classes"
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage}
                        />
                    <Link
                        page="Contact Us"
                        selectedPage={selectedPage} 
                        setselectedPage={setselectedPage}
                        />
                </div>

            </div>
        )
        }
  </nav>
  )
} 

export default Navbar;