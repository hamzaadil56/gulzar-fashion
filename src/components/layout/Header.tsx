"use client";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import Logo from "@/assets/logos/gulzar-fashion-logo.png";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";
import { useState, useRef, useEffect } from "react";
import Cart from "./Cart";
import { useCartStore } from "@/state/cartState";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const linksRef = useRef<HTMLUListElement>(null);
  const linksRefContainer = useRef<HTMLDivElement>(null);
  const [isCartOpen, setCartOpen] = useState(false);

  const { totalQuantity } = useCartStore();

  function cartClose() {
    setCartOpen(false);
  }
  // useEffect(() => {
  //   const linksHeight = linksRef.current?.getBoundingClientRect().height;
  //   if (isOpen) {
  //     linksRefContainer.current!.style.height = `${linksHeight}px`;
  //   } else {
  //     linksRefContainer.current!.style.height = `0px`;
  //   }
  // }, [isOpen]);
  return (
    // <header
    //   style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    // >
    //   <h1>Header</h1>
    //   <SignedIn>
    //     {/* Mount the UserButton component */}
    //     <UserButton />
    //   </SignedIn>
    //   <SignedOut>
    //     {/* Signed out users get sign in button */}
    //     <SignInButton />
    //   </SignedOut>
    // </header>

    <header className="flex w-full flex-wrap max-w-7xl  justify-center items-center m-auto px-5 md:px-10  ">
      <div className="md:hidden flex-1">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${styles.menu_btn} `}
        >
          <div
            className={`${styles.menu_btn__burger} ${
              isOpen ? styles.open : ""
            } md:hidden`}
          ></div>
        </div>
      </div>

      <ul
        ref={linksRef}
        className={`${
          isOpen ? "translate-x-[0%]" : " -translate-x-[100%]"
        } list-none   md:translate-x-0 divide-y md:divide-none transition-all  order-last md:order-none w-full order-last md:order-none  md:flex-1 lg:w-1/4 md:flex items-center justify-between `}
      >
        <li className="md:text-sm py-4 md:p-0   text-md ">
          <Link href="#">New Arrivals</Link>
        </li>
        <li className="md:text-sm py-4 md:p-0   text-md ">
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="md:text-sm py-4 md:p-0   text-md ">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="md:text-sm md:hidden py-4 md:p-0 text-md">
          <Link href="/account">Account</Link>
        </li>
      </ul>

      <div id="logo" className="md:mx-20">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" width={75} height={75} />
        </Link>
      </div>
      <ul className="list-none flex-1 flex divide-y md:divide-none items-center justify-end md:justify-between lg:w-1/4 sm:w-2/5">
        <li className="text-sm ">
          <Link className="flex  " href="#">
            <p className="hidden md:block">Search</p>
            <Search strokeWidth={2} size={20} className=" mx-2" />
          </Link>
        </li>
        <li className="text-sm hidden md:block">
          <Link href="/account">Account</Link>
        </li>
        <li className="text-sm relative inline-flex">
          {isCartOpen ? <Cart cartClose={cartClose} /> : null}

          <div
            onClick={() => setCartOpen(true)}
            className="flex cursor-pointer items-center"
          >
            <p className="hidden md:block">Bag</p>
            <div className="relative ">
              <ShoppingBag className="mx-2  " color="white" fill="black" />

              <Badge className="absolute bottom-2 right-0">
                {totalQuantity}
              </Badge>
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
