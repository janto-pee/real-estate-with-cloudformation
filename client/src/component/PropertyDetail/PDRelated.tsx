import { Card } from "..";

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
  }
];

export default function PDRelated({
  edit,
  deleteHouse,
  setEdit,
  setDeleteHouse,
}: ListItemProps) {
  return (
    <div className={`mt-4 flex flex-col items-center justify-center bg-white `}>
      <ul className={`grid md:grid-cols-1 gap-4`}>
        {products.map((item) => (
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
