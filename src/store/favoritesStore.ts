import { create } from "zustand";
import type { GitHubUser } from "../types/github";

interface FavoritesState {
  favorites: GitHubUser[];
  toggleFavorite: (user: GitHubUser) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  toggleFavorite: (user) =>
    set((state) => {
      const exists = state.favorites.find((u) => u.login === user.login);
      const updated = exists
        ? state.favorites.filter((u) => u.login !== user.login)
        : [...state.favorites, user];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),
}));
