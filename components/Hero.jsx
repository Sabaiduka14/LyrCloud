import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full flex px-4 -mt-16 items-center justify-center flex-col h-screen">
      <h1 className="max-w-2xl text-center mx-auto text-3xl md:text-5xl font-semibold my-2">
        Find songs, lyrics, artists, musicians or even your self with more that
        million users
      </h1>
      <Link href="/dashboard">
        <Button className="my-4 w-full md:w-[400px]">Start Today</Button>
      </Link>
    </div>
  );
}
