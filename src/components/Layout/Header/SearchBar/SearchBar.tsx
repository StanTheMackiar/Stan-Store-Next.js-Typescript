import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBarStyles";
import Link from "next/link";
import styles from "../../.././../../styles/Search.module.scss";
// import { convertToPath } from "../../../../lib/utils";
import { useContext } from "react";
// import FiltersContext from "../../../../context/FiltersContext";
import { Box } from "@mui/system";
import FiltersContext, { FiltersContextType } from "../../../../context/FiltersContext";
import { convertToPath } from "../../../../utility/utils";
import { Paper } from "@mui/material";


const SearchBar = () => {
  const { handleSearch, handleListClick, results } = useContext(FiltersContext) as FiltersContextType;

  return (
    <Search>
      <Box>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onKeyUp={handleSearch}
          onChange={handleSearch}
          placeholder="Search for name or category..."
          type="search"
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
      {Boolean(results.length) && (
        <Paper className={styles.searchList} square>
          <ul>
            {results.map((result) => {
              return (
                <li
                  onClick={handleListClick}
                  key={result.id + "result"}
                  className={styles.listContainer}>
                  <Link href={`/store/${convertToPath(result.title)}`}>
                    <a>{result.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Paper>
      )}
    </Search>
  );
};

export default SearchBar;
