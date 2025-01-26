"use client"
import { useFilterContext } from "../context/filterContext";

export default function SearchInput() {
  const { searchParam, setSearchParam } = useFilterContext();

  return (
    <label className="flex focus-within:border-blue-900 border-2  text-xl  bg-white px-4 items-center mx-auto left-[50%] w-[500px] h-16 rounded-lg translate-x-[-50%] absolute top-[0] translate-y-[-75%] focus-within:shadow-lg focus-within:shadow-black ">
      <span className="material-symbols-outlined">search</span>
      <input
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
        className="rounded-lg w-full h-full outline-none px-2"
        placeholder="Search"
      />
      {searchParam.length > 0 && (
        <button
          className="flex justify-center items-center hover:bg-red-400 rounded-full active:text-white active:bg-red-500 transition-all duration-100 hover:scale-125"
          onClick={() => setSearchParam("")}
        >
          <span className="material-symbols-outlined ">close</span>
        </button>
      )}
    </label>
  );
}
