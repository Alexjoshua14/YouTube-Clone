import { BsYoutube, BsBell } from 'react-icons/bs';
import { CiMenuBurger } from 'react-icons/ci';
import { GoSearch } from 'react-icons/go';
import { IoMdMic } from 'react-icons/io';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { GiNinjaVelociraptor } from 'react-icons/gi';

const TopNav = () => {
    return (
        <div className="flex justify-between px-6 py-1.5">
            
            <div className="flex items-center gap-6">
                <CiMenuBurger size={21} />
                <div className="flex items-center gap-1">
                    <BsYoutube size={30} className="text-red-500 " />
                    <span className="text-l">Premium</span>
                </div>
            </div>

            <div className="hidden sm:flex gap-4 items-center min-w-[200px] w-[40vw] lg:w-[50vw] ">
                <div className="flex w-full">
                    <input type="text" placeholder="Search" className="w-full border-[1px] border-zinc-700 bg-zinc-900 px-4 py-2 rounded-l-full placeholder:text-zinc-500 focus:outline-none focus:border-blue-700" />
                    <div className="flex items-center border-[1px] border-zinc-700 bg-zinc-800 rounded-r-full border-l-0 px-4 py-2 cursor-pointer">
                        <GoSearch size={18} />
                    </div>
                </div>
                <div className="bg-zinc-800 p-2.5 rounded-full hover:bg-zinc-700 cursor-pointer">
                    <IoMdMic size={22} />
                </div>
            </div>

            <div className="flex gap-1 items-center">
                <div className="sm:hidden hover:bg-zinc-800 rounded-full border-l-0 p-2.5 cursor-pointer">
                        <GoSearch size={18} />
                </div>
                <div className="flex md:gap-3">
                    <div className="sm:hidden bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 cursor-pointer">
                        <IoMdMic size={22} />
                    </div>

                    <div className="p-1.5 rounded-full hover:bg-zinc-800 cursor-pointer">
                        <AiOutlineVideoCameraAdd size={25} />
                    </div>
                    <div className="p-1.5 rounded-full hover:bg-zinc-800 cursor-pointer">
                        <BsBell size={24} />
                    </div>
                </div>
                <div className="p-1.5 mx-2 rounded-full bg-blue-800 hover:bg-blue-700 cursor-pointer">
                    <GiNinjaVelociraptor size={22} />
                </div>
            </div>

        </div>
    )
};

export default TopNav;