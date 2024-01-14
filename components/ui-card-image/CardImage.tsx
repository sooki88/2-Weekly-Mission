import Image from "next/image";
import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type CardImageProps = {
  imageSource: string;
  // isZoomedIn: boolean;
  alt: string;
};

export const CardImage = ({ imageSource, alt }: CardImageProps) => {
  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <Image
          fill
          objectFit="cover"
          src={imageSource ?? "/images/card-default.png"}
          alt={alt}
        />
      </div>
    </div>
  );
};
