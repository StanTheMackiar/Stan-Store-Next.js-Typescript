import { Button, Input, TextField } from "@mui/material";
import React from "react";
import styles from "../../../../styles/Cart.module.scss";

interface OrderInfoProps {
  totalAmount: number;
  totalProducts: number;
}

const OrderInfo = ({ totalAmount, totalProducts }: OrderInfoProps) => {
  return (
    <div className={styles.orderInfoContainer}>
      <p>
        Total products: <span className={styles.span}>{totalProducts}</span>
      </p>
      <p>
        Subtotal: <span className={styles.span}>$ {totalAmount}</span>
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
        Total <span className={styles.span}>$ {totalAmount}</span>
      </p>
      <div>
        <Button
          sx={{ width: "100%" }}
          disableElevation
          variant="contained"
          color="secondary">
          Checkout
        </Button>
        <p>* Shipping cost calculated at checkout</p>
      </div>
    </div>
  );
};

export default OrderInfo;
