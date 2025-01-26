import Link from "next/link";

export default function Header() {
  return (
    <div className="relative flex items-center justify-between border-b-2 border-backGroundActiveBorder px-14 py-8 shadow-lg shadow-backGroundActive">
      <Link
        href="/"
        className="border-b-2 border-t-2 border-blue-700 p-2 text-2xl font-extrabold text-blue-800 transition-colors hover:mx-[-2px] hover:border-b-0 hover:border-l-2 hover:border-r-2   hover:border-t-0 hover:bg-blue-200 hover:duration-200 active:bg-blue-700 active:text-white"
      >
        BLOG APP
      </Link>
      <div className="absolute left-[50%] flex translate-x-[-50%] gap-8 text-xl text-gray-600">
        <Link href="/category/sanat"> Sanat</Link>
        <Link href="/category/bilim">Bilim</Link>
        <Link href="/category/teknoloji">Teknoloji</Link>
        <Link href="/category/felsefe">Felsefe</Link>
      </div>
      <div className="flex items-center">
        <span className="material-symbols-outlined mr-4 text-textSecondary">
          language
        </span>
        <button className="rounded-full bg-blue-400 p-4 text-lg text-white">
          Contact us
        </button>
      </div>
    </div>
  );
}
