import { PostContent, PostImage } from "@/blog-app/ui/post";
import data from "../../../blog-app/database/dummy.json";
import SearchInput from "@/blog-app/ui/searchInput";

export default function Post({ params }: { params: { id: string } }) {
  const { ...post } = data.filter((post) => post.id === params.id);

  if (!post) return <div>No Post Found </div>;

  return (
    <div>
      <div className="m-4 flex items-center justify-end">
        <SearchInput className="h-10 w-[300px]" type="portable" />
      </div>
      <div className="mx-16 flex gap-3 py-20">
        <div className="w-1/2">
          <PostImage category={post[0].category} />
        </div>
        <div className="group w-1/2">
          <PostContent post={post[0]} />
        </div>
      </div>
    </div>
  );
}
