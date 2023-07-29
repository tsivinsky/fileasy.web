import { PUBLIC_API_URL } from "$env/static/public";
import type { ApiError } from "../types/errors";

export async function deleteFile(fileId: number, accessToken: string) {
  const resp = await fetch(`${PUBLIC_API_URL}/api/files/${fileId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await resp.json();

  if ("error" in data) {
    return data as ApiError;
  }

  return data as { ok: boolean };
}
