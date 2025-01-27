import { Post } from "@/blog-app/ui/post";
import data from "../../../blog-app/database/dummy.json";

export default function Category({ params }: { params: { category: string } }) {
  const { category } = params;
  const posts = data.filter((post) => post.category === category);
 
  return (
    <div>
      {posts.map((post) => (
        <div className="mx-2 md:mx-8 my-4" key={post.id}>
          <Post
            post={post}
            contentClass="flex justify-between w-full items-center"
            className="flex"
            type="category"
          />
        </div>
      ))}
    </div>
  );
}
