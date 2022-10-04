import { useRouter } from "next/router";
import { createContext, useState} from "react";
import { Products } from "../interfaces/products";
import { SearchResults } from "../interfaces/search";

export type FiltersContextType = {
  price: {from: string, to: string},
  results: SearchResults[] | []
  onPriceChange: (a: string, b: string) => void,
  filterProducts: (a: Products[]) => Products[] | [],
  handleSearch: (e: any) => void,
  handleListClick: () => void,
}

const FiltersContext = createContext<FiltersContextType | null>(null);


interface ProviderProps {
  children: JSX.Element
}

const FiltersProvider = ({ children }: ProviderProps) => {
  const router = useRouter();
  const [price, setPrice] = useState({ from: "", to: "" });
  const [results, setResults] = useState([] as SearchResults[] | []);


  const onPriceChange = (name:string, value:string) => {
   setPrice({
      ...price,
      [name]: value,
    });
  };

  const filterProducts = (products: Products[]) => {

    const priceFrom: number = parseInt(price.from)
    const priceTo: number = parseInt(price.to)


    if (priceFrom < 0 && priceTo < 0) return products;
    if (priceFrom && !priceTo || !priceFrom && priceTo) return products.filter(product => product.price >= priceFrom);
    // if (!priceFrom && priceTo) return products.filter(product => product.price <= priceTo);
    if (priceFrom && priceTo) return products.filter(product => product.price >= priceFrom && product.price <= priceTo);

    return products;
  };




  const handleSearch = (e: any) => {
    const search = e.target.value;

    if (search.length > 0) {
      if (e.keyCode === 13) {
        setResults([])
        return router.push(`/search?q=${search}`);
      }
      fetch(`/api/search?q=${search}`)
        .then((res) => res.json())
        .then((searchResults: SearchResults[]) => {
          setResults(searchResults);
        });
    } else setResults([]);
  };

  const handleListClick = () => {
    setResults([])
  }

  const data = {
    price,
    filterProducts,
    onPriceChange,
    handleSearch,
    handleListClick,
    results,
  };

  return (
    <FiltersContext.Provider value={data}>{children}</FiltersContext.Provider>
  );
};


export { FiltersProvider };
export default FiltersContext
