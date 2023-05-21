import { Card, Pagination } from "..";

interface ListItemProps {
  classnames?: string;
  headerclass?: string;
  headertext?: string;
  paginate?: boolean;
  subtextclass?: string;
  subtext?: string;
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

export default function ListItems({
  classnames,
  headerclass,
  subtextclass,
  subtext,
  headertext,
  paginate,
  edit,
  deleteHouse,
  setEdit,
  setDeleteHouse,
}: ListItemProps) {
  return (
    <div
      className={`bg-gray-100 ${classnames} flex flex-col items-center justify-center `}
    >
      <div className="text-center">
        <h1 className={`${headerclass}`}>{headertext}</h1>
        <small className={subtextclass}>{subtext}</small>
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 py-8">
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
      {paginate ? (
        <Pagination />
      ) : (
        <button
          type="button"
          className="mx-auto inline-flex items-center border-orange-500 border-2 px-12 py-2 text-md font-semibold text-orange shadow-sm hover:bg-orange-500 hover:text-white"
        >
          Load More
        </button>
      )}
    </div>
  );
}

// tailwind-element
