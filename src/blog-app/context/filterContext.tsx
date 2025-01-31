"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import data from "../database/dummy.json";
import { PostType } from "../types";

type FilterType = {
  posts: PostType[];
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

export const categories = ["sanat", "bilim", "teknoloji", "felsefe"];
export const FilterContext = createContext<FilterType | null>(null);

export function FilterContextsProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<string[]>(categories);
  const [searchParam, setSearchParam] = useState("");

  const posts = data.filter((post) =>
    searchParam.length >= 1 // Arama parametresi varsa
      ? post.title.toLowerCase().includes(searchParam) && // Başlıkta ara
        filters.includes(post.category) // Seçili kategoride ara
      : true && filters.length > 0 // Seçili kategori varsa
        ? filters.includes(post.category)
        : false,
  );

  return (
    <FilterContext.Provider
      value={{ posts, filters, setFilters, searchParam, setSearchParam }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) throw Error("Context Have To Use In Context Provider");
  const { posts, filters, setFilters, searchParam, setSearchParam } = context;

  return { posts, filters, setFilters, searchParam, setSearchParam };
}
