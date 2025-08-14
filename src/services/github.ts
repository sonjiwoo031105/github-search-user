import type { GitHubUser } from "../types/github";

export async function searchUsers(query: string): Promise<GitHubUser[]> {
  if (!query) return [];

  const res = await fetch(`https://api.github.com/search/users?q=${query}`);
  if (!res.ok) throw new Error("API 호출 실패");
  
  const data = await res.json();
  return data.items;
}
