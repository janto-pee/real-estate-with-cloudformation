import { Switch } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PDContact() {
  const [agreed, setAgreed] = useState(false);
  return (
    <form className="mx-auto mt-8 max-w-xl flex flex-col gap-2">
      <div>
        <label
          htmlFor="fullname"
          className="block text-sm font-semibold leading-6 text-gray-600"
        >
          fullname
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="fullname"
            id="fullname"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold leading-6 text-gray-600"
        >
          Email
        </label>
        <div className="mt-2.5">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="phone-number"
          className="block text-sm font-semibold leading-6 text-gray-600"
        >
          Phone number
        </label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
          </div>
          <input
            type="tel"
            name="phone-number"
            id="phone-number"
            autoComplete="tel"
            className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-600"
        >
          Message
        </label>
        <div className="mt-2.5">
          <textarea
            name="message"
            id="message"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
      <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2 mt-2">
        <div className="flex h-6 items-center">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className={classNames(
              agreed ? "bg-indigo-600" : "bg-gray-200",
              "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            )}
          >
            <span className="sr-only">Agree to policies</span>
            <span
              aria-hidden="true"
              className={classNames(
                agreed ? "translate-x-3.5" : "translate-x-0",
                "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
        </div>
        <Switch.Label className="text-sm leading-6 text-gray-600">
          By selecting this, you agree to our{" "}
          <a href="#" className="font-semibold text-indigo-600">
            privacy&nbsp;policy
          </a>
          .
        </Switch.Label>
      </Switch.Group>
      <div className="mt-10">
        <div>
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-3 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            send message
          </button>
          <div className="flex gap-2 items-center mt-4">
            <button
              type="submit"
              className="block w-full rounded-md border border-indigo-400 px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    </form>
  );
}
