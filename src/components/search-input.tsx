import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchInputProps {
  onSearch: (term: string) => void;
}

export const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    onSearch(term);
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
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
    </div>
  );
};