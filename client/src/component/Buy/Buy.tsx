import { Pagination } from "..";
import ItemGridCard from "../Profile/ItemGridCard";

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
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

interface ItemGridInterface {
  auth?: boolean;
  itemheader?: string;
  edit?: boolean;
  setEdit?: any;
  deleteHouse?: boolean;
  setDeleteHouse?: any;
  imgheight?: string;
  imgheight1?: string;
  headerclass?: string;
}
export default function Buy({
  auth,
  edit,
  deleteHouse,
  setEdit,
  setDeleteHouse,
  imgheight,
}: ItemGridInterface) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl  tracking-tight text-gray-900 `}
        >
          For Sale
        </h2>
        <p className="mt-8 mb-2 lg:mt-12">52 Properties</p>

        <div className="  grid grid-cols-1 gap-x-6 gap-y-10 pb-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ItemGridCard
              key={product.id}
              auth={auth}
              product={product}
              edit={edit}
              setEdit={setEdit}
              deleteHouse={deleteHouse}
              setDeleteHouse={setDeleteHouse}
              imgheight={imgheight}
              imgheight1={"lg:h-80"}
            />
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
}
