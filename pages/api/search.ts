// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { search } from "../../services/search";
import { SearchProps, SearchResults } from "../../src/interfaces/search";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>){

  const { q } = req.query;

  const { results }:any = await search({query: q} as SearchProps);

  return res.status(200).json(results);
}
