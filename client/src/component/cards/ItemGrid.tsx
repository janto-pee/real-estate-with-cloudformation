import { Pagination } from "..";
import ItemGridCard from "../Profile/ItemGridCard";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
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
  paginate?: boolean;
  itemheader?: string;
  edit?: boolean;
  setEdit?: any;
  deleteHouse?: boolean;
  setDeleteHouse?: any;
  imgheight?: string;
  imgheight1?: string;
  headerclass?: string;
}
export default function ItemGrid({
  paginate,
  auth,
  itemheader,
  edit,
  deleteHouse,
  setEdit,
  setDeleteHouse,
  imgheight,
  imgheight1,
  headerclass,
}: ItemGridInterface) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl  tracking-tight text-gray-900 ${headerclass}`}>
          {itemheader ? itemheader : "Properties for Sale"}
        </h2>

        <div className="mt-8 lg:mt-12 grid grid-cols-1 gap-x-6 gap-y-10 pb-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
              imgheight1={imgheight1}
            />
          ))}
        </div>
        {paginate ? (
          <Pagination />
        ) : (
          <button
            type="button"
            className="mx-auto inline-flex items-center border-orange-500 border-2 px-12 py-2 mt-8 text-md font-semibold text-orange shadow-sm hover:bg-orange-500 hover:text-white"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
