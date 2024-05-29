"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { supabase } from "@/lib/supabase/client";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Cards() {
  const [songs, setSongs] = useState([]);
  const fetchData = async () => {
    const { data, error } = await supabase.from("songs").select("*");

    if (error) {
      console.log(error);
    }
    if (data) {
      setSongs(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {songs.map((song, idx) => (
        <Card key={idx} className="h-auto my-2">
          <Image
            alt="Artist"
            className="rounded-t-lg bg-cover w-full h-[300px] object-cover"
            height={300}
            src={song.image}
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width={300}
          />
          <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-bold">{song.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{song.artist}</p>
            <p className="text-gray-500">Uploaded By: {song.username}</p>
            <p className="line-clamp-3">{song.lyrics}</p>
            <Link href={`/songs/${song.id}`}><Button className="flex mt-6 w-full">See More</Button></Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
