import { PUBLIC_API_URL } from "$env/static/public";
import type { ApiError } from "../types/errors";
import type { UserFile } from "../types/user";

export type UploadFileData = {
  file: File;
  name: string;
};

export async function uploadFile(data: UploadFileData, accessToken: string) {
  const formData = new FormData();
  formData.set("file", data.file);
  formData.set("name", data.name);

  const resp = await fetch(`${PUBLIC_API_URL}/api/upload`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const result = await resp.json();

  if ("error" in result) {
    return result as ApiError;
  }

  return result as UserFile;
}
