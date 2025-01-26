"use client";
import { categories, useFilterContext } from "../context/filterContext";
import { Post } from "../ui/post";

export default function PostList() {
  const { filters, posts } = useFilterContext();
  return (
    <div className="mx-14 min-h-screen">
      {posts.length >= 1 ? (
        <div className="grid auto-rows-auto grid-cols-3 gap-8 pb-20">
          {posts.map((post, index) =>
            filters.length >= categories.length && index === 0 ? (
              <div className="col-[1/-1] mb-12 mt-4" key={post.id}>
                <Post
                  post={post}
                  className=" flex gap-8 p-[16px] duration-150"
                  width="w-1/2"
                />
              </div>
            ) : (
              <div key={post.id}>
                <Post post={post} />
              </div>
            ),
          )}
        </div>
      ) : (
        <div className="font-xl my-4 text-center text-2xl">No Post Found</div>
      )}
    </div>
  );
}
