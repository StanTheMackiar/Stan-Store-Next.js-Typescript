import React from "react";
import Layout from "../../Layout/Layout";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Checkout = () => {
  return (
    <section style={{margin: "2rem"}}>
      <h1>Purchase Approved</h1>
      <p>
        Thank you for your purchase, the estimated shipping time is usually 2 to
        5 business days
      </p>
      <CheckCircleOutlineIcon color="primary" sx={{fontSize: "15rem"}}/>
      </section>
  );
};

export default Checkout;
