"use client";
import Image from "next/image";
import { useState } from "react";

export default function PetImage() {
  function imageClick() {
    console.log("hehe");
  }

  return (
    <Image
      src="/gible.png"
      width={250}
      height={250}
      alt="pic"
      onClick={imageClick}
    />
  );
}
