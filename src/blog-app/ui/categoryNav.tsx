"use client";

import { categories, useFilterContext } from "../context/filterContext";
import UpperCase from "../utils/upperCase";

const buttonClass = [
  "hover:bg-buttonCancelHover active:bg-buttonCancelActive border-blue-800 bg-buttonSelected text-white hover:text-white",
  "hover:bg-buttonHover active:bg-buttonActive",
  "active:border-button text-textSecondary rounded-2xl shadow-xl shadow-backGroundActive  active:text-white border border-blue-700 px-8 py-2 transition-all hover:text-black",
];

export default function CategoryNav() {
  const { filters, setFilters } = useFilterContext();

  const checkBoxHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    const cat = e.currentTarget.value;
    return filters.includes(cat)
      ? setFilters(filters.filter((cats) => cats !== cat))
      : setFilters([...filters, cat]);
  };

  const selectAll = () =>
    filters.length === categories.length
      ? setFilters([])
      : setFilters(categories);

  return (
    <div className="flex justify-center gap-14 pb-8 pt-16 text-lg text-gray-600">
      <button
        onClick={() => selectAll()}
        className={`${
          filters.length === categories.length ? buttonClass[0] : buttonClass[1]
        } ${buttonClass[2]} `}
      >
        Hepsi
      </button>

      {categories.map((cat) => (
        <label
          className={`${
            filters.includes(cat) || filters.length === categories.length
              ? buttonClass[0]
              : buttonClass[1]
          } ${buttonClass[2]} cursor-pointer  select-none`}
          key={cat}
        >
          {UpperCase(cat)}
          <input
            className="appearance-none"
            type="checkbox"
            value={cat}
            onClick={(e) => checkBoxHandler(e)}
          />
          <button></button>
        </label>
      ))}
    </div>
  );
}
