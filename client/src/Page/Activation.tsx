import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

export default function Activation() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  // get token from url
  const { verificationtoken } = useParams();
  //   post to backend
  useEffect(() => {
    requestActivation();
  }, [verificationtoken]);

  const requestActivation = async () => {
    try {
      const { data } = await axios.post(`/verify/${verificationtoken}`, verificationtoken);
      toast.success("successfully logged in, welcome to Oga Landlord");
      setAuth(data);
      localStorage.setItem("auth", JSON.stringify(data));
      navigate("/");
      return data;
    } catch (error: any) {
      toast.error(error);
      navigate("/register");
      return error;
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center text-center ">
      <h1 className="p-8 text-4xl text-gray-700">Verifing Email...</h1>
    </div>
  );
}
