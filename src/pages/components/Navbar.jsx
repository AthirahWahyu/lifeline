import { IoMdHome } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
         <div className="w-full bg-white h-fit flex py-2 px-6 justify-between drop-shadow-lg">
          <div className="flex">
            <Link className="m-2">Camera</Link>
            <Link className="m-2">Location</Link>
            <Link className="m-2">About</Link>
          </div>
          <div className="py-2 absolute m-auto left-1/2  ">
            <div className="font-semibold text-xl uppercase tracking-[.25em]">
              Lifeline
            </div>
          </div>
          <Link className="flex items-center p-0 m-2 px-6">
            <IoMdHome fontSize="1.75rem" />
            <IoCartOutline fontSize="1.75rem" />
          </Link>
        </div>
        
        </>
    )
}

export default Navbar;