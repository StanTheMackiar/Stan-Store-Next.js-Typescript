
export interface SearchResults {
  id: number,
  title: string,
  image: string,
  category: string,
  price: number
}

export interface SearchProps {
  query: string | string[]
}
export interface Results {
  results: {
    
  }
}

export type SearchPropsResults = {
    results: SearchResults[],
    query: string,
  }

