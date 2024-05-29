import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function SongCard({ song }) {
  return (
    <Card className="w-full max-w-md">
      <Image
        alt="Song Cover Art"
        className="h-[300px] w-full rounded-t-lg object-cover"
        height="200"
        src={song.image}
        style={{
          aspectRatio: "400/200",
          objectFit: "cover",
        }}
        width="400"
      />
      <CardContent className="p-4 space-y-2">
        <h3 className="text-xl font-bold">{song.title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{song.lyrics}</p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          - @{song.username}
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Link href="/dashboard">
          <Button className="w-[342px] md:w-[415px] flex" variant="outline">
            Go Back
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
