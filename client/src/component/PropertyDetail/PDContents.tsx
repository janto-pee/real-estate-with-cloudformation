import { useEffect, useState } from "react";
import PDHeader from "./PDHeader";
import PDNav from "./PDNav";
import {
  MdOutlineBathroom,
  MdBedroomParent,
  MdAreaChart,
  MdCarCrash,
} from "react-icons/md";
import {
  TbBrandGuardian,
  TbFenceOff,
  TbGardenCart,
  TbPointFilled,
} from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Comment } from "..";
import cardImg from "/img/card-img3.jpg";
import PDContact from "./PDContact";
import PDRelated from "./PDRelated";
import { useParams } from "react-router-dom";
import axios from "axios";
import PDReview from "./PDReview";

const pro = {
  photos: [
    {
      original: "https://picsum.photos/id/1018/1260/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ],
  price: "",
  address: "",
  bedrooms: "",
  bathrooms: "",
  landsize: "",
  carpark: "",
  location: {
    type: "",
    cordinates: [6.6018, 3.3515],
  },
  title: "4 Bedroom Flat at Ogudu",
  slug: "",
  description: "",
  postedby: { ref: "User" },
  sold: false,
  googleMap: {},
  type: "",
  action: "sell",
  view: 0,
  featured: false,
};

const propertyfeatures = [
  {
    name: "bedrooms",
    icon: <MdBedroomParent className="text-gray-600" />,
    value: pro.bedrooms,
  },
  {
    name: "bathrooms",
    icon: <MdOutlineBathroom className="text-gray-600" />,
    value: pro.bathrooms,
  },
  {
    name: "area",
    icon: <MdAreaChart className="text-gray-600" />,
    value: pro.bedrooms,
  },
  {
    name: "fence",
    icon: <TbFenceOff className="text-gray-600" />,
    value: pro.bedrooms,
  },
  {
    name: "garden",
    icon: <TbGardenCart className="text-gray-600" />,
    value: pro.bedrooms,
  },
  {
    name: "security",
    icon: <TbBrandGuardian className="text-gray-600" />,
    value: pro.bedrooms,
  },
  {
    name: "carpark",
    icon: <MdCarCrash className="text-gray-600" />,
    value: pro.bedrooms,
  },
];

const nearbyfeatures = [
  {
    name: "school",
    status: false,
    value: pro.bedrooms,
  },
  {
    name: "tertiary institute",
    status: false,
    value: pro.bathrooms,
  },
  {
    name: "Grocery center",
    status: false,
    value: pro.bathrooms,
  },
  {
    name: "market",
    status: false,
    value: pro.bathrooms,
  },
  {
    name: "hospital",
    status: true,
    value: "Ansarudeen Community High School",
  },
  {
    name: "police stations",
    status: true,
    value: pro.bathrooms,
  },
  {
    name: "gym/game centre",
    status: true,
    value: pro.bathrooms,
  },
  {
    name: "Bus park",
    status: true,
    value: pro.bathrooms,
  },
];

export default function PDContents() {
  const params = useParams();
  const slug = params.slug;

  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState(pro);
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
      setProperty(pro);
      setProperty(pro);
      setLoading(false);
      return data;
    } catch (error: any) {
      setLoading(false);
      return error;
    }
  };
  return (
    <div className="bg-[#f7f7f8]">
      <div className="pt-6">
        {/* <PDNav product={property} /> */}
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 py-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-[400] tracking-tight text-gray-900 sm:text-3xl">
              {property.title}
            </h1>
            <p className="mt-4 mb-8 flex gap-2 ">
              {property.featured && (
                <span className="px-4 py-1 bg-green-700 text-white font-[500]">
                  Featured
                </span>
              )}
              <span className="px-4 py-1 bg-black text-white font-[500]">
                {property.action == "sell" ? "For Sale" : "For Rent"}
              </span>
            </p>
            <PDHeader photos={property.photos} />
            {/* Property Description */}
            <div className="bg-white p-4 mb-8">
              <h1 className="border-b py-4 text-xl">Property</h1>
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

            {/* Property Detail */}
            <div className="bg-white p-4 mb-8">
              <h1 className="py-4 text-xl">Details</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {propertyfeatures.map((item, index) => (
                  <div
                    className="flex items-center justify-between border-b w-full py gap-8"
                    key={index}
                  >
                    <div className="flex gap-4 items-center">
                      {item.icon}
                      <span className="text-gray-600">{item.name}:</span>
                    </div>
                    <span className="font-[400]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Nearbyl */}
            <div className="bg-white p-4 mb-8">
              <h1 className="py-4 text-xl">What's Nearby</h1>
              <div className="grid grid-cols-1">
                <p className="mt-4 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur reprehenderit ipsum veniam modi maxime sunt
                </p>
                <ul>
                  <li className="">
                    {nearbyfeatures
                      .filter((item) => item.status)
                      .map((item, index) => (
                        <div
                          className="flex gap-4 mt-4 items-center "
                          key={index}
                        >
                          <TbPointFilled />
                          <span className="text-gray-600 font-[500]">
                            {item.name}:{" "}
                          </span>
                          <span className="text-gray-600">{item.value}</span>
                        </div>
                      ))}
                  </li>
                </ul>
              </div>
            </div>

            {/* Property Detail */}
            {/* <div className="bg-white p-4 mb-8">
              <h1 className="py-4 text-xl">What's Nearby</h1>
              <div className="grid grid-cols-1">
                <div className="flex items-center border-t justify-between border-b w-full py-2 gap-8">
                  <div className="flex gap-4 items-center w-full">
                    <MdOutlineBathroom className="text-gray-600" />
                    <span className="text-gray-600">bathroom:</span>
                  </div>
                  <div className="flex items-center">
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                  </div>
                </div>
              </div>
            </div> */}
            {/* Property review */}
            <PDReview />
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
