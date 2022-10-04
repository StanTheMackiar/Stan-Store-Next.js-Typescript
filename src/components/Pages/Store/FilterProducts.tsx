import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useContext } from "react";
import styles from "../../../../styles/Store.module.scss";
import FiltersContext, {
  FiltersContextType,
} from "../../../context/FiltersContext";

const FilterProducts = () => {
  const { price, onPriceChange } = useContext(FiltersContext) as FiltersContextType;

  return (
    <div className={styles.filterProducts}>
      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="priceFrom">
          <strong>Price From</strong>
        </InputLabel>
        <OutlinedInput
          size="small"
          id="priceFrom"
          type="number"
          name="from"
          value={price.from}
          onChange={(e) => onPriceChange(e.target.name, e.target.value)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="priceFrom"
        />
      </FormControl>

      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="priceTo">
          <strong>Price To</strong>
        </InputLabel>
        <OutlinedInput
          size="small"
          id="priceTo"
          type="number"
          name="to"
          value={price.to}
          onChange={(e) => onPriceChange(e.target.name, e.target.value)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="priceTo"
        />
      </FormControl>
    </div>
  );
};

export default FilterProducts;
