import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { Card } from "../../sharing/ui-card/Card";
import { CardContent } from "../../sharing/ui-card-content/CardContent";
import { CardImage } from "../../sharing/ui-card-image/CardImage";
import { Popover } from "../../sharing/ui-popover/Popover";

const cx = classNames.bind(styles);

type Props = {
  [key: string]: string;
};

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [visiblePopover, setVisiblePopover] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClickKebab = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVisiblePopover(true);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
        <button
          className={cx("star")}
          onClick={(event) => event.preventDefault()}
        >
          <img src="images/star.svg" alt="즐겨찾기를 나타내는 별" />
        </button>
        <button className={cx("kebab")} onClick={handleClickKebab}>
          <img src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
        </button>
        {visiblePopover && (
          <div className={cx("popover")}>
            <Popover />
          </div>
        )}
      </Card>
    </a>
  );
};
