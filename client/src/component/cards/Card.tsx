import { Link } from "react-router-dom";
import { ChevronDownIcon, EyeDropperIcon } from "@heroicons/react/20/solid";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import ListingForm from "../Form/ListingForm";

interface CardInterface {
  carditem: any;
  edit?: boolean;
  setEdit?: any;
  deleteHouse?: boolean;
  setDeleteHouse?: any;
}

export default function Card({
  carditem,
  edit,
  deleteHouse,
  setEdit,
  setDeleteHouse,
}: CardInterface) {
  const [formToggle, setFormToggle] = useState(false);
  console.log(edit, deleteHouse, setDeleteHouse, setEdit);
  const schools = "schools";
  const degreeAbbr = "Bsc";
  const editable = true;

  const handleDelete = () => {
    try {
      console.log("deleting");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-md overflow-hidden  relative text-left hover:shadow-xl">
      <Link
        to={`/property/${carditem.slug}`}
        className="cursor-pointer"
      >
        {/* image */}
        <img
          className="w-full h-72"
          height={500}
          width={500}
          src={` /img/card-img${carditem.id}.jpg`}
          alt={schools}
        />

        {/* bottom white text */}
        <div className="bg-white p-4">
          <h5 className="pt-2 mb-4 text-md font-[400]  tracking-tight text-gray-800 ">
            {"Light And Modern Apartment"}
          </h5>
          <div className="mb-4 font-normal text-gray-700 flex justify-between items-center">
            <p className="text-lg text-blue-800">#300,000/yr</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <BiBed
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="text-gray-500">4</span>
              </div>
              <div className="flex items-center">
                <BiBath
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="text-gray-500">4</span>
              </div>
              <div className="flex items-center">
                <BiArea
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="text-gray-500">4</span>
              </div>
            </div>
          </div>
        </div>

        {/* edit from */}
        {formToggle && (
          <div className="mt-4 py-4">
            {" "}
            <ListingForm />
          </div>
        )}

        {/* absolute */}
        {editable ? (
          <div className="flex items-center justify-between">
            <div className="px-2 py-[0.2rem] text-[14px] rounded-md bg-red-200 absolute top-[0.5rem] left-[0.5rem] text-red-700 z-10 flex items-center gap-2">
              <ChevronDownIcon className="text-red-500" />
              <span> Featured</span>
            </div>
            <div className="px-4 py-[0.2rem] text-[14px] rounded-md bg-gray-800 absolute top-[0.5rem] right-[0.5rem] text-gray-200 z-10 flex gap-2 items-center">
              <EyeDropperIcon />
              <span>{degreeAbbr}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setFormToggle((prev) => !prev);
              }}
              className="px-2 py-[0.2rem] text-[14px] rounded-md bg-gray-200 absolute top-[0.5rem] left-[0.5rem] text-red-700 z-10 flex items-center gap-2"
            >
              <AiOutlineEdit className="text-red-500" />
              <span>Edit</span>
            </button>
            <div
              onClick={handleDelete}
              className="px-4 py-[0.2rem] text-[14px] rounded-md bg-red-800 absolute top-[0.5rem] right-[0.5rem] text-gray-200 z-10 flex gap-2 items-center"
            >
              <AiFillDelete />
              <span>{"Delete"}</span>
            </div>
            <div className="px-4 py-[0.2rem] text-[14px] rounded-md bg-gray-200 absolute top-[15rem] right-[0.5rem] text-green-600 z-10 flex gap-2 items-center">
              <EyeDropperIcon />
              <span>{"Featured"}</span>
            </div>
            <div className="px-4 py-[0.2rem] text-[14px] rounded-md bg-gray-800 absolute top-[15rem] left-[0.5rem] text-gray-200 z-10 flex gap-2 items-center">
              <EyeDropperIcon />
              <span>{degreeAbbr}</span>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}
