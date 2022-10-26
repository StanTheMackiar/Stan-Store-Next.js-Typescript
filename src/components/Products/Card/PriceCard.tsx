import { useContext } from "react";
import styles from "../../../../styles/Card.module.scss";
import { CardContext } from "./Card";

interface Props {
  className?: string,
  price?: string,
  style?: React.CSSProperties,
}


export const PriceCard = ({className, price, style}: Props) => {
    
    const {product} = useContext(CardContext)

  return (
    <p className={`${styles.price} ${className}`} style={style}>{`$ ${price ? price : product.price}`}</p>
  )
}
