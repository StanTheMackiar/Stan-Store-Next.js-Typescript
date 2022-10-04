import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Card.module.scss";
import { Products } from "../../interfaces/products";
import { convertToPath } from "../../utility/utils";

type CardType = {
  product: Products,
  tag?: boolean,
}

const Card = ({ product, tag = false }: CardType) => {


  return (
    <>
      <div
        key={product.id}
        className={styles.container}>
        <Link href={`/store/${convertToPath(product.title)}`}>
          <a>
            {tag && (
              <div className={styles.tag}>
                <Image
                  width={50}
                  height={50}
                  objectFit='contain'
                  alt="new tag"
                  src="/img/new.png"
                />
              </div>
            )}
            <div className={styles.image}>
              <Image
                width={200}
                height={200}
                objectFit="contain"
                src={product.image}
                alt={`Image product title ${product.title}`}
              />
            </div>
            <p className={styles.name}>{product.title}</p>
            <p className={styles.price}>{`$ ${product.price}`}</p>
          </a>
        </Link>

      </div>
    </>
  );
};

export default Card;
