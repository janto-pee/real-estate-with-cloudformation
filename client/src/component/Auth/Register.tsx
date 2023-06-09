import axios from "axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

interface registerprop {
  setauthModal: any;
}

export default function Register({ setauthModal }: registerprop) {
  const [registerData, setRegisterData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    try {
      console.log(registerData);
      if (registerData.email !== "" && registerData.lastname !== "") {
        e.preventDefault();
        setLoading(true);
        const { data } = await axios.post(`/user`, {
          ...registerData,
        });
        console.log(data, auth);
        setAuth(data);
        toast.success("user successfully resgistered");
        setLoading(false);
        navigate("/");
        return registerData;
      }

      return `Enter email and password`;
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
      return error;
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register an Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={registerData.username}
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      username: e.target.value,
                    });
                  }}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                firstname
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete="firstname"
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      firstname: e.target.value,
                    });
                  }}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                lastname
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  autoComplete="lastname"
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      lastname: e.target.value,
                    });
                  }}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={registerData.email}
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      email: e.target.value,
                    });
                  }}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={registerData.password}
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    });
                  }}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  loading && "disabled bg-gray-200"
                }`}
              >
                {loading ? "Waiting..." : "Register"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account{" "}
            <button
              className={`font-semibold leading-6 text-indigo-600 hover:text-indigo-500`}
              onClick={() => {
                setauthModal(false);
              }}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
