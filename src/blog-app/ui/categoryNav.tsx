"use client";

import { categories, useFilterContext } from "../context/filterContext";
import UpperCase from "../utils/upperCase";

export default function CategoryNav() {
  const { filters, setFilters } = useFilterContext();

  const checkBoxHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const cat = e.currentTarget.value;
    return filters.includes(cat)
      ? setFilters(filters.filter((cats) => cats !== cat))
      : setFilters([...filters, cat]);
  };

  const selectAll = () =>
    filters.length >= 4 ? setFilters([]) : setFilters(categories);
  return (
    <div className=" flex justify-center text-gray-600 text-lg gap-14 pt-16 pb-8 ">
      <button
        onClick={() => selectAll()}
        className={`${
          (filters.length === 6 || filters.length >= 4) &&
          "bg-blue-800 text-white hover:text-white hover:bg-red-500 "
        }  text-gray-600 px-8 py-2 rounded-2xl hover:bg-blue-500 hover:text-black border border-blue-700 transition-all  hover:border-blue-500 active:border-blue-800`}
      >
        Hepsi
      </button>

      {categories.map((cat) => (
        <label
          className={`${
            (filters.includes(cat) || filters.length >= 4) &&
            "bg-blue-500 hover:bg-red-500 hover:text-white text-white"
          } 
          flex items-center hover:bg-blue-300 hover:text-black border border-blue-300 transition-all  hover:border-blue-500 active:border-blue-800 px-8 py-2 rounded-2xl cursor-pointer`}
          key={cat}
        >
          {UpperCase(cat)}
          <input
            className="appearance-none"
            type="checkbox"
            value={cat}
            onClick={(e) => checkBoxHandler(e)}
          />
        </label>
      ))}
    </div>
  );
}
