import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { deleteFile } from "../../../api/deleteFile";

export const POST = (async ({ request, cookies }) => {
  const accessToken = cookies.get("accessToken");
  if (!accessToken) {
    throw error(401, "Not authorized");
  }

  const body = (await request.json()) as { fileId: number };

  const data = await deleteFile(body.fileId, accessToken);

  return new Response(JSON.stringify(data));
}) satisfies RequestHandler;
