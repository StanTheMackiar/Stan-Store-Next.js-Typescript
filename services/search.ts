import algoliasearch from "algoliasearch";
import { SearchProps } from "../src/interfaces/search";

const client = algoliasearch("R6HU3W5CKS", "9fffcd7d71f8f81c8793a28aa7cda28c");
const index = client.initIndex("Products");


  export const search = async ({query}: SearchProps) => {
    const { hits } = await index.search(query as any, {
      attributesToRetrieve: ["id", "title", "image","category", "price"],
        hitsPerPage: 20,
      });
      return { results: hits }
  }