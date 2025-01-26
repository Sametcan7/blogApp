import Image from "next/image";
import art from "../images/art.jpg";
import science from "../images/science.jpg";
import technology from "../images/technology.jpg";
import philosophy from "../images/philosophy.jpg";
import { PostType } from "../types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import { Users } from "../context/filterContext";
// import Author from "./author";

const Author = dynamic(() => import("./author"), {
  ssr: false,
  loading: () => <Loading />,
});

type LinkForImageProps = {
  children: React.ReactNode;
  postId: string;
  width?: string;
};

type PostContentProps = {
  post: PostType;
  className?: string;
  width?: string;
  contentClass?: string;
  author?: Users;
};

export function Post({
  post,
  author,
  className,
  contentClass,
  width,
}: PostContentProps) {
  return (
    <div
      className={twMerge(
        "group rounded-3xl p-4 transition-colors duration-300 hover:m-[-1px] hover:border hover:border-backGroundHoverBorder hover:bg-backGroundHover hover:shadow-xl hover:shadow-backGroundActive active:border-backGroundActiveBorder active:bg-backGroundActive",
        className,
      )}
      key={post.id}
    >
      <LinkForImage width={width} postId={post.id}>
        <PostImage category={post.category} />
      </LinkForImage>
      <PostContent contentClass={contentClass} author={author} post={post} />
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

export function PostContent({ post, author, contentClass }: PostContentProps) {
  return (
    <div className={` ${contentClass ? contentClass : "mt-4"} px-6`}>
      <div>
        <Link href={`/category/${post.category}`}>
          <p className="mb-2 inline-block rounded-lg text-lg text-textLink first-letter:uppercase group-hover:underline">
            {post.category}
          </p>
        </Link>
        <p className="mb-2 text-2xl font-bold text-textSecondary">
          {post.title}
        </p>
        <p className="text-lg text-textPrimary">{post.description}</p>
      </div>
      <div>
        <Author author={author} />
      </div>
    </div>
  );
}

function LinkForImage({ children, postId, width }: LinkForImageProps) {
  return (
    <Link className={`${width && width} relative`} href={`/post/${postId}`}>
      <span
        className={`${width === "w-[200px]" ? "text-6xl" : "text-9xl"} material-symbols-outlined absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 text-blue-800 group-hover:block`}
      >
        highlight_mouse_cursor
      </span>
      {children}
    </Link>
  );
}

function Loading() {
  return (
    <div className="flex h-full w-full items-center p-4">
      <span className="material-symbols-outlined animate-spin text-4xl text-blue-700">
        sync
      </span>
    </div>
  );
}
