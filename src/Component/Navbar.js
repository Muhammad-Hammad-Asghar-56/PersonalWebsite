import React from "react";
import { mhLogo } from "../asserts/index";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";

const Navbar = () => {
  const context = useContext(ModeContext);
  const { mode, toggleMode } = context;
  const paths = [
    { text: "Home", path: "#" },
    { text: "About", path: "#" },
    { text: "Skills", path: "#" },
    { text: "Service", path: "#" },
  ];
  const darkMode={background:"linear-gradient(to bottom, #FFB703,#0D1B2A)",color:"white" }
    // #0D1B2A)"}
  
  return (
    <nav
      class={`flex items-center justify-between p-6 lg:px-8`}
      aria-label="Global"
      style={mode==="dark"? darkMode:{}}
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class={`h-10 border-2 rounded-3xl border-black w-auto bg-white`}
            src={mhLogo}
            alt=""
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        {paths.map((item, index) => (
          <a
            href={item.path}
            key={index}
            class="text-sm font-semibold leading-6"
          >
            {item.text}
          </a>
        ))}
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onChange={(e) => {
              toggleMode();
            }}
            value=""
            class="sr-only peer"
          />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
