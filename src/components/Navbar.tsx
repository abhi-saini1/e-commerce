'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { mainLinks } from "@/Links/Link";
import { userLinks } from "@/Links/Link";
import { MdClose } from "react-icons/md";

import { FiMenu } from "react-icons/fi";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import CartIcon from "@/app/(shoescart)/components/ui/CartIcon";
import WishListIcon from "@/app/(wishlist)/components/WishListIcon";
import { motion } from "framer-motion";

interface NavbarProps {
  user: User;
}
const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const mobileHandler = () => {
    setMobileMenu(!openMobileMenu);
  };
  const userMenuHandler = () => {
    setOpenUser(!openUser);
  };
  return (
    <nav
      className={`border-b fixed w-full  z-10 transition-all duration-300 ${
        showNavbar ? "bg-white shadow-md" : ""
      }   `}
    >
      <div className="main-container  flex items-center justify-between py-2  relative">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            className="w-[75px]"
            width={300}
            height={300}
            alt="logo"
          />
        </Link>

        <ul className="flex gap-10 max-md:hidden">
          {mainLinks.map((link, i) => (
            <Link href={link.route} key={i}>
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>

        <div className="flex gap-5 text-xl cursor-pointer items-center">
          <CartIcon />
          <WishListIcon />
          <div className="max-md:hidden" onClick={userMenuHandler}>
            <div className="w-[40px] h-[40px] rounded-full border border-black">
            <Image src='/noavatar.png' className="object-contain rounded-full" width={300} height={300} alt=""/>
            </div>
          </div>
          <div className="md:hidden" onClick={mobileHandler}>
            {openMobileMenu ? <MdClose /> : <FiMenu />}
          </div>
        </div>

        {/* user menu */}
        {openUser && (
          <motion.div
            className="absolute right-0 top-[70px] w-28 bg-white py-10 shadow-md rounded-md text-black max-md:hidden text-center z-10  font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {!user ? (
              <ul>
                <Link onClick={() => setOpenUser(false)} href={"/signin"}>
                  <li>Log In</li>
                </Link>
                <Link onClick={() => setOpenUser(false)} href={"/signup"}>
                  <li>Sign Up</li>
                </Link>
              </ul>
            ) : (
              <motion.ul>
                {userLinks.map((link, i) => (
                  <Link
                    key={i}
                    onClick={() => setOpenUser(false)}
                    href={link.route}
                  >
                    <li>{link.route}</li>
                  </Link>
                ))}
                <li className="cursor-pointer" onClick={() => signOut()}>
                  Sign Out
                </li>
              </motion.ul>
            )}
          </motion.div>
        )}
      </div>

      {/* Mobile Screen */}
      {openMobileMenu && (
        <div className="md:hidden">
          <motion.div
            className="absolute right-5 w-48 bg-gray-800 py-5 shadow-md rounded-md text-white z-[9999] p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col gap-5">
              {mainLinks.map((link, i) => (
                <Link href={link.route} key={i}>
                  <li>{link.label}</li>
                </Link>
              ))}
              {!user ? (
                <>
                  <Link href={"/signin"}>
                    <li>Log In</li>
                  </Link>
                  <Link href={"/signup"}>
                    <li>Sign Up</li>
                  </Link>
                  <div className="w-[40px] h-[40px] rounded-full border border-black">
                    <Image src='/noavatar.png' className="object-contain rounded-full" width={300} height={300} alt=""/>
                  </div>
                </>
              ) : (
                <>
                  {userLinks.map((link, i) => (
                    <Link key={i} href={link.route}>
                      <li>{link.label}</li>
                    </Link>
                  ))}
                  <li className="cursor-pointer" onClick={() => signOut()}>
                    Sign Out
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
