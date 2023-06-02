"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className={`navbar fixed top-0 z-30 w-full transition-all`}>
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto ">
          <Link
            href="/"
            className="secondaryFont flex items-center font-display text-2xl font-bold"
          >
            Jovenova.org
          </Link>
        </div>
      </div>
    </>
  );
}
