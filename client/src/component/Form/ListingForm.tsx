import { useState, FormEvent } from "react";
import CurrencyInput from "react-currency-input-field";
import ImageForm from "./ImageForm";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ListingForm() {
  // interface propertyInterface {
  //   photos: [];
  //   uploading: boolean;
  //   price: string;
  //   address: string;
  //   bedrooms: string;
  //   bathrooms: string;
  //   landsize: string;
  //   carpark: string;
  //   title: string;
  //   description: string;
  // }
const [loading, setLoading] = useState(false)
const navigate =useNavigate()
  const [property, setProperty] = useState({
    photos: [],
    uploading: false,
    price: "1000",
    address: "",
    bedrooms: "",
    bathrooms: "",
    landsize: "",
    carpark: "",
    title: "",
    description: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post(
        `https://realance-com-ng.onrender.com/api/property`,
        property
      );
      await response.data;
      toast.success("user successfully resgistered");
      setLoading(false);
      navigate("/");
      return property;
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      // toast.error(error.response.data);
      toast.error(error.message);
      return error;
    }
  };

  const handleUpload = (e: any) => {
    try {
      let files = e.target.files;
      files = [...files];
      if (files.length) {
        console.log(files);
        setProperty({ ...property, uploading: true });
      }
      files.map((file: any) => {
        try {
          Resizer.imageFileResizer(
            file,
            1080,
            720,
            "JPEG",
            100,
            0,
            async (uri) => {
              try {
                const { data } = await axios.post("/property/upload-image", {
                  image: uri,
                });
                setProperty((prev: any) => ({
                  ...prev,
                  photos: [data, ...prev.photos],
                  uploading: false,
                }));
              } catch (error) {
                setProperty({ ...property, uploading: false });
                return error;
              }
            },
            "base64"
            // 200,
            // 200
          );
        } catch (error) {
          setProperty({ ...property, uploading: false });
          return error;
        }
      });
    } catch (error: any) {
      console.log(error);
      setProperty({ ...property, uploading: false });
    }
  };

  const handleDelete = async (file: any) => {
    const answer = await window.confirm("Delete Image?");
    if (!answer) {
      return;
    }
    try {
      await axios.post("/property/delete-image", file);
      setProperty((prev: any) => ({
        ...prev,
        photos: prev.photos.filter((p: any) => p.key != file.key),
        uploading: false,
      }));
    } catch (error: any) {}
  };
  return (
    <form className=" mt-8 flex flex-col gap-2" >
      <ImageForm
        handleUpload={handleUpload}
        handleDelete={handleDelete}
        photos={property.photos}
      />
      <div className="mt-2.5">
        <input
          type="text"
          name="fullname"
          id="fullname"
          value={property.address}
          onChange={(e) => {
            setProperty({ ...property, address: e.target.value });
          }}
          autoComplete="given-name"
          placeholder="Enter address"
          className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-2.5">
        <CurrencyInput
          placeholder="Enter address"
          defaultValue={property.price}
          value={property.price}
          onValueChange={(value) => setProperty({ ...property, price: value! })}
          className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-2">
        <input
          type="number"
          name="bedrooms"
          id="bedrooms"
          value={property.bedrooms}
          onChange={(e) =>
            setProperty({ ...property, bedrooms: e.target.value })
          }
          autoComplete="email"
          className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-2">
        <input
          type="number"
          name="bathrooms"
          id="bathrooms"
          value={property.bathrooms}
          onChange={(e) =>
            setProperty({ ...property, bathrooms: e.target.value })
          }
          className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-2">
        <input
          type="number"
          name="landsize"
          id="landsize"
          value={property.landsize}
          onChange={(e) =>
            setProperty({ ...property, landsize: e.target.value })
          }
          className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-2">
        <input
          type="number"
          name="carpark"
          id="carpark"
          value={property.carpark}
          onChange={(e) =>
            setProperty({ ...property, carpark: e.target.value })
          }
          className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-2">
        <input
          type="number"
          name="title"
          id="title"
          value={property.title}
          onChange={(e) => setProperty({ ...property, title: e.target.value })}
          className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-2">
        <textarea
          name="message"
          id="message"
          rows={4}
          className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          value={property.description}
          onChange={(e) =>
            setProperty({ ...property, description: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <div>
          <button
          onClick={handleSubmit}
          disabled={loading}
            type="submit"
            className={`block w-full rounded-md bg-indigo-600 px-3.5 py-3 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${loading && 'bg-indigo-200'}`}
          >
            {
              loading? 'loading': 'submit'
            }
          </button>
        </div>
      </div>
    </form>
  );
}
