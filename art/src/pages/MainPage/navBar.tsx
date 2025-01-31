// import React from "react";
// import { navLinks } from "./link";
// import Link from "next/link";
// import Search from "./search";
// import styles from "../../styles/principale.module.css"

// const NavBar=()=>{
//     return(
//         <div>
//     <header>
//       <nav className={styles.mainNavBar}>
//         {navLinks.map((e, index) => {
//           return (
//             <ul>
//               <Link href={e.path}>
//                 <li key={index}><a>{e.name}</a></li>
//               </Link>
//             </ul>
//           );
//         })}
//         <Search/>
//       </nav>
//     </header>
    
//         </div>
//     )
// }
// export default NavBar;

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Search from "./search";


export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/MainPage">
                <h2 className="text-2xl text-white font-bold">Artfolio.tn</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/MainPage">
                    <p>Home</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/MainPage/art/art">
                    <p>Art Gallery</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/MainPage/shop/shop">
                    <p>Shop</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/MainPage/auctions/auctions">
                    <p>Auctions</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/MainPage/aboutUs">
                    <p>About US</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/MainPage/contactUs">
                    <p>Contact US</p>
                  </Link>
                </li>
                
                <li><Search/></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="flex justify-center items-center mt-8">
        <h1 className="text-2xl font-bold text-purple-500">
          Create Responsive Navbar Menu in Next js with Tailwind CSS
        </h1>
      </div> */}
    </div>
  );
}

