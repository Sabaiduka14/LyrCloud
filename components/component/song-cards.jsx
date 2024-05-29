import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";

export function SongCards({ songs }) {
  return (
    <>
      {songs.map((song, idx) => (
        <Card
          key={idx}
          className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-[200px_1fr] gap-6">
            <Image
              alt="Album Artwork"
              className="rounded-lg"
              height="200"
              src={song.image}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold">{song.title}</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {song.artist}
                </p>
              </div>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="line-clamp-3">{song.lyrics}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 dark:text-gray-400">
                  @{song.username}
                </p>
                <Button
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  size="icon"
                  variant="ghost"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                  <span className="sr-only">Go Back</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}
