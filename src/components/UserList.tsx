import type { GitHubUser } from "../types/github";
import UserCard from "./UserCard";

interface UserListProps {
  users: GitHubUser[];
  favorites: GitHubUser[];
  onToggleFavorite: (user: GitHubUser) => void;
}

export default function UserList({ users, favorites, onToggleFavorite }: UserListProps) {
  if (users.length === 0) return <p className="text-gray-500">검색 결과가 없습니다.</p>;

  return (
    <div className="space-y-2">
      {users.map((user) => (
        <UserCard
          key={user.login}
          user={user}
          isFavorite={favorites.some((fav) => fav.login === user.login)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
