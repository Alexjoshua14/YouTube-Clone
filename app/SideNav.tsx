"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { MdHomeFilled, MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { GiShorts } from "react-icons/gi";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { TfiDownload } from "react-icons/tfi";

interface MenuItem {
    icon: IconType;
    text: string;
    pathname: string;
}

const MenuItem: Array<MenuItem> = [
    {
        icon: MdHomeFilled,
        text: "Home",
        pathname: "/"
    },
    {
        icon: GiShorts,
        text: "Shorts",
        pathname: "/shorts"
    },
    {
        icon: MdOutlineSubscriptions,
        text: "Subscriptions",
        pathname: "/subscriptions"
    },
    {
        icon: AiOutlineYoutube,
        text: "Originals",
        pathname: "/originals"
    },
    {
        icon: SiYoutubemusic,
        text: "YouTube Music",
        pathname: "/music"
    },
    {
        icon: MdOutlineVideoLibrary,
        text: "Library",
        pathname: "/library"
    },
    {
        icon: TfiDownload,
        text: "Downloads",
        pathname: "/downloads"
    }
];

const SideNav = () => {
  const pathname = usePathname();

  return (
        <div className="p-0.5">
            <div className="flex flex-col items-center gap-1 lg:px-2">
                {MenuItem.map((item, index) => (
                    <Link href={item.pathname} 
                      className={`flex flex-col items-center py-4 w-full h-full rounded-lg 
                                    lg:flex-row lg:p-2 lg:mx-6 lg:gap-5 
                                    hover:bg-zinc-800 cursor-pointer
                                    ${item.pathname == pathname && `bg-zinc-800 hover:bg-zinc-600`}`}>
                        <item.icon size={24} />
                        <span className="text-xs lg:text-sm font-extralight lg:font-normal text-center">{item.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default SideNav;