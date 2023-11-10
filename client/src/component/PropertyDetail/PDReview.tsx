import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import cardImg from "/img/card-img3.jpg";
import axios from "axios";

export default function PDReview({}) {
  const reviews = {};
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState(reviews);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://realance-com-ng.onrender.com/api/property`
      );
      const data = await response.data;
      console.log(data.propertyForRent);
      setProperties(reviews);
      setLoading(false);
      return data;
    } catch (error: any) {
      setLoading(false);
      return error;
    }
  };
  return (
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
  );
}
