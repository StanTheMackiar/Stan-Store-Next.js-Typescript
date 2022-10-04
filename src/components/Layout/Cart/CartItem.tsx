import React, { useContext } from "react";
import styles from "../../../../styles/Cart.module.scss";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartType } from "../../../interfaces/products";
import shoppingContext, {
  ShoppingContextType,
} from "../../../context/ShoppingContext";
import CloseIcon from "@mui/icons-material/Close";

const CartItem = ({ product }: CartType) => {
  const { delFromCart, delAllFromCart, addFromCart } = useContext(
    shoppingContext
  ) as ShoppingContextType;

  let { title, price, amount, id, image } = product;

  return (
    <>
    <IconButton
    sx={{ position: "absolute", right: "3px", }}
    size="small"
    onClick={() => delAllFromCart(id)}>
    <CloseIcon  color="primary"/>
  </IconButton>
    <div className={styles.cartItemContainer}>
      <div className={styles.image}>
        <Image
          src={image}
          width={100}
          height={100}
          objectFit="contain"
          alt={`Image of product ${title}`}
        />
      </div>
      <div className={styles.cartItemInformation}>
        <div className={styles.titleProduct}>
          <h4>{title}</h4>
          <div className={styles.quantity}>
            <p>Quantity: {amount}</p>
            <span className={styles.span}>$ {price * amount}</span>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <div>
            <IconButton
              onClick={() => addFromCart(id)}
              color="primary">
              <AddIcon />
            </IconButton>
            <IconButton
              onClick={() => delFromCart(id)}
              color="primary">
              <RemoveIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartItem;
