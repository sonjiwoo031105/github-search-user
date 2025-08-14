"use client";
import '../App.css';
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import FavoritesList from "../components/FavoritesList";
import useDebounce from "../hooks/useDebounce";
import { searchUsers } from "../services/github";
import { useFavoritesStore } from "../store/favoritesStore";
import type { GitHubUser } from "../types/github";

export default function Home() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { favorites, toggleFavorite } = useFavoritesStore();

  useEffect(() => {
    if (!debouncedQuery) {
      setUsers([]);
      return;
    }
    setLoading(true);
    setError(null);
    searchUsers(debouncedQuery)
      .then(setUsers)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [debouncedQuery]);

  const handleRemoveFavorite = (user: GitHubUser) => toggleFavorite(user);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">GitHub 유저 검색 & 즐겨찾기</h1>
      <div className="md:flex md:gap-6">
        <div className="flex-1">
          <SearchBar query={query} setQuery={setQuery} />
          {loading && <p className="text-gray-500 mt-2">로딩중...</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <UserList users={users} favorites={favorites} onToggleFavorite={toggleFavorite} />
        </div>
        <div className="w-full md:w-1/3">
          <FavoritesList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
        </div>
      </div>
    </div>
  );
}
