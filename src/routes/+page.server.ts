import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getUser } from "../api/getUser";

export const load = (async ({ cookies }) => {
  const accessToken = cookies.get("accessToken");

  if (!accessToken) {
    throw redirect(307, "/login");
  }

  try {
    const user = await getUser(accessToken);

    return {
      user,
      accessToken,
    };
  } catch(err) {
    cookies.delete("accessToken", {
      path: "/",
    });
    cookies.delete("refreshToken", {
      path: "/",
    });
    throw redirect(307, "/login")
  }
}) satisfies PageServerLoad;
