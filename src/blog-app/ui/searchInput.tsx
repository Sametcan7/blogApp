"use client";
import { twMerge } from "tailwind-merge";
import { categories, useFilterContext } from "../context/filterContext";
import { PostImage } from "./post";
import Link from "next/link";
import { useEffect } from "react";

type SearchInputProps = {
  className?: string;
  type?: string;
};

export default function SearchInput({ className, type }: SearchInputProps) {
  const { posts, searchParam, setSearchParam, setFilters } = useFilterContext();

  useEffect(() => {
    if (type === "portable") setFilters(categories);
  }, [type, setFilters]);

  return (
    <div>
      <label
        className={twMerge(
          "relative z-50 flex h-16 w-[300px] items-center rounded-t-lg border-2 bg-white px-4 text-xl focus-within:border-blue-900 md:w-[500px]",
          className,
        )}
      >
        <span className="material-symbols-outlined">search</span>
        <input
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          className="h-full w-full rounded-lg px-2 outline-none"
          placeholder="Search"
        />
        {searchParam.length > 0 && (
          <button
            className="flex items-center justify-center rounded-full transition-all duration-100 hover:scale-125 hover:bg-red-400 active:bg-red-500 active:text-white"
            onClick={() => setSearchParam("")}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </label>

      {searchParam && type === "portable" && (
        <div className="absolute max-h-[400px] w-[300px] overflow-y-scroll rounded-b-lg border border-backGroundActive bg-buttonActiveHover p-1 shadow-lg shadow-black md:w-[500px]">
          {posts.map(
            (post) =>
              posts.length > 0 && (
                <div key={post.id}>
                  <Link href={`/post/${post.id}`}>
                    <div className="flex items-center gap-2 rounded-lg border border-backGroundActiveBorder bg-backGroundHover p-1 hover:bg-backGroundActive">
                      <div className="w-16">
                        <PostImage category={post.category} />
                      </div>
                      <p className="text-lg font-bold text-textTertiary">
                        {post.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ),
          )}
          {posts.length === 0 && (
            <div className="font- text-center text-white">No Post Found</div>
          )}
        </div>
      )}
    </div>
  );
}
