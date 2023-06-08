export default function SearchFilter() {
  const product = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="bg-gray-100 lg:bg-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 gap-4 py-4 hidden md:block">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-4 ">
          {product.map((item, index) => (
            <select
              key={index}
              id="countries"
              className="bg-white lg:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue={"choose a country"}>
                Choose a country
              </option>
              <option value={item}>United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          ))}
        </div>
      </div>
    </>
  );
}
