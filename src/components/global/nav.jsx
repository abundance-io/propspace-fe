import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useState } from "react";

export const Nav = () => {
  let isMobile = useMediaQuery("(max-width: 768px)");
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const navLinks = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Features",
      link: "/#features",
    },
    {
      name: "FAQ",
      link: "/#faq",
    },
    {
      name: "Blog",
      link: "/#blog",
    },
  ];

  const desktopMenu = (
    <nav className="font-body fixed z-[1000] grid w-full grid-cols-3 items-center bg-black px-[32px] py-[24px] text-sm text-white">
      <img src={logo} alt="logo icon" width={"20px"} />

      <ul className="flex items-center gap-8 place-self-center pl-10">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.link} className="hover:text-mustard">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="space-x-2 justify-self-end">
        <Link
          to="login"
          //zele(scrum mommy btw) was here hhhaahaha, i don't' know how to make a comment lol
          // this is another comment
          // gosh i love typing on this keyboard so much
          // i am actually so accurate with it
          // and my hands no the positions so well
          // although i do find myself double tapping some of the keys
          className="hover:bg-mustard rounded-xl bg-white px-[16px] py-3 text-sm font-semibold text-black hover:text-black"
        >
          Log in
        </Link>
        <Link
          to="register"
          className="hover:bg-mustard hover:border-mustard rounded-xl border-[1px] border-white px-[16px] py-3 text-sm font-semibold text-white hover:text-black"
        >
          Create free account
        </Link>
      </div>
    </nav>
  );

  const mobileMenu = (
    <nav className="fixed z-[1000] flex w-full items-center justify-between bg-black px-[32px] py-[20px] text-sm text-white">
      <img src={logo} alt="logo icon" width={"20px"} />
      <div
        className={`${showMenu ? "left-0 opacity-100" : "left-[200%] opacity-0"} absolute top-0 h-screen w-full bg-black bg-opacity-50 backdrop-blur-sm transition-all delay-300 duration-300 ease-in-out`}
      >
        <div
          className={`${showMenu ? "right-0" : "right-[-100%]"} absolute top-0 flex h-full w-3/5 flex-col justify-between bg-black p-8 text-3xl text-white transition-all duration-300 ease-in-out`}
        >
          <button onClick={handleShowMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name} onClick={handleShowMenu}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>

          <span className="space-y-2">
            <Link
              to="login"
              className="hover:bg-mustard flex justify-center rounded-xl bg-white px-[16px] py-3 text-xs font-medium text-black"
            >
              Log in
            </Link>
            <Link
              to="register"
              className="hover:bg-mustard hover:border-mustard flex justify-center rounded-xl border-[1px] border-white px-[16px] py-3 text-xs font-medium text-white hover:text-black"
            >
              Create free account
            </Link>
          </span>
        </div>
      </div>
      <button onClick={handleShowMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
    </nav>
  );

  return <>{isMobile ? mobileMenu : desktopMenu}</>;
};
