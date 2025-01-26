import Banner from "../ui/banner";
import CategoryNav from "../ui/categoryNav";
import SearchInput from "../ui/searchInput";

export default function Nav() {
  return (
    <>
      <Banner />
      <div className="relative">
        <CategoryNav />
        <SearchInput className="absolute rounded-lg left-[50%] top-[0] mx-auto translate-x-[-50%] translate-y-[-75%] focus-within:shadow-lg focus-within:shadow-black" />
      </div>
    </>
  );
}
