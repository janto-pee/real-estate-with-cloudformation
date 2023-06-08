import PDHeader from "./PDHeader";
import PDNav from "./PDNav";
import { MdOutlineBathroom } from "react-icons/md";
import { AiFillStar, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TbPointFilled } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Comment } from "..";
import cardImg from "/img/card-img3.jpg";
import PDContact from "./PDContact";
import PDRelated from "./PDRelated";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
export default function PDContents() {
  return (
    <div className="bg-[#f7f7f8]">
      <div className="pt-6">
        <PDNav product={product} />
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 py-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-[400] tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-4 mb-8 flex gap-2 ">
              <span className="px-4 py-1 bg-green-700 text-white font-[500]">
                Featured
              </span>
              <span className="px-4 py-1 bg-black text-white font-[500]">
                For Sale
              </span>
            </p>
            <PDHeader />
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                <div className="flex items-center border-t justify-between border-b w-full py-2 gap-8">
                  <div className="flex gap-4 items-center">
                    <MdOutlineBathroom className="text-gray-600" />
                    <span className="text-gray-600">bathroom:</span>
                  </div>
                  <span className="font-[400]">192m2</span>
                </div>
                <div className="flex items-center border-t justify-between border-b w-full py-2">
                  <div className="flex gap-4 items-center">
                    <MdOutlineBathroom className="text-gray-600" />
                    <span className="text-gray-600">bathroom:</span>
                  </div>
                  <span className="font-[400]">192m2</span>
                </div>
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
                    <div className="flex gap-4 mt-4 items-center ">
                      <TbPointFilled />
                      <span className="text-gray-600 font-[500]">School: </span>
                      <span className="text-gray-600">
                        Ansarudeen Community High School
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Property Detail */}
            <div className="bg-white p-4 mb-8">
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
                  {/* <span className="font-[400]">1</span> */}
                </div>
              </div>
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
