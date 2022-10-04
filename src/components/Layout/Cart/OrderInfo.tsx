import { Button, Input, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../../../styles/Cart.module.scss";
import { limitDecimals } from "../../../utility/utils";

interface OrderInfoProps {
  totalAmount: number;
  totalProducts: number;
  clearCart: () => void;
  closeCart: () => void;
}

const OrderInfo = ({ totalAmount, totalProducts, clearCart, closeCart }: OrderInfoProps) => {

  const handleCheckOut = () => {
    clearCart();
    closeCart();
  }
  
  return (
    <div className={styles.orderInfoContainer}>
      <p>
        Total products: <span className={styles.span}>{totalProducts}</span>
      </p>
      <p>
        Subtotal: <span className={styles.span}>$ {limitDecimals(totalAmount)}</span>
      </p>
      <form>
        <Input
          sx={{ m: "0 0.5rem" }}
          size="small"
          id="discount"
          name="discount"
          placeholder="Discount code"
        />
        <Button variant="outlined" size="small" sx={{m:"0.5rem 0"}}>Apply</Button>
      </form>
     
      <p className={styles.totalOrder}>
        Total <span className={styles.span}>$ {limitDecimals(totalAmount)}</span>
      </p>
      <div>
        <Link href='/checkout'>
          <a>
        <Button
          onClick={handleCheckOut}
          sx={{ width: "100%" }}
          disableElevation
          variant="contained"
          color="secondary">
          Checkout
        </Button>
        </a>
        </Link>
        <p>* Shipping cost calculated at checkout</p>
      </div>
    </div>
  );
};

export default OrderInfo;
