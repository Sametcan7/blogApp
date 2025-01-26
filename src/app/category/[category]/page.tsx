import { Post } from "@/blog-app/ui/post";
import data from "../../../blog-app/database/dummy.json";

export default function Category({ params }: { params: { category: string } }) {
  const { category } = params;
  const posts = data.filter((post) => post.category === category);
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div className="my-4 mx-8" key={post.id}>
          <Post post={post} className="flex" width="w-[200px]" />
        </div>
      ))}
    </div>
  );
}
