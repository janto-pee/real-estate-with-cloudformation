import axios from "axios";
import { Card } from "..";
import { useEffect, useState } from "react";

interface ListItemProps {
  edit?: boolean;
  setEdit?: any;
  deleteHouse?: boolean;
  setDeleteHouse?: any;
}
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

export default function PDRelated({
  edit,
  deleteHouse,
  setEdit,
  setDeleteHouse,
}: ListItemProps) {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState(products);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://realance-com-ng.onrender.com/api/property`
      );
      const data = await response.data;
      console.log(data.propertyForRent);
      setProperties(products);
      setLoading(false);
      return data;
    } catch (error: any) {
      setLoading(false);
      return error;
    }
  };
  return (
    <div className={`mt-4 flex flex-col items-center justify-center bg-white `}>
      <p>{loading && "loading"}</p>

      <ul className={`grid md:grid-cols-1 gap-4`}>
        {properties.map((item) => (
          <Card
            key={item.id}
            carditem={item}
            edit={edit}
            setEdit={setEdit}
            deleteHouse={deleteHouse}
            setDeleteHouse={setDeleteHouse}
          />
        ))}
      </ul>
    </div>
  );
}

// tailwind-element
