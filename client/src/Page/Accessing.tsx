import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

export default function Accessing() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  // get token from url
  const { accesscode } = useParams();
  //   post to backend
  useEffect(() => {
    requestActivation();
  }, [accesscode]);

  const requestActivation = async () => {
    try {
      const { data } = await axios.post(
        `https://realance-com-ng.onrender.com/api/user/accessaccount/${accesscode}`,
        accesscode
      );
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
    <div className="flex items-center justify-center text-center text-4xl">
      Activating User...
    </div>
  );
}
