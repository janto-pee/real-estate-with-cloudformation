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
  cardgridclass?: string;
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

export default function HomeProperties({
  paginate,
  edit,
  deleteHouse,
  setEdit,
  setDeleteHouse,
  cardgridclass,
}: ListItemProps) {
  return (
    <div
      className={`bg-gray-100 p-8 lg:pb-24 flex flex-col items-center justify-center `}
    >
      <div className="text-center my-4 md:my-8">
        <h1 className="text-2xl lg:text-4xl font-[300] ">Discover Our Best Deals</h1>
      </div>
      <ul
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 py-8 ${cardgridclass}`}
      >
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
