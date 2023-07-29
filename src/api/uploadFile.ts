import { PUBLIC_API_URL } from "$env/static/public";
import type { ApiError } from "../types/errors";
import type { UserFile } from "../types/user";

export async function uploadFile(formData: FormData, accessToken: string) {
  const resp = await fetch(`${PUBLIC_API_URL}/api/upload`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await resp.json();

  if ("error" in data) {
    return data as ApiError;
  }

  return data as UserFile;
}
