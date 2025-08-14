interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="GitHub 유저 검색..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2 border rounded"
    />
  );
}
