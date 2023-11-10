import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import axios from "axios";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const loggedIn= auth?.accesstoken !== "" &&
    auth?.refreshtoken !== "";

  useEffect(() => {
    if (loggedIn) {
      getCurrentUser();
    }
  }, [auth]);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get("https://realance-com-ng.onrender.com/api/user/current-user", {
        headers: {
          Authorization: auth?.accesstoken,
        },
      });
      setLoading(true);
      console.log(data);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
  return <div>{loading ? <Outlet /> : ""}</div>;
}
