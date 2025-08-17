"use client";
import React from "react";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { AnimatePresence, motion } from "framer-motion";
import { navigationItems } from "@/constants";
import Link from "next/link";

export default function MobileNav() {
  const { isOpen, close } = useMobileNav();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="lg:hidden fixed top-[15svh] left-0 w-full min-h-[85vh] bg-[#0a1316] z-40"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="wrapper py-8">
            <motion.ul
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    className="text-white text-md tracking-widest uppercase hover:text-orange-500 transition duration-200 block py-2"
                    href={item.link}
                    onClick={() => close()}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
