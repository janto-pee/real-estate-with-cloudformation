import { useState } from "react";
import { Cog8ToothIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function TopBar({ topbarclasses }: { topbarclasses?: string }) {
  const navigate = useNavigate();
  const [searchword, setSearchWord] = useState("");
  const handleAdvance = () => {
    if (searchword !== "") {
      console.log("searching...");
      navigate("/search");
    }
  };

  return (
    <div
      className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 hidden md:flex lg:block py-2 ${topbarclasses}`}
    >
      <div className="w-full md:flex md:items-center md:justify-between py-2 gap-2">
        <div className="min-w-0 flex-1">
          <div className="w-full gap-4 item-center flex border-solid border-2 border-gray-200 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <MagnifyingGlassIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full border-[none] outline-none text-gray-600"
              placeholder="Enter your keyword"
              value={searchword}
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />
          </div>
        </div>
        <div className=" flex lg:ml-4 lg:mt-0 gap-2">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <HomeIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Bed
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Bath
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button
             
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <Cog8ToothIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Advanced
            </button>
          </span>

          <span className="sm:ml-3">
            <button
             onClick={handleAdvance}
              type="button"
              className="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
