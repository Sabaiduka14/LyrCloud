import React from "react";
import { Button } from "./ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { AddSong } from "./component/add-song";

export default function DashNavbar() {
  return (
    <div className="grid grid-cols-6 items-center py-5 px-7 w-full">
      <Link className="col-span-3 md:col-span-1" href="/">
        <h1 className="font-bold text-2xl col-span-3 md:col-span-1 md:text-4xl">LYR cloud</h1>
      </Link>
      <div className="bg-white hidden md:flex md:col-span-4 items-center gap-2">
        <Input
          className="bg-transparent w-full"
          placeholder="Search for songs"
        />
        <Button variant="ghost">
          <Search />
        </Button>
      </div>
      <div className="col-span-3 md:col-span-1 md:ml-12">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-1 w-full">
              <Plus />
              Add Song
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AddSong />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
