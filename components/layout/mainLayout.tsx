import React, { useState } from "react";
import { MainLayoutProps } from "../../@types";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Sidebar from "./sidebar";
import HarmburgerIcon from "../icons/harmburger";
import Logo from "assets/wetindeysup.png";
import NavLinks from "./navLinks";
import { LogoutIcon } from "@/public/assets/icon/sideBarIcons";
import Image from "next/image";
import Avatar from "assets/images/avatar.png";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import Link from "next/link";


type Anchor = "left" | "top" | "bottom" | "right";

function MainLayout({ children, title, href, showSearchInput }: MainLayoutProps) {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <div className="md:hidden lg:hidden bg-primary min-h-[445px]">
        <div className="px-6 pt-12 flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-[#f9f9fb] text-4xl font-bold">{title}</h1>
            <div className="flex items-center">
              <Link href={href}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_4_1613)">
                    <path d="M16 6.6665V25.3332" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66669 16H25.3334" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4_1613">
                      <rect width="32" height="32" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Button onClick={toggleDrawer("left", true)} sx={{ }}>
                <HarmburgerIcon />
              </Button>
            </div>
          </div>
          {showSearchInput && (
            <div className="w-full flex justify-center">
              <div className="w-80 h-14 relative items-center">
                <input
                  placeholder="Find an event"
                  className="h-full md:bg-none bg-white w-full md:border border-black/40 rounded-full p-2 pl-16 text-primary md:placeholder:text-brand-gray-600 placeholder:text-[#3D3D3D] focus:outline-none bg-transparent"
                />
                <div className="absolute left-5 top-5">
                  <SearchIcon />
                </div>
              </div>
            </div>
          )}
        </div>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <aside className="w-[320px] bg-primary h-full flex flex-col justify-between pb-8 rounded-r-3xl">
            <div className="w-full">
              {/* Icon */}
              <div className="inline-flex items-center gap-2 mt-6 mx-14 mb-16">
                <Image
                  src={Logo}
                  alt="logo"
                  width={201}
                  height={54}
                  className="w-auto h-auto"
                />
                <h3 className="text-brand-gray-100 text-lg font-bold">WetinDeySup</h3>
              </div>
              <div className="flex gap-2 items-center ml-10 mb-5">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src={Avatar}
                    alt="logo"
                    width={47}
                    height={47}
                    className="rounded-full"
                  />
                </div>
                <p className="font-semibold text-lg text-white">Salome</p>
              </div>

              <NavLinks />
            </div>

            <button className="flex gap-3 items-center text-white/50 font-medium px-12">
              <LogoutIcon />
              <span>Log Out</span>
            </button>
          </aside>
        </Drawer>
      </div>
      <div className="w-full h-screen overflow-hidden flex">
        <Sidebar />
        <main className="flex-grow h-full overflow-y-auto px-10 pb-10 bg-brand-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
