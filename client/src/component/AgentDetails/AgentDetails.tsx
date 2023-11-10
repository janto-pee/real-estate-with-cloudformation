import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Comment } from "..";
import cardImg from "/img/card-img3.jpg";
import PDContact from "../PropertyDetail/PDContact";
import PDRelated from "../PropertyDetail/PDRelated";
import AgentCard from "../Agent/AgentCard";
import AgentListItem from "./AgentListItem";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AgentDetails() {
  const params = useParams();
  const slug = params.slug;

  const products = {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    slug: "xyz",
  };

  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState(products);
  // const [related, setRelated] = useState(products);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://realance-com-ng.onrender.com/api/property/${slug}`
      );
      const data = await response.data;
      console.log(data.propertyForRent);
      setProperty(products);
      setProperty(products);
      setLoading(false);
      return data;
    } catch (error: any) {
      setLoading(false);
      return error;
    }
  };
  return (
    <div className="bg-[#f7f8f9]">
      <div className="pt-6">
        {loading ? "loading" : property.name}
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

            <div className="mb-4">
              <AgentListItem />
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
                <div className="mt-8">
                  <h1 className="border-b py-4 text-xl">Related Field</h1>
                  <PDRelated />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
