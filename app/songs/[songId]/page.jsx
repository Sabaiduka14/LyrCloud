'use client'

import { SongCard } from "@/components/component/song-card";
import { supabase } from "@/lib/supabase/client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [song, setSong] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    async function fetchSong() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("songs")
          .select("*")
          .eq("id", params.songId)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setSong(data);
        }
      } catch (error) {
        console.error("Error fetching song:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSong();
  }, [params.songId]);

  return (
   <div className="w-full h-auto py-2 px-3 md:py-8 flex items-center justify-center">
    <SongCard song={song}/>
   </div>
  );
}
