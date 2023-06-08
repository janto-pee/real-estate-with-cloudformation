import cardImg from "/img/card-img3.jpg";
import { AiOutlineWhatsApp, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function AgentCard({
  item,
  itemdetail,
}: {
  item: any;
  itemdetail?: boolean;
}) {
  console.log(item);
  return (
    <div>
      {!itemdetail ? (
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 bg-white w-full my-4 p-6">
          <div className="sm:basis-[40%]">
            <img
              src={cardImg}
              alt=""
              className={`rounded-md  border-2 border-white`}
            />
          </div>

          <div className="sm:basis-[60%]">
            <h1 className="text-gray-700 text-lg">Favian Omololu</h1>
            <h2 className="text-gray-600 text-sm">
              Real Estate Agent at{" "}
              <span className="text-blue-400">Gloria & Sons Realtor</span>
            </h2>
            <div className="mt-4">
              {[1, 2, 3].map((item) => (
                <p
                  className="border-b border-gray-200 flex items-center justify-between my-2"
                  key={item}
                >
                  <span className="text-sm font-[500]">Phone</span>
                  <span className="text-sm text-gray-600">09064890551</span>
                </p>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <AiOutlineWhatsApp className="text-green-500" />
              <Link to="/" className="text-blue-500 text-sm">
                View more listings
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-4 md:gap-6 bg-white w-full my-4 p-6">
          <div className="basis-[40%]">
            <img
              src={cardImg}
              alt=""
              className={`rounded-md  border-2 border-white`}
            />
          </div>

          <div className="basis-[60%]">
            <h1 className="text-gray-700 text-lg">Favian Omololu</h1>
            <div className="flex items-center my-2">
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <span className="text-blue-400 ml-2">reviews</span>
                  </div>
            <h2 className="text-gray-600 text-sm border-b border-gray-200 pb-4">
              Real Estate Agent at{" "}
              <span className="text-blue-400">Gloria & Sons Realtor</span>
            </h2>
            <div className="mt-4">
              {[1, 2, 3, 4].map((item) => (
                <p
                  className="flex items-center gap-2 my-2"
                  key={item}
                >
                  <span className="text-sm font-[600]">Phone:</span>
                  <span className="text-sm text-gray-600">09064890551</span>
                </p>
              ))}
            </div>
            <div className="flex gap-2 items-center mt-4 sm:w-[50%] md:w-[40%]">
            <button
              type="submit"
              className="block w-full rounded-md border bg-indigo-600 text-white px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              call
            </button>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 text-center w-full rounded-md border border-indigo-400 px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <AiOutlineWhatsApp />
              <span>whatsapp</span>
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
