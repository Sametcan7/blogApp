import Image from "next/image";
import art from "../images/art.jpg";
import science from "../images/science.jpg";
import technology from "../images/technology.jpg";
import philosophy from "../images/philosophy.jpg";
import { PostType } from "../types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type LinkForImageProps = {
  children: React.ReactNode;
  postId: string;
  width?: string;
};

type PostContentProps = {
  post: PostType;
  className?: string;
  width?: string;
};

export function Post({ post, className, width }: PostContentProps) {
  return (
    <div
      className={twMerge(
        "group rounded-3xl p-4 transition-all duration-200 ease-out hover:border hover:border-blue-200 hover:bg-blue-100 hover:shadow-xl hover:shadow-blue-200 active:border-blue-800 active:bg-blue-300",
        className,
      )}
      key={post.id}
    >
      <LinkForImage width={width} postId={post.id}>
        <PostImage category={post.category} />
      </LinkForImage>
      <PostContent className="mt-4 px-6" post={post} />
    </div>
  );
}

export function PostImage({ category }: { category: string }) {
  return (
    <div className="group-hover:opacity-60">
      <Image
        className="aspect-[4/3] rounded-3xl"
        src={
          (category === "sanat" && art) ||
          (category === "bilim" && science) ||
          (category === "teknoloji" && technology) ||
          (category === "felsefe" && philosophy) ||
          ""
        }
        alt=""
      />
    </div>
  );
}

export function PostContent({ post, className }: PostContentProps) {
  return (
    <div className={className}>
      <p className="mb-2 text-lg text-blue-500 first-letter:uppercase">
        {post.category}
      </p>
      <p className="mb-2 text-2xl font-bold text-blue-950">{post.title}</p>
      <p className="text-lg text-gray-600">{post.description}</p>
    </div>
  );
}

function LinkForImage({ children, postId, width }: LinkForImageProps) {
  return (
    <Link
      className={`${width && width} relative `}
      href={`/post/${postId}`}
    >
      <span className="material-symbols-outlined absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 text-9xl text-blue-800 group-hover:block">
        highlight_mouse_cursor
      </span>
      {children}
    </Link>
  );
}
