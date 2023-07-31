import type { RequestHandler } from "./$types";

export const GET = (async ({ cookies }) => {
  cookies.delete("accessToken", {
    path: "/",
  });
  cookies.delete("refreshToken", {
    path: "/",
  });

  return new Response(JSON.stringify({ ok: true }));
}) satisfies RequestHandler;
