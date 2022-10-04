import { Button, Fade, Modal, Slide } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import CartItem from "./CartItem";
import OrderInfo from "./OrderInfo";
import styles from "../../../../styles/Cart.module.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Backdrop from "@mui/material/Backdrop";
import shoppingContext, {
  ShoppingContextType,
} from "../../../context/ShoppingContext";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Image from "next/image";

const Cart = () => {
  const { cartState, clearCart, closeCart } = useContext(
    shoppingContext
  ) as ShoppingContextType;

  const { cart, totalAmount, totalProducts, isOpen } = cartState;

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={closeCart}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Slide
          direction="left"
          in={isOpen}>
          <Paper
            elevation={3}
            square
            className={styles.container}>
            <header>
              <h2>Shopping Cart</h2>
              <CloseIcon
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  left: "5px",
                  top: "5px",
                }}
                onClick={closeCart}
                fontSize="medium"
                color="primary"
              />
            </header>
            
            {cart.length > 0 ? (
              <>
              <section className={styles.cart}>
                {cart.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                  />
                ))}
                <Button
                  size="small"
                  className={styles.buttons}
                  onClick={() => clearCart()}
                  startIcon={<DeleteForeverIcon />}>
                  Clean Cart
                </Button>
                </section>

                <OrderInfo
                  clearCart={clearCart}
                  closeCart={closeCart}
                  totalProducts={totalProducts}
                  totalAmount={totalAmount}
                />
              </>
            ) : (
              <section className={styles.emptyCart}>
                <h3>Cart is empty</h3>
                    <Image src="/img/empty-cart.png" width={250} height={250} objectFit="contain" alt={"Empty Cart"} ></Image>
                    <p>There is nothing here</p>
                <Link href="/store">
                  <a>
                    <Button
                      onClick={closeCart}
                      variant="contained">
                      GO TO BUY
                    </Button>
                  </a>
                </Link>
              </section>
            )}
          </Paper>
        </Slide>
      </Modal>
    </>
  );
};

export default Cart;
