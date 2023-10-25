'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidenav.module.css"

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
        className={`fixed flex flex-col z-40 left-0 rounded-r-[39px] top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-30  w-59 bg-[#26CCA9] lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 p-4 transition-all duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-72"}`}
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
                className="flex mt-4 items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                      <path d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z" stroke="none" fill="#ffffff"></path>
                      <path d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z" stroke="none" fill="#ffffff"></path>
                      <path d="M18.6695 13.4297H16.7695C14.5895 13.4297 13.4395 14.5797 13.4395 16.7597V18.6597C13.4395 20.8397 14.5895 21.9897 16.7695 21.9897H18.6695C20.8495 21.9897 21.9995 20.8397 21.9995 18.6597V16.7597C21.9995 14.5797 20.8495 13.4297 18.6695 13.4297Z" stroke="none" fill="#ffffff"></path>
                      <path d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z" stroke="none" fill="#ffffff"></path>
                    </g>
                  </svg>

                  <span
                    className={`${sidebarExpanded ? "lg:hidden opacity-0 ml-0" : "opacity-100 ml-3 block"}ml-3 whitespace-nowrap `}>
                    <h1 className={styles.menu_text}>MENU</h1>
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/exames"
                className="flex mt-4 items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M8.28906 6.29C7.86906 6.29 7.53906 5.95 7.53906 5.54V2.75C7.53906 2.34 7.86906 2 8.28906 2C8.70906 2 9.03906 2.34 9.03906 2.75V5.53C9.03906 5.95 8.70906 6.29 8.28906 6.29Z" fill="#ffffff" stroke="none"></path>
                      <path d="M15.7109 6.29C15.2909 6.29 14.9609 5.95 14.9609 5.54V2.75C14.9609 2.33 15.3009 2 15.7109 2C16.1309 2 16.4609 2.34 16.4609 2.75V5.53C16.4609 5.95 16.1309 6.29 15.7109 6.29Z" fill="#ffffff" stroke="none"></path>
                      <path d="M19.57 4.5C18.91 4.01 17.96 4.48 17.96 5.31V5.41C17.96 6.58 17.12 7.66 15.95 7.78C14.6 7.92 13.46 6.86 13.46 5.54V4.5C13.46 3.95 13.01 3.5 12.46 3.5H11.54C10.99 3.5 10.54 3.95 10.54 4.5V5.54C10.54 6.33 10.13 7.03 9.51 7.42C9.42 7.48 9.32 7.53 9.22 7.58C9.13 7.63 9.03 7.67 8.92 7.7C8.8 7.74 8.67 7.77 8.53 7.78C8.37 7.8 8.21 7.8 8.05 7.78C7.91 7.77 7.78 7.74 7.66 7.7C7.56 7.67 7.46 7.63 7.36 7.58C7.26 7.53 7.16 7.48 7.07 7.42C6.44 6.98 6.04 6.22 6.04 5.41V5.31C6.04 4.54 5.22 4.08 4.57 4.41C4.56 4.42 4.55 4.42 4.54 4.43C4.5 4.45 4.47 4.47 4.43 4.5C4.4 4.53 4.36 4.55 4.33 4.58C4.05 4.8 3.8 5.05 3.59 5.32C3.48 5.44 3.39 5.57 3.31 5.7C3.3 5.71 3.29 5.72 3.28 5.74C3.19 5.87 3.11 6.02 3.04 6.16C3.02 6.18 3.01 6.19 3.01 6.21C2.95 6.33 2.89 6.45 2.85 6.58C2.82 6.63 2.81 6.67 2.79 6.72C2.73 6.87 2.69 7.02 2.65 7.17C2.61 7.31 2.58 7.46 2.56 7.61C2.54 7.72 2.53 7.83 2.52 7.95C2.51 8.09 2.5 8.23 2.5 8.37V17.13C2.5 19.82 4.68 22 7.37 22H16.63C19.32 22 21.5 19.82 21.5 17.13V8.37C21.5 6.78 20.74 5.39 19.57 4.5ZM12 16.25H10.31V18C10.31 18.41 9.97 18.75 9.56 18.75C9.14 18.75 8.81 18.41 8.81 18V16.25H7C6.59 16.25 6.25 15.91 6.25 15.5C6.25 15.09 6.59 14.75 7 14.75H8.81V13C8.81 12.59 9.14 12.25 9.56 12.25C9.97 12.25 10.31 12.59 10.31 13V14.75H12C12.41 14.75 12.75 15.09 12.75 15.5C12.75 15.91 12.41 16.25 12 16.25Z" fill="#ffffff" stroke="none"></path>
                    </g>
                  </svg>

                  <span
                    className={`${sidebarExpanded ? "lg:hidden opacity-0 ml-0" : "opacity-100 ml-3 block"}ml-3 whitespace-nowrap `}>
                    <h1 className={styles.menu_text}>EXAMES</h1>
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
