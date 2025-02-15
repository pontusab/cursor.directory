import { SearchInput } from "./search-input";
import { SearchList } from "./search-list";
import { SearchTitle } from "./search-title";

export function Search() {
  return (
    <div className="w-full max-w-[600px] mx-auto mb-16 px-4">
      <SearchTitle />

      <div className="sticky top-4 z-10">
        <SearchInput />
      </div>

      <SearchList />
    </div>
  );
}
