import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="w-full text-gray-100 background-customize">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold leading-none lg:text-4xl">
            Rent
            <span className="text-violet-400"> Affordable </span>Home
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 ">
            we bring you the cheapest housing plan in Nigeria today -
            <br className="hidden md:inline lg:hidden" />
            for low to middle income earners
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
           <Link
              to="/rent"
              className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
            >
              Rent House
            </Link>
           <Link
              to="/buy"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Post House
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
