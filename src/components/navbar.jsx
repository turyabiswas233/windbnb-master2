import React, { useState, useContext } from "react";
import Searchbox from "./searchcontext/searchbox";
import logo from "/icons/logo.svg";
import search from "/icons/search.png";

const SearchContext = React.createContext();
const SearchUpdate = React.createContext();

export function useSearch() {
  return useContext(SearchContext);
}
export function useSearchUpdate() {
  return useContext(SearchUpdate);
}
function Navbar() {
  const [enableSearch, setenableSearch] = useState(false);
  function toggleSearch() {
    setenableSearch((curSearch) => !curSearch);
  }

  return (
    <SearchContext.Provider value={enableSearch}>
      <SearchUpdate.Provider value={toggleSearch}>
        <Searchbox />

        <div
          className={`flex justify-between md:items-center items-start flex-col md:flex-row transition-all sticky `}
        >
          {/* left LOGO bar */}
          <section className="logo transition-all">
            <img width={140} height={30} src={logo} alt="" />
          </section>
          {/* right search bar */}

          <section
            className="search w-auto bg-white shadow-md shadow-gray1/20 flex rounded-2xl px-3 h-12 mt-5 md:my-0 mx-auto md:mr-0 transition-all cursor-pointer"
            onClick={toggleSearch}
          >
            <div className="location self-center">
              <p className="px-3 text-sm text-basictext font-medium">
                Helsinki, Finland
              </p>
            </div>
            <div className="search flex items-center">
              <p
                className="border-l-2 border-r-2 border-gray3/20 outline-none focus:outline-none focus-within:outline-none
              h-full placeholder:text-center py-3 px-5 m-auto align-middle text-lightgray"
              >
                Add guest
              </p>
              <p className="pl-3">
                <img width={25} height={25} src={search} alt="" />
              </p>
            </div>
          </section>
        </div>
      </SearchUpdate.Provider>
    </SearchContext.Provider>
  );
}

export default Navbar;
