import React from "react";
import { search } from "../../services/search";
import Layout from "../../src/components/Layout/Layout";
import SearchResults from "../../src/components/Pages/Search/SearchResults";
import { SearchProps, SearchPropsResults } from "../../src/interfaces/search";



const Search = ({ query, results }: SearchPropsResults) => {
    
  return (
    <Layout title={`Results for ${query}`}>
      <SearchResults query={query} results={results}/>
    </Layout>
  );
};

export default Search;

export async function getServerSideProps(context:any) {
  
  const { query } = context;
  const { q = "" } = query;
  console.log(q);

  const { results } = await search({ query: q });

  return {
    props: {
      query: q,
      results,
    },
  };
}
