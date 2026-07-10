"use client"

import Image from "next/image";
import { Button } from "./ui/button";
// import Link from 'next/link';
import { Archivo_Black } from "next/font/google";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});
const Navbar = () => {

    return (
    <nav className=" sticky top-0 left-0 right-0 z-50 p-0.1 md:p-0.1 shadow-md bg-gray-900 text-white overflow-hidden">
      <div className= {`${archivo.className} ml-8 container  font-2xl flex  md:flex-row  items-center gap-6`}>
        <Image src="/gif/logo.gif" alt="BMW logo" width={40} height={40} className="mr-10"/>
        {/* <a href="#" className="text-xl font-bold mb-4 md:mb-0">
            bmw 
        </a> */}

        <Button>
            RACING
        </Button>
        <Button>
            SPORTS CAR
        </Button>
        <Button>
            COLLECTION
        </Button>
        <Button>
            EXPERIRNCES
        </Button>
        <Button>
            ABOUT US
        </Button>
    
        
      <Button className="ml-180">
        <Image src="/gif/nav1.gif" alt="" width={55} height={55} />
      </Button>
      </div>
    </nav>
  );
}

export default Navbar;