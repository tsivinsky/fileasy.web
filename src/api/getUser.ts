import { PUBLIC_API_URL } from "$env/static/public";
import type { User } from "../types/user";

export async function getUser(accessToken: string) {
  const resp = await fetch(`${PUBLIC_API_URL}/api/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const user = await resp.json();

  return user as User;
}
