"use client";
import React from "react";
import { navigationItems } from "@/constants/index";
import Link from "next/link";
import { useActivePath } from "../app/helper";

type navigationItems = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export default function Navigation() {
  const checkActivePath = useActivePath();
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center space-x-8 uppercase">
        {navigationItems.map((item) => (
          <li key={item.label}>
            <Link
              className={
                checkActivePath(item.link)
                  ? "text-brand font-bold"
                  : "text-white font-semibold"
              }
              href={item.link}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
