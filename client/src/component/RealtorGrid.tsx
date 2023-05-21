// import React from "react";
import { Link } from "react-router-dom";

export default function RealtorGrid() {
  return (
    <div className="m-8  flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 my-2">
        <div v-for="(song, index) in songs">
          <Link to="/">
            <div className="bg-color-white w-full p-4 rounded-md border my-4">
              <div className="flex flex-col gap-8 md:gap-2 md:flex-row md:items-center md:justify-between">
                <div className="basis-4/12 flex gap-6 items-center px-2">
                  <div className="bg-[url(/img/card-img2.jpg)] bg-cover relative rounded-md w-24 h-28 flex relative chart-hover">
                    <button className="opacity-0 absolute bottom-0 right-4 text-color-white text-lg">
                      <i className="fas fa-circle-play"></i>
                    </button>
                  </div>
                  <div>
                    <h3 className="text-md"> RED </h3>
                    <span>Hellyson</span>
                  </div>
                </div>
                <div className="basis-3/12 flex gap-4 justify-center md:justify-end">
                  <a href="" className="flex gap-2">
                    <i className="fa fa-download text-color-text"></i>
                    <span>36.4k</span>
                  </a>
                  <a href="" className="flex gap-2">
                    <i className="fas fa-heart text-color-secondary"></i>
                    <span>19.4k</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 px-2 mt-4">
                {/* <p>
                  <button className="">
                    <i className="fa fa-circle-play text-color-text text-lg"></i>
                  </button>
                </p> */}
                {/* <div className="w-full bg-color-light-bg h-2">
                  <div className="flex h-full w-1/3 bg-red-500"></div>
                </div> */}
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      </div>
    </div>
  );
}
