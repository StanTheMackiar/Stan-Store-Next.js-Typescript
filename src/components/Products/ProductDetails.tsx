import { Alert, Button, Rating, Snackbar } from "@mui/material";
import React, {useContext, useState} from "react";
import { ProductType } from "../../interfaces/products";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "../../../styles/ProductDetails.module.scss";
import Image from "next/image";
import  shoppingContext, { ShoppingContextType } from "../../context/ShoppingContext";
import { Box } from "@mui/system";

const ProductDetails = ({ product }: ProductType) => {
  
  const {addToCart, openCart} = useContext(shoppingContext) as ShoppingContextType
  const [openAlert, setOpenAlert] = useState(false);
  

  const handleClick = () => {
    addToCart(product.id);
    openCart();
    setOpenAlert(true);
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };


  return (
    <section className={styles.container}>
      <Box>
      <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: "left"}} >
        <Alert onClose={handleClose} color="success" severity="success" sx={{ width: '100%' }}>
          Product added successfully!
        </Alert>
      </Snackbar>
      </Box>
      <div className={styles.imageContainer}>
        <Image
          width={400}
          height={400}
          objectFit="contain"
          src={product.image}
          alt={`Image of product "${product.image}"`}
        />
      </div>

      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{product.title}</h2>
        <h4 className={styles.price}>$ {product.price}</h4>
        <h4 className={styles.subtitle}>Description</h4>
        <p className={styles.description}>{product.description}</p>

        <Button
          onClick={handleClick}
          color="secondary"
          sx={{ p: "1rem" }}
          variant="contained"
          disableElevation
          endIcon={<AddShoppingCartIcon />}>
          ADD TO CART
        </Button>

        

        <div className={styles.ratingContainer}>
          <p>Rate this product: </p>
          <Rating
            sx={{ justifyContent: "center" }}
            name="simple-controlled"
            precision={0.5}
            value={product?.rating?.rate}
          />
          <span className={styles.ratingInfo}>
            Average: {product?.rating?.rate} ({product?.rating?.count})
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
