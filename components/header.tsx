import React from "react";
import Avatar from "assets/images/avatar.png";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import Image from "next/image";
import { HeaderProps } from "@/@types";

export default function Header({ title, info }: HeaderProps) {
  return (
    <header className="min-w-full hidden md:flex justify-between h-max sticky top-0 bg-brand-gray-100 z-20 py-10">
      {/* Title section */}
      <div className="hidden md:block">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-brand-gray-400 font-medium">{info}</p>
      </div>

      {/* Search */}
      <div className="w-80 h-14 relative items-center hidden md:block">
        <input
          placeholder="Find an event"
          className="h-full w-full border border-black/40 rounded-2xl p-2 pl-16 text-primary placeholder:text-brand-gray-600 focus:outline-none bg-transparent"
        />
        <div className="absolute left-5 top-5">
          <SearchIcon />
        </div>
      </div>

      {/* Profile */}
      <div className="hidden md:flex gap-2 items-center ">
        <div className="rounded-full overflow-hidden">
          <Image
            src={Avatar}
            alt="logo"
            width={47}
            height={47}
            className="rounded-full"
          />
        </div>
        <p className="font-semibold text-lg">Salome</p>
      </div>
    </header>
  );
}
