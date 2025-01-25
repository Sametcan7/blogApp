import { PostContent, PostImage } from "@/blog-app/ui/post";
import data from "../../../blog-app/database/dummy.json";

export default function Post({ params }: { params: { id: string } }) {
  const { ...post } = data.filter((post) => post.id === params.id);

  if (!post) return <div>No Post Found </div>;

  return (
    <div className="flex gap-3 mx-16 py-4">
      <div className="w-1/2">
        <PostImage category={post[0].category} />
      </div>
      <div className="w-1/2">
        <PostContent post={post[0]} />
      </div>
    </div>
  );
}
