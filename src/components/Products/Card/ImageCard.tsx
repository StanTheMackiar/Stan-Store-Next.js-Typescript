import Image from "next/image";
import { CSSProperties, useContext } from "react";
import styles from "../../../../styles/Card.module.scss";
import { CardContext } from "./Card";

interface Props {
  className?: string;
  image?: string;
  newTag?: boolean;
  newTagSize?: 'small' | 'medium' | 'large';
  style?: CSSProperties;
}

export const ImageCard = ({ className, image, newTag = false, newTagSize, style }: Props) => {

  const { product } = useContext(CardContext);

  const tagSize = {
    'small': 30,
    'medium': 50,
    'large': 70,
  }

  let imgToShow: string;

  if (image) imgToShow = image
  else if (product.image) imgToShow = product.image
  else imgToShow = '/img/no-image.jpg';

  return (
    <>
      {newTag && (
        <div className={styles.tag}>
          <Image
            width={newTagSize ? tagSize[newTagSize] : 50}
            height={newTagSize ? tagSize[newTagSize] : 50}
            objectFit="contain"
            alt="new tag"
            src="/img/new.png"
          />
        </div>
      )}
      <div className={`${styles.image} ${className}`} style={style}>
        <Image
          width={200}
          height={200}
          objectFit="contain"
          src={imgToShow}
          alt={`Image product title ${product.title}`}
        />
      </div>
    </>
  );
};
