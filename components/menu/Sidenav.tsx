'use client'

// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiCategory } from "react-icons/bs"


// Define the Sidenav component
export default function Sidenav({ sidebarOpen, setSidebarOpen }: any) {
  // Define state for sidebar expansion
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Create a reference to the sidebar element
  const sidebar = useRef(null);

  // Effect to add or remove a class to the body element based on sidebar expansion
  useEffect(() => {
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <>
      {/* Sidebar backdrop (visible on mobile only) */}
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed inset-0 border-r border-gray-200 sm:translate-x-0 bg-opacity-60 z-40 lg:hidden lg:z-auto transition-opacity duration-200 `}
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`fixed flex flex-col z-40 left-0 rounded-r-[39px] top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-64  w-72 bg-[#26CCA9] lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 p-4 transition-all duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-72"}`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between pr-3 sm:px-2">
          {/* Sidebar Logo */}
          <Link href="/">
            <span
              className={`${sidebarExpanded ? "lg:hidden" : "block"
                }  welcome-step text-2xl font-medium tracking-tighter text-black focus:outline-none focus:ring whitespace-nowrap cursor-pointer`}
            >
              {/*<Image
                className="mt-2 mb-8 h-100 w-32"
                src="/openai.png"
                height={32}
                width={300}
                alt="logo"
              />*/}

            </span>
          </Link>

          {/* Sidebar Icon (Collapsed) */}
          <Link href="/">
            {/* <Image
              className={`${
                !sidebarExpanded ? "lg:hidden" : "block"
              } mt-1 mb-8 h-8 w-8`}
              src="/openai-icon.png"
              height={100}
              width={100}
              alt="logo"
            /> */}

          </Link>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {/*<p
            className={`${
              sidebarExpanded ? "lg:hidden" : "block"
            } px-2 text-xs font-base text-gray-400 uppercase`}
          >
            Actions
          </p>*/}

          <ul className="space-y-2">
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span
                    className={`${sidebarExpanded? "lg:hidden opacity-0 ml-0" : "opacity-100 ml-3 block"}ml-3 whitespace-nowrap `}>
                    MENU
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 lg:inline-flex  mt-auto ">
          <div className="flex-1" />
          <div className="px-3 py-2 justify-end">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className={`w-6 h-6 hidden lg:block fill-current ${!sidebarExpanded ? "rotate-0" : "rotate-180"
                  }`}
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
