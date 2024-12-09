"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import motion from "framer-motion";

const Navigation = () => {
  const MenuLayout = `flex items-center p-1 w-full my-1 h-16 rounded-xl hover:border hover:bg-BunnyOrange/20 font-semibold text-gray-500 transition-colors duration-300 ease-in-out`;
  const SelectMenu = `flex items-center p-1 w-full my-1 h-16 rounded-xl bg-BunnyOrange/10 text-BunnyOrange font-semibold border-2 border-BunnyOrange transition-transform duration-300 ease-in-out`;
  const Line = "bg-gray-200 h-0.5 w-[230px] my-5";
  const ImageProp =
    "object-contain mx-3 transition-transform duration-300 ease-in-out transform hover:scale-105";
  const pathname = usePathname();

  const [Nav, setNav] = useState(true);

  const NavOn = () => {
    setNav((prev) => !prev);
  };

  return (
    <>
      {pathname === "/login" ? (
        <></>
      ) : (
        <div
          className={`flex flex-col ${Nav ? "w-[280px]" : "w-0"} min-h-screen`}
        >
          {Nav ? (
            <button
              className="left-[240px] top-[50%] fixed border p-1 border-l-0 bg-gray-50 rounded-r-xl hover:bg-BunnyOrange/20"
              onClick={() => NavOn()}
            >
              <Image
                src="/Icon/sideclose.svg"
                alt="sidebar Icon"
                width={10}
                height={10}
                className={ImageProp}
              />
            </button>
          ) : (
            <button
              className="left-[-10px] top-[50%] fixed border p-1 border-l-0 bg-gray-50 rounded-r-xl hover:bg-BunnyOrange/20"
              onClick={() => NavOn()}
            >
              <Image
                src="/Icon/sideopen.svg"
                alt="sidebar Icon"
                width={10}
                height={10}
                className={ImageProp}
              />
            </button>
          )}
          {Nav && (
            <section className="flex flex-col items-center w-[250px] bg-gray-50 p-5 shadow-xl h-full fixed overflow-y-auto overflow-x-hidden">
              <header className="text-3xl font-bold mb-5 text-BunnyOrange">
                DASH
              </header>
              <div className="flex border h-11 p-1 rounded-xl w-full bg-white border-gray-300">
                <Image
                  src="/Icon/search.svg"
                  alt="search Icon"
                  width={30}
                  height={30}
                  className={ImageProp}
                />{" "}
                <input
                  placeholder="Search"
                  className="outline-none w-[150px]"
                />
              </div>
              <div>
                <div className={Line} />
                <Link href="/">
                  <div className={pathname === "/" ? SelectMenu : MenuLayout}>
                    <Image
                      src="/Icon/Dashboard.svg"
                      alt="Dashboard Icon"
                      width={30}
                      height={30}
                      className={ImageProp}
                    />
                    대시보드
                  </div>
                </Link>
                <Link href="/user">
                  <div
                    className={pathname === "/user" ? SelectMenu : MenuLayout}
                  >
                    <Image
                      src="/Icon/User.svg"
                      alt="User Icon"
                      width={30}
                      height={30}
                      className={ImageProp}
                    />{" "}
                    고객관리
                  </div>
                </Link>
                <Link href="/store">
                  <div
                    className={pathname === "/store" ? SelectMenu : MenuLayout}
                  >
                    <Image
                      src="/Icon/shop.svg"
                      alt="shop Icon"
                      width={30}
                      height={30}
                      className={ImageProp}
                    />{" "}
                    가게관리
                  </div>
                </Link>
                <Link href="/coupon">
                  <div
                    className={pathname === "/coupon" ? SelectMenu : MenuLayout}
                  >
                    <Image
                      src="/Icon/coupon.svg"
                      alt="coupon Icon"
                      width={30}
                      height={30}
                      className={ImageProp}
                    />{" "}
                    쿠폰관리
                  </div>
                </Link>
                <Link href="/notice">
                  <div
                    className={pathname === "/notice" ? SelectMenu : MenuLayout}
                  >
                    <Image
                      src="/Icon/notice.svg"
                      alt="notice Icon"
                      width={30}
                      height={30}
                      className={ImageProp}
                    />{" "}
                    공지관리
                  </div>
                </Link>
                <Link href="/review">
                  <div
                    className={pathname === "/review" ? SelectMenu : MenuLayout}
                  >
                    <Image
                      src="/Icon/review.svg"
                      alt="review Icon"
                      width={30}
                      height={30}
                      className={ImageProp}
                    />{" "}
                    리뷰관리
                  </div>
                </Link>
              </div>
              <div>
                <div className={Line} />
                <div className={MenuLayout}>
                  <Image
                    src="/Icon/setting.svg"
                    alt="setting Icon"
                    width={30}
                    height={30}
                    className={ImageProp}
                  />{" "}
                  Setting
                </div>
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default Navigation;
