import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (({ cookies }) => {
  const accessToken = cookies.get("accessToken");

  if (accessToken) {
    throw redirect(307, "/");
  }
}) satisfies PageServerLoad;
