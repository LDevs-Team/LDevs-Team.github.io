"use client"

import { Card } from "../Card";
import Image from "next/image";
import {
  faPalette,
  faWrench,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";


export default function Home() {
  return (
    <main className="p-5 text-neutral-200">
      <ul className="flex flex-row place-items-center">
        <Image
          className="rounded-full"
          src="/logo.png"
          alt="LDevs Logo"
          width={50}
          height={50}
        />
        <h1 className="p-5 text-2xl font-semibold">
          L
          <span className="m-1 px-1 bg-gradient-to-r overflow-hidden rounded from-indigo-500 to-blue-500">
            Devs
          </span>
        </h1>
      </ul>
      <div className="flex min-w-full min-h-full justify-center justify-items-center">
        <h1 className="text-5xl font-bold content-center items-center">
          Building software for{" "}
          <span className="bg-gradient-to-r text-transparent text-6xl bg-clip-text from-indigo-500 via-purple-500 to-pink-600">
            tomorrow
          </span>
        </h1>
      </div>

      <div className="gradient-radial grid min-w-full justify-center pt-8 mb-0 pb-0 content-center">
        <h1 className="text-4xl font-semibold content-center justify-center">
          Our products
        </h1>
      </div>
      <div className="flex justify-center fle-wrap m-4">
        <Card
          title="WallpaperChanger"
          description="Automatically changes windows wallpaper by chosing from a specified folder."
          icon={faPalette}
          githubUrl="https://github.com/LDevs-Team/WallpaperChanger"
        />
        <Card
          title="DiSH"
          description="The next generation of Remote Access software, using just a Discord Bot. Its full name is DiscordSHell"
          icon={faWrench}
          githubUrl="https://github.com/LDevs-Team/DiSH"
        />
        <Card
          title="Pak"
          description="The next generation of package managers. It offers a CLI and an embeddable package for any python program."
          icon={faBoxOpen}
          githubUrl="https://github.com/LDevs-Team/Pak"
        />
      </div>
    </main>
  );
}
