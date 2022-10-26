import Link from "next/link";
import { createContext, CSSProperties, ReactElement } from "react";
import { Products } from "../../../interfaces/products";
import { convertToPath } from "../../../utility/utils";
import styles from "../../../../styles/Card.module.scss";

interface Props {
  children?: ReactElement | ReactElement[],
  className?: string;
  product: Products,
  style?: CSSProperties;
  tag?: boolean,
}

export const CardContext = createContext({} as {product: Products})

export const Card = ({ children, className, product, style, tag = false, }: Props) => {


  return (
    <CardContext.Provider value={{
      product
    }}>
      <div
        className={`${styles.container} ${className}`}
        style={style}
        >
        <Link href={`/store/${convertToPath((product.title).trim())}`}>
          <a>
            {children}        
          </a>
        </Link>

      </div>
    </CardContext.Provider>
  );
};

