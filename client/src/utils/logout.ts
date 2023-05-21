import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth"

export const logout = () => {
    const {setAuth} = useAuth()
    const navigate = useNavigate()
    setAuth({user: null, accesstoken: "", refreshtoken: ""})
    localStorage.removeItem("auth")
    navigate('/')
  }