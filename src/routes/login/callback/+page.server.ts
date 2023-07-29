import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";

export const load = (({ url, cookies }) => {
  const accessToken = url.searchParams.get("accessToken");
  const refreshToken = url.searchParams.get("refreshToken");

  if (!accessToken || !refreshToken) {
    throw redirect(307, "/login");
  }

  cookies.set("accessToken", accessToken, {
    expires: dayjs().add(7, "days").toDate(),
    path: "/",
  });
  cookies.set("refreshToken", refreshToken, {
    expires: dayjs().add(7, "days").toDate(),
    path: "/",
  });

  throw redirect(307, "/");
}) satisfies PageServerLoad;
