import { Card, Pagination } from "..";
// import PDNav from "../PropertyDetail/PDNav";

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

export default function RentProperties({
  paginate,
  edit,
  deleteHouse,
  setEdit,
  setDeleteHouse,
  cardgridclass,
}: ListItemProps) {
  return (
    <div className={`bg-gray-100`}>
      <div className="mx-auto max-w-7xl p-8 lg:pb-24">
        <div className="my-4 md:my-8 text-start md:mb-12">
          <h1 className="text-start text-2xl lg:text-4xl font-[400] ">
            For Rent
          </h1>
        </div>
        <p className="my-2">52 properties</p>
        <ul
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 pb-8 ${cardgridclass}`}
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
        <Pagination />
      </div>
    </div>
  );
}
