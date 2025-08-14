import type { GitHubUser } from "../types/github";

interface FavoritesListProps {
  favorites: GitHubUser[];
  onRemoveFavorite: (user: GitHubUser) => void;
}

export default function FavoritesList({ favorites, onRemoveFavorite }: FavoritesListProps) {
  if (favorites.length === 0) return <p className="text-gray-500 mt-2">즐겨찾기 없음</p>;

  return (
    <div className="mt-4">
      <h2 className="font-bold mb-2">즐겨찾기 목록</h2>
      <ul className="space-y-2">
        {favorites.map((user) => (
          <li key={user.login} className="flex justify-between items-center p-2 border rounded">
            <div className="flex items-center gap-2">
              <img src={user.avatar_url} alt={user.login} className="w-8 h-8 rounded-full" />
              <a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
            </div>
            <button onClick={() => onRemoveFavorite(user)} className="text-red-500 hover:underline">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
