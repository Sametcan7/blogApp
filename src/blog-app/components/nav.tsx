import Banner from "../ui/banner";
import CategoryNav from "../ui/categoryNav";
import SearchInput from "../ui/searchInput";

export default function Nav() {
  return (
    <>
      <Banner />
      <div className="relative">
        <CategoryNav />
        <SearchInput />
      </div>
    </>
  );
}
