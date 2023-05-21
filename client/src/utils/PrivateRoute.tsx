import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import axios from "axios";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const {auth} = useAuth();
  const [getUser, setGetUser] = useState(false);

  useEffect(() => {
    if(auth?.user){
        getCurrentUser()
    }
  }, [auth])

  const getCurrentUser = async() => {
    try {
        const {data} = await axios.get('/current-user', {
            headers: {
                Authorization: auth?.accesstoken
            }
        })
        setGetUser(true)
        console.log(data)
    } catch (error) {
        setGetUser(false)
        return error
    }
  }
  return getUser && <Outlet />
}
