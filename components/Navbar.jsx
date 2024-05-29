import React from "react";
import { Button } from "./ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex shadow-sm border-b justify-between items-center px-6 py-4">
      <h1 className="font-bold text-xl md:text-3xl">LYR cloud</h1>
      <Link href="/dashboard">
        <Button className="flex gap-1 items-center">
          Start Now
          <ArrowBigRight />
        </Button>
      </Link>
    </div>
  );
}
