"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Logo,
  Navigation,
  HeaderActions,
  MobileNav,
  Wrapper,
} from "@/components/index";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.2;
      setIsScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-2 left-2 right-2 h-[12vh] flex items-center z-50 transition-all duration-300
        ${
          isScrolled
            ? "backdrop-blur-md border border-white/20 rounded-xl shadow-lg"
            : ""
        }
      `}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.15)" // light glass
            : "rgba(255, 255, 255, 0)", // fully transparent before scroll
        }}
        transition={{ duration: 0.3 }}
      >
        <Wrapper>
          <div className="flex items-center justify-between">
            <Logo />
            <Navigation />
            <HeaderActions />
            <MobileNav />
          </div>
        </Wrapper>
      </motion.header>

      {/* <motion.header
        className="fixed top-0 left-0 right-0 h-[15vh] flex items-center z-50 transition-colors duration-300"
        animate={{
          backgroundColor: isScrolled ? "rgba(15, 44, 38, 0.4)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
      >
        <Wrapper>
          <div className="flex items-center justify-between">
            <Logo />
            <Navigation />
            <HeaderActions />
            <MobileNav />
          </div>
        </Wrapper>
      </motion.header> */}

      {/* <motion.header
        className={`fixed top-0 left-0 right-0 h-[15vh] flex items-center z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md border-b border-white/10" : ""
        }`}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(15, 44, 38, 0.4)"
            : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <Wrapper>
          <div className="flex items-center justify-between">
            <Logo />
            <Navigation />
            <HeaderActions />
            <MobileNav />
          </div>
        </Wrapper>
      </motion.header> */}
    </>
  );
}
