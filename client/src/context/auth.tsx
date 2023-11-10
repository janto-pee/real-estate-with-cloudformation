import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";
import { API } from "../config";

// https://hackernoon.com/creating-context-in-reactjs-using-typescript--very important next time so you dont spend 2hours again
interface signedUser {
  _id: string | null;
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  address: string | null;
  company: string | null;
  verified: false;
  createdAt: string | null;
}

interface AuthInterface {
  signeduser: signedUser;
  accesstoken: string;
  refreshtoken: string;
}
interface AuthContextInterface {
  auth: AuthInterface | null;
  setAuth: Dispatch<SetStateAction<AuthInterface>>;
}

const defaultState = {
  auth: {
    signeduser: {
      _id: null,
      username: null,
      firstname: null,
      lastname: null,
      email: null,
      address: null,
      company: null,
      verified: false,
      createdAt: null,
    },
    accesstoken: "",
    refreshtoken: "",
  },
  // plase check the console.log(auth)
  setAuth: (auth: AuthInterface) => {
    console.log(auth);
  },
} as AuthContextInterface;

const AuthContext = createContext<AuthContextInterface>(defaultState);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthInterface>({
    signeduser: {
      _id: null,
      username: null,
      firstname: null,
      lastname: null,
      email: null,
      address: null,
      company: null,
      verified: false,
      createdAt: null,
    },
    accesstoken: "",
    refreshtoken: "",
  });

  axios.defaults.baseURL = API;
  axios.defaults.headers.common["Authorization"] = auth?.accesstoken;
  axios.defaults.headers.common["refresh_token"] = auth?.refreshtoken;

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      const originalConfig = error.config;
      if (error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const { data } = await axios.get("/session/refreshaccesstoken");
            axios.defaults.headers.common["Authorization"] = data.accesstoken;
            axios.defaults.headers.common["refresh_token"] = data.refreshtoken;

            setAuth(data);
            localStorage.setItem("auth", JSON.stringify(data));

            return axios(originalConfig);
          } catch (error: any) {
            if (error.response && error.response.data) {
              // Do something
              return Promise.reject(error.response.data);
            }
            return Promise.reject(error);
          }
        }
        if (error.response.status === 403 && error.response.data) {
          return Promise.reject(error.response.data);
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    let LS = localStorage.getItem("auth");
    if (LS) {
      setAuth(JSON.parse(LS));
    }
  }, []);
  const { signeduser } = auth;
  console.log("context", signeduser);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
