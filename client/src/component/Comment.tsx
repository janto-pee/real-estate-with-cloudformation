import { useState } from "react";

export default function Comment() {
  const [comment, setComment] = useState('');
  return (
    <form className="">
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Leave a review
          </label>
        </div>
        <div className="mt-2">
          <textarea
            rows={5}
            cols={5}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 mt-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit Comment
        </button>
      </div>
    </form>
  );
}
