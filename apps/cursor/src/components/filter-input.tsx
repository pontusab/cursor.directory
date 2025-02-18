import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface FilterInputProps {
  onSearch: (term: string) => void;
  clearSearch: () => void;
}

export const FilterInput = ({ onSearch, clearSearch }: FilterInputProps) => {
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
    <div className="relative ml-3 mr-2 mb-3">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border-none focus:!ring-0 focus:!border-none bg-transparent text-primary outline-none !placeholder-[#606060] border border-border text-sm text-[#606060] pl-0"
      />
      {searchTerm ? (
        <X
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#606060] cursor-pointer"
          size={16}
          onClick={handleClear}
        />
      ) : (
        <Search
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#606060]"
          size={16}
        />
      )}
    </div>
  );
};
