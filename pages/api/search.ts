// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { search } from "../../services/search";
import { SearchProps } from "../../src/interfaces/search";


export default async function handler(req: NextApiRequest, res: NextApiResponse){

  console.log(req)

  const { q } = req.query;

  const { results } = await search({query: q} as SearchProps);

  return res.status(200).json(results);
}
