import Image from "next/image";
import art from "../images/art.jpg";
import science from "../images/science.jpg";
import technology from "../images/technology.jpg";
import philosophy from "../images/philosophy.jpg";
import { Post } from "../types";

export function PostImage({ category }: { category: string }) {
  return (
    <Image
      className="rounded-3xl aspect-[4/3] "
      src={
        (category === "sanat" && art) ||
        (category === "bilim" && science) ||
        (category === "teknoloji" && technology) ||
        (category === "felsefe" && philosophy) ||
        ""
      }
      alt=""
    />
  );
}

export function PostContent({ post }: { post: Post }) {
  return (
    <div>
      <p className="text-blue-500 text-lg first-letter:uppercase mb-2 ">
        {post.category}
      </p>
      <p className="text-2xl text-blue-950 font-bold mb-2">{post.title}</p>
      <p className="text-gray-600 text-lg">{post.description}</p>
    </div>
  );
}
