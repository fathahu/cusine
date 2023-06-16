import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
function Header(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="fixed z-10 w-full">
        <div className="bg-[#EB8E78] p-1 "></div>
        <div className="bg-black text-white p-4  ">
          <div className=" py-[15px] relative items-center flex ">
            <div className="flex">
              <div className="text-3xl font-bold">Dhaba</div>
              <div className="absolute mt-1 right-0">
                {toggle ? (
                  <AiOutlineClose
                    onClick={() => setToggle(!toggle)}
                    className=" text-2xl md:hidden block"
                  />
                ) : (
                  <AiOutlineMenu
                    onClick={() => setToggle(!toggle)}
                    className=" text-2xl md:hidden block"
                  />
                )}
              </div>
            </div>
            <div className="absolute right-8 md:right-0 ms-6">
              <div className=" flex items-center md:gap-3">
                <div className="inline-block m-1 ">
                  <button className="border border-[#adabab] p-1  md:ps-5 md:pe-5 rounded-md">
                    <a href="/">Inicia sesión</a>
                  </button>
                </div>
                <div className="inline-block bg-[#EB8E78] rounded-full p-2 md:p-3 m-1 ">
                  <div>
                    <div className="absolute top-0 right-0 px-2 rounded-full bg-white bg-opacity-90 translate-x-2 text-black text-center   ">
                      <span className="">{props.name}</span>
                    </div>
                    <div className=" relative">
                      <a href="/">
                        <AiOutlineShoppingCart />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="hidden md:flex gap-10 ms-24 font-normal">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Menu</a>
              </li>
              <li>
                <a href="/">Offers</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>

            {/* Responsive navbar */}

            <ul
              className={`md:hidden duration-300 w-full p-1 rounded-b-md  text-left fixed bg-black top-[98px] 
        ${toggle ? "left-[0]" : "left-[-100%]"}
        `}
            >
              <li className="p-3">
                <a href="/">Home</a>
              </li>
              <li className="p-3">
                <a href="/">Menu</a>
              </li>
              <li className="p-3">
                <a href="/">Offers</a>
              </li>
              <li className="p-3">
                <a href="/">About</a>
              </li>
            </ul>
            {/* Responsive navbar ends */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
