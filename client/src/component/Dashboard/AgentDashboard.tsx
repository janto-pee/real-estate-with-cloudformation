import { AiFillStar, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Comment } from "..";
import cardImg from "/img/card-img3.jpg";
import PDContact from "../PropertyDetail/PDContact";
import AgentCard from "../Agent/AgentCard";
import AgentEdit from "./AgentEdit";
import { useState } from "react";
import ListingForm from "../Form/ListingForm";

export default function AgentDashboard() {
  const [showListing, setShowListing] = useState("Listing");
  return (
    <div className="bg-[#f7f8f9]">
      <div className="pt-6">
        <div className="max-w-2xl mx-auto lg:max-w-7xl px-8">
          <AgentCard item={"xyz"} itemdetail />
        </div>
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 py-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Property Description */}
            <div className="bg-white p-4 mb-8">
              <h1 className="border-b py-4 text-xl">About Me</h1>
              <p className="mt-4 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur reprehenderit ipsum veniam modi maxime sunt. Eos
                adipisci, blanditiis impedit odio ipsum rerum totam repellat.
                Suscipit sint aut delectus iure praesentium eligendi soluta,
                reprehenderit sunt animi ad exercitationem cumque laudantium ea
                facilis doloremque quasi cum optio neque quos fuga accusamus
                repudiandae. Rem eligendi quas sapiente.
              </p>
              <p className="mt-2 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur reprehenderit ipsum veniam modi maxime sunt. Eos
                adipisci, blanditiis impedit odio ipsum rerum totam repellat.
                Suscipit sint aut delectus iure praesentium eligendi soluta,
                reprehenderit sunt animi ad exercitationem cumque laudantium ea
                facilis doloremque quasi cum optio neque quos fuga accusamus
                repudiandae. Rem eligendi quas sapiente.
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <button
                type="submit"
                onClick={() => {
                  setShowListing("Listing");
                }}
                className={`block w-full rounded-md  px-3 py-4 text-center text-lg font-semibold text-white shadow-sm  ${
                  showListing == "Listing"
                    ? "bg-indigo-600 text-white"
                    : "border border-indigo-600 text-indigo-500"
                } `}
              >
                send message
              </button>
              <button
                type="submit"
                onClick={() => {
                  setShowListing("CreateProperty");
                }}
                className={`block w-full rounded-md px-3 py-4 text-center text-lg font-semibold text-white shadow-sm  ${
                  showListing == "CreateProperty"
                    ? "bg-indigo-600 text-white"
                    : "border border-indigo-600 text-indigo-500"
                }  `}
              >
                send message
              </button>
            </div>

            <div className="mb-4">
              {showListing == "Listing" ? <AgentEdit /> : <ListingForm />}
            </div>

            {/* Property Detail */}
            <div className="bg-white p-4 mb-8">
              <h1 className="py-4 text-xl">Reviews</h1>
              <div className="grid grid-cols-1">
                <div className="flex gap-4 items-center w-full mb-8">
                  <span className="text-gray-600">1 Review</span>
                  {/* replace with react star review */}
                  <div className="flex items-center">
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                  </div>
                  <span className="text-gray-600">(4 out of 5)</span>
                </div>

                <div className="flex py-2 flex-col md:flex-row items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={cardImg}
                      alt=""
                      className="rounded-full w-12 h-12 border-2 border-white"
                    />
                    <div>
                      <h1 className="text-gray-700">Favian Omololu</h1>
                      <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-4 items-center">
                      <div className="flex item-center gap-2">
                        <AiOutlineLike />
                        <span className="text-sm">5</span>
                      </div>
                      <div className="flex item-center gap-2">
                        <AiOutlineDislike />
                        <span className="text-sm">2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* comment */}
            <Comment />
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <div className="bg-white p-6">
              <div className="flex items-center gap-4">
                <img
                  src={cardImg}
                  alt=""
                  className="rounded-md w-16 h-16 border-2 border-white"
                />
                <div>
                  <div className="flex gap-2 items-center">
                    <CgProfile />
                    <h1 className="text-gray-700">Favian Omololu</h1>
                  </div>
                  <p className="text-gray-600 text-blue-400">12 Listings</p>
                </div>
              </div>
              <div className="my-6">
                <PDContact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
