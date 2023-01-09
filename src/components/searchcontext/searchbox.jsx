import React, { useEffect } from "react";
import searchicon from "../../../public/icons/search.png";
import data from "../data/stays.json";
import { useSearch, useSearchUpdate } from "../navbar";

function Searchbox() {
  const isSearch = useSearch();
  const toggleSearch = useSearchUpdate();
  useEffect(() => {
    if (typeof document !== "undefined") {
      const app = document.querySelector("body");
      if (isSearch) {
        app.style.overflowY = "hidden";
        app.style.height = "100vh";
      } else app.style.overflowY = "auto";
      console.log(app);
    }
  }, [isSearch]);

  return (
    <div
      className={`p-10 bg-white fixed w-full top-0 left-0 h-2/3 transition-all
      duration-700 overflow-y-hidden${
        isSearch
          ? "translate-y-0 opacity-100 z-30"
          : "-translate-y-96 opacity-0 -z-10 -top-96"
      }`}
    >
      <div className="mx-auto grid grid-cols-3 h-max shadow-md shadow-gray1/50 w-auto  rounded-2xl">
        <section className="px-8 py-3">
          <p className="text-xs font-bold">Location</p>
          <p className="capitalize">Dhaka, Bangladesh</p>
        </section>
        <section className="border-x-gray3 border-x-2 px-8 py-3">
          <p className="text-xs text-basictext font-bold uppercase">GUESTS</p>
          <p className="text-lightgray">Add guests</p>
        </section>
        <section className="my-auto">
          <button
            className="rounded-xl bg-bstheme_red text-white py-3 px-5
            m-auto flex items-center gap-3"
            onClick={toggleSearch}
          >
            <img
              className="brightness-0 invert"
              width={20}
              height={20}
              src={searchicon}
              alt=""
            />
            <span>Search</span>
          </button>
        </section>
      </div>
      <div className="h-4/5  grid grid-cols-3 w-full">
        <ul className="overflow-y-scroll h-5/6 my-auto hide-scrollbar ">
          {data.map((value, id) => {
            return (
              <li key={id} className="text-base py-4">
                {value.city} {value.country}
              </li>
            );
          })}
        </ul>
        <div className="my-auto grid gap-5 h-3/4">
          <section className="first">
            <p className="font-bold">Adults</p>
            <p className="text-lightgray">Ages 13 or above</p>
            <div className="adults flex gap-3 my-3">
              <button className="rounded-md ring-1 ring-basictext text-center inline-block h-7 w-7 hover:bg-lightgray/30">
                -
              </button>
              <p className="font-bold">0</p>
              <button className="rounded-md ring-1 ring-basictext text-center inline-block h-7 w-7 hover:bg-lightgray/30">
                +
              </button>
            </div>
          </section>
          <section className="last">
            <p className="font-bold">Children</p>
            <p className="text-lightgray">Ages 2-12</p>
            <div className="adults flex gap-3 my-3">
              <button className="rounded-md ring-1 ring-basictext text-center inline-block h-7 w-7 hover:bg-lightgray/30">
                -
              </button>
              <p className="font-bold">0</p>
              <button className="rounded-md ring-1 ring-basictext text-center inline-block h-7 w-7 hover:bg-lightgray/30">
                +
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
