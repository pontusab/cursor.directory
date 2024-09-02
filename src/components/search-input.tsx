import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchInputProps {
  onSearch: (term: string) => void;
  clearSearch: () => void;
}

export const SearchInput = ({ onSearch, clearSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    onSearch(term);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
    clearSearch();
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border-none focus:!ring-0 focus:!border-none bg-transparent"
      />
      {searchTerm ? (
        <X
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          size={16}
          onClick={handleClear}
        />
      ) : (
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      )}
    </div>
  );
};