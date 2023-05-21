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
      const { data } = await axios.post("/activation", verificationtoken);
      toast.success("successfully logged in, welcome to Oga Landlord");
      setAuth(data);
      localStorage.setItem("auth", JSON.stringify(data));
      navigate("/dashboard");
      return data;
    } catch (error: any) {
      toast.error(error);
      navigate("/register");
      return error;
    }
  };

  return (
    <div className="flex items-center justify-center text-center text-4xl">
      Activating User...
    </div>
  );
}
