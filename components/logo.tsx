import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoSrc from "@/public/images/main_logo.png";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <Image src={LogoSrc} alt={"logo"} height={60} width={60} />
      </Link>
    </>
  );
}
