import { useContext } from "react";
import styles from "../../../../styles/Card.module.scss";
import { CardContext } from "./Card";

interface Props {
  className?: string,
  style?: React.CSSProperties,
  title?: string,
}

export const TitleCard = ({className, style, title}: Props) => {
    const {product} = useContext(CardContext)

  return (
    <p className={`${styles.name} ${className}`} style={style}>{title ? title : product.title}</p>
  )
}
