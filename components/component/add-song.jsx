'use client'

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { useState } from "react";

export function AddSong() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");

  const addSong = async () => {
    if (!username) {
      console.error("Username is required.");
      return;
    }

    const { data, error } = await supabase
      .from("songs")
      .insert({ title, artist, lyrics, image, username });

    if (error) {
      console.error("Error inserting song:", error.message);
    } else {
      console.log("Song added successfully");
      setTitle("");
      setArtist("");
      setLyrics("");
      setImage("");
    }
  };

  return (
    <form onSubmit={addSong} className="mx-auto max-w-md space-y-6 py-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Add a New Song</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form to add a new song to library.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter song title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="artist">Artist</Label>
          <Input
            id="artist"
            placeholder="Enter artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lyrics">Lyrics</Label>
          <Textarea
            className="min-h-[80px]"
            id="lyrics"
            placeholder="Enter song lyrics"
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <Button className="w-full" type="submit">
          Add Song
        </Button>
      </div>
    </form>
  );
}
