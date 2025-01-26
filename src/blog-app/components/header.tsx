import Link from "next/link";

export default function Header() {
  return (
    <div className="relative flex items-center justify-between px-14 py-8">
      <Link
        href="/"
        className="text-2xl font-extrabold border-t-2  hover:border-r-2 hover:border-l-2 hover:mx-[-2px] border-b-2 hover:bg-blue-200 p-2 transition-colors hover:duration-200 hover:border-t-0 hover:border-b-0 active:text-white active:bg-blue-700 border-blue-700  text-blue-800"
      >
        BLOG APP
      </Link>
      <div className=" absolute left-[50%] translate-x-[-50%] flex gap-8 text-gray-600 text-xl">
        <p>Services</p>
        <p>Creative Studio</p>
        <p>Blog</p>
        <p>About Us</p>
      </div>
      <div className="flex items-center">
        <span className="material-symbols-outlined mr-4">language</span>
        <button className="p-4 bg-blue-400   rounded-full text-white text-lg">
          Contact us
        </button>
      </div>
    </div>
  );
}
