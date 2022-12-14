import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  const handleDropdownClick = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <nav
      className={`w-full fixed py-3 md:py-0 z-50 px-2 2xl:px-0 navbar   ${
        navColor ? "bg-[#3D0687]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1296px] relative z-40 mx-auto flex flex-wrap justify-between items-center">
        <Link href="/">
          <a className="flex items-center pl-2 md:pl-0">
            <Image src="/icon.png" height={45} width={125} alt="logo" />
          </a>
        </Link>

        <div
          className={` w-screen md:block md:w-auto ${
            open
              ? "block absolute -left-2 h-[92vh] z-50 bg-[#5401BF] top-[52px]"
              : "hidden"
          }`}
        >
          <ul className="flex items-start px-4 md:px-0 md:items-center flex-col bg-body rounded-lg md:flex-row lg:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:gap-5">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/schedule", "Schedule"],
            ].map(([url, title]) => (
              <li
                className="md:py-4 xl:py-9"
                key={title}
                onClick={() => setOpen(false)}
              >
                <Link href={url}>
                  <a
                    className="block text-white text-lg text-x py-2 pr-4 md:pl-3  rounded md:bg-transparent hover:text-primary  md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    {title}
                  </a>
                </Link>
              </li>
            ))}

            <li
              onClick={() => setDropdown(!dropdown)}
              className="md:py-4 xl:py-9 navitem"
            >
              <a className=" flex  items-center gap-2 select-none relative cursor-pointer text-white text-lg text-x py-2 pr-4 md:pl-3  rounded md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 ">
                Pages <BsChevronDown />{" "}
              </a>
              <span className="relative">
                <span
                  className={`absolute dropdown bg-[#3F0985] w-40 md:top-4 xl:top-[36px] text-white text-lg ${
                    dropdown ? "flex flex-col" : "hidden"
                  }`}
                >
                  {[
                    ["/speakers", "Speakers"],
                    ["/price", "Price"],
                    ["/gallery", "Gallery"],
                    ["/contact", "Contact Us"],
                  ].map(([url, title]) => (
                    <Link key={title} href={url}>
                      <a
                        onClick={handleDropdownClick}
                        className="py-2 hover:border-l-2 transition-all duration-300 border-[#F112A2] px-4 select-none hover:bg-blue-600"
                      >
                        {title}
                      </a>
                    </Link>
                  ))}
                </span>
              </span>
            </li>
            <li className="md:hidden mt-5" onClick={() => setOpen(false)}>
              <Link href="#pricing">
                <a className="bg-white px-6 py-2 md:px-10 md:py-4 rounded-md font-semibold text-[#F112A2] hover:bg-[#F112A2] hover:text-white duration-300">
                  Book Ticket
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ScrollLink offset={-50} smooth={true} to="pricing">
            <a className="bg-white px-10 py-4 rounded-md cursor-pointer font-semibold text-[#F112A2] hover:bg-[#F112A2] hover:text-white duration-300">
              Book Ticket
            </a>
          </ScrollLink>
        </div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="items-center pr-2 md:pr-0 text-sm text-gray-500 rounded-lg md:hidden  "
        >
          <HiMenu size={40} className="text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
