import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { uploadFile } from "../../../api/uploadFile";

export const POST = (async ({ request, cookies }) => {
  const accessToken = cookies.get("accessToken");
  if (!accessToken) {
    throw error(401, "No accessToken provided");
  }

  const formData = await request.formData();
  const data = await uploadFile(formData, accessToken);

  return new Response(JSON.stringify(data));
}) satisfies RequestHandler;
