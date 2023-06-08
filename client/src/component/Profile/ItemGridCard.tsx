import { useState } from "react";
import { AiFillDelete, AiOutlineEdit, AiFillHeart } from "react-icons/ai";
import ImageGallery from "react-image-gallery";

interface ItemGridCardInterface {
  auth?: boolean;
  product?: any;
  edit?: boolean;
  setEdit?: any;
  deleteHouse?: boolean;
  setDeleteHouse?: any;
  imgheight?: string;
  imgheight1?: string;
}

export default function ItemGridCard({
  product,
  auth,
  imgheight,
  imgheight1,
  edit,
  deleteHouse,
  setEdit,
  setDeleteHouse,
}: ItemGridCardInterface) {
  console.log(edit, deleteHouse)
  const [wishlist, setWishlist] = useState(false);
  const addwishlist = () => {
    console.log(`adding to wishlist`);
    setWishlist(!wishlist);
  };
  
const images = [
  {
    original: "https://picsum.photos/id/1018/1260/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

  return (
    <div key={product.id} className="group relative bg-white">
      <div
        className={`min-h-32  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ${imgheight1}`}
      >
         {/* <ImageGallery items={images} showThumbnails={false} /> */}
        <img
          src={`/img/card-img${product.id}.jpg`}
          alt={product.imageAlt}
          className={`h-full w-full object-cover object-center lg:h-full lg:w-full ${imgheight}`}
        />
      </div>
      <div className="mt-4 flex justify-between px-2 bg-white">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
      {/* absolute */}
      {auth ? (
        <div className="flex items-center justify-between">
          <div
            className="px-2 py-[0.2rem]  absolute top-[0.5rem] left-[0.5rem]  z-10 flex items-center gap-2 hover:curor-pointer"
            onClick={() => setEdit((prev: any) => !prev)}
          >
            <AiOutlineEdit className="text-black p-2 bg-green-100 hover:bg-green-300 rounded text-3xl" />
          </div>
          <div
            className="px-4 py-[0.2rem] absolute top-[0.5rem] right-[0.5rem]  z-10 flex gap-2 items-center"
            onClick={() =>
              setDeleteHouse(console.log(`you're about to delete this`))
            }
          >
            <AiFillDelete className="text-black p-2 bg-red-100 hover:bg-red-300 rounded text-3xl" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="px-2 py-[0.2rem]  absolute top-[0.5rem] left-[0.5rem]  z-10 flex items-center gap-2 hover:curor-pointer">
            <p className="text-black px-2 bg-green-100  rounded">Featured</p>
            {/* <AiOutlineEdit className="text-black p-2 bg-green-100 hover:bg-green-300 rounded text-3xl" /> */}
          </div>
          <div
            className="px-4 py-[0.2rem] absolute top-[0.5rem] right-[0.5rem]  z-10 flex gap-2 items-center"
            onClick={addwishlist}
          >
            {wishlist ? (
              <AiFillHeart className="text-red-500 p-2 bg-red-100 hover:bg-red-300 rounded text-3xl" />
            ) : (
              <AiFillHeart className="text-black-500 p-2 bg-red-100 hover:bg-red-300 rounded text-3xl" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
