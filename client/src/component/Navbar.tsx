import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const navigation = [
  { name: "Rent House", href: "/rent", current: false },
  { name: "Buy Properties", href: "/buy", current: false },
  { name: "Agents", href: "/find-realtor", current: false },
  { name: "Sell Properties", href: "/sell", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  // conditionally show auth token
  const { auth, setAuth } = useAuth();
  const loggedIn =
    auth?.user !== null &&
    auth?.accesstoken !== "" &&
    auth?.refreshtoken !== "";

  const logout = () => {
    setAuth({ user: null, accesstoken: "", refreshtoken: "" });
    localStorage.removeItem("auth");
    navigate("/");
  };

  // const handleDashboard = () => {
  //   if (!loggedIn) {
  //     navigate('/auth')
  //   }else {
  //     navigate('/dashboard')
  //   }
  // }

  return (
    <Disclosure as="nav" className="bg-[#0C134F]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Company Image */}
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to="/" className={""}>
                    <HomeIcon className="block h-8 w-auto lg:hidden text-white text-white text-md" />
                  </NavLink>
                  <NavLink to="/">
                    <HomeIcon className="hidden text-sm h-8 w-auto lg:block text-white mr-4" />
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  {/* Right Menu List */}
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white "
                            : "text-gray-300 hover:bg-gray-400 hover:text-white",
                          "rounded-md px-3 py-2 text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Notification icon */}
              <div className="hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {loggedIn ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <NavLink to="/auth">
                    <button className="bg-violet-500 text-gray-300 block rounded-md px-8 py-2 text-base font-medium">
                      Register
                    </button>
                  </NavLink>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium text-2xl"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div>
                {loggedIn ? (
                  <div className="flex gap-2 items-center">
                    <div>
                      <span>{auth?.user}</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <button
                        className="bg-violet-500 text-gray-300 block rounded-md px-4 py-2"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <NavLink to="/auth">
                    <button className="bg-blue-600 text-gray-300 block rounded-md px-3 py-2 font-medium ">
                      Register
                    </button>
                  </NavLink>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
