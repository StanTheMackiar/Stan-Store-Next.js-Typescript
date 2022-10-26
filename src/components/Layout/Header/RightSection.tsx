import React, { useContext } from "react";
import styles from "../../../../styles/Header.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import shoppingContext, {
  ShoppingContextType,
} from "../../../context/ShoppingContext";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { Badge } from "@mui/material";
import { ColorModeContext } from "../../../context/ColorModeContext";

const RightSection = () => {
  const { cartState, openCart } = useContext(
    shoppingContext
  ) as ShoppingContextType;

  const theme: any = useTheme();

  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <section className={styles.containerRight}>
      <nav className={styles.nav}>
        <Link href="/#about">
          <a>About Us</a>
        </Link>
      </nav>

      <IconButton onClick={toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>

      <Badge
        badgeContent={cartState.totalProducts}
        sx={{margin: "0 1.5rem 0 0.5rem"}}
        color="secondary">
        <ShoppingCartIcon
          onClick={openCart}
          sx={{ cursor: "pointer"}}
        />
      </Badge>
    </section>
  );
};

export default RightSection;
