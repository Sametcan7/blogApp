"use client";
import Link from "next/link";
import { useFilterContext } from "../context/filterContext";
import { PostContent, PostImage } from "../ui/post";

export default function PostList() {
  const { filters, posts } = useFilterContext();

  return (
    <div className="mx-14 min-h-screen">
      {posts.length >= 1 ? (
        <div className="grid grid-cols-3 auto-rows-auto gap-8 pb-20">
          {posts.map((post, index) =>
            filters.length >= 4 && index === 0 ? (
              <div
                key={post.id}
                className="flex group active:border-blue-800 hover:shadow-blue-200 hover:shadow-xl ease-out  active:bg-blue-300 transition-all   duration-150 gap-8 mt-4 gro mb-12 col-[1/-1] hover:bg-blue-100 hover:border hover:border-blue-200 rounded-3xl p-[16px]"
              >
                <Link href={`/post/${post.id}`} className="relative w-5/12">
                  <span className="text-blue-800 hidden z-10 absolute group-hover:block   left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl  material-symbols-outlined">
                    highlight_mouse_cursor
                  </span>
                  <div className=" group-hover:opacity-60">
                    <PostImage category={post.category} />
                  </div>
                </Link>
                <div className=" w-7/12 my-4">
                  <PostContent post={post} />
                </div>
              </div>
            ) : (
              <div
                className="p-4 hover:shadow-blue-200 hover:shadow-xl group active:border-blue-800  active:bg-blue-300 transition-all ease-out  duration-75  hover:bg-blue-100 hover:border hover:border-blue-200 rounded-3xl "
                key={post.id}
              >
                <Link className="relative" href={`/post/${post.id}`}>
                  <span className="text-blue-800 hidden z-10 absolute group-hover:block   left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl   material-symbols-outlined">
                    highlight_mouse_cursor
                  </span>
                  <div className=" group-hover:opacity-60">
                    <PostImage category={post.category} />
                  </div>
                </Link>
                <div className="px-6 mt-4">
                  <PostContent post={post} />
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="text-center font-xl text-2xl my-4">No Post Found</div>
      )}
    </div>
  );
}
