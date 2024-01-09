import Link from "next/link";
import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { CardImage } from "../ui-card-image/CardImage";
import { CardContent } from "../ui-card-content/CardContent";

const cx = classNames.bind(styles);

interface EditableCardProps {
  url: string;
  imageSource: string;
  createdAt: string;
  elapsedTime: string;
  description: string;
  alt: string;
}

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: EditableCardProps) => {
  return (
    <Link href={url}>
      <div className={cx("card-container")}>
        <CardImage imageSource={imageSource} alt={alt} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
        />
      </div>
    </Link>
  );
};
