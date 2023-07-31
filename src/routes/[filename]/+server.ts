import { PUBLIC_API_URL } from "$env/static/public";
import type { RequestHandler } from "./$types";

export const GET = (({fetch, params}) => {
  return fetch(`${PUBLIC_API_URL}/${params.filename}`)
}) satisfies RequestHandler
