import type { GitHubUser } from "../types/github";

interface UserCardProps {
  user: GitHubUser;
  isFavorite: boolean;
  onToggleFavorite: (user: GitHubUser) => void;
}

export default function UserCard({ user, isFavorite, onToggleFavorite }: UserCardProps) {
  return (
    <div className="flex justify-between items-center p-3 border rounded shadow-sm bg-white">
      <div className="flex items-center gap-3">
        <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
        <a href={user.html_url} target="_blank" rel="noreferrer" className="font-semibold text-blue-600 hover:underline">
          {user.login}
        </a>
      </div>
      <button
        onClick={() => onToggleFavorite(user)}
        className={`px-3 py-1 rounded ${isFavorite ? "bg-yellow-400" : "bg-gray-200"}`}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );
}
