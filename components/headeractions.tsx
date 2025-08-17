"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { Button } from "./ui/button";

export default function HeaderActions() {
  const { isOpen, toggle } = useMobileNav();
  return (
    <div className="flex items-center gap-6">
      {/* Styled Button */}
      <Button className="hidden lg:block" size={"lg"}>
        Connect
      </Button>
      {/* End of Styled Button */}

      <button
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="lg:hidden z-50 relative"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <HiX className="size-8 text-white" />
          ) : (
            <HiMenu className="size-8 text-white" />
          )}
        </motion.div>
      </button>
    </div>
  );
}
