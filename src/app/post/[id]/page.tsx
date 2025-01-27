import { PostContent, PostImage } from "@/blog-app/ui/post";
import data from "../../../blog-app/database/dummy.json";
import SearchInput from "@/blog-app/ui/searchInput";

export default function Post({ params }: { params: { id: string } }) {
  const { ...post } = data.filter((post) => post.id === params.id);

  if (!post) return <div>No Post Found </div>;

  return (
    <div>
      <div className="m-1 flex items-center justify-center  md:justify-end sm:m-4">
        <SearchInput className="h-10 w-[300px]" type="portable" />
      </div>
      <div className="mx-4 flex gap-3 py-8 max-md:flex-col max-md:items-center md:py-10 lg:mx-16 lg:py-20">
        <div className="w-3/4 md:w-1/2">
          <PostImage category={post[0].category} />
        </div>
        <div className="group w-3/4 md:w-1/2">
          <PostContent post={post[0]} />
        </div>
      </div>
    </div>
  );
}
