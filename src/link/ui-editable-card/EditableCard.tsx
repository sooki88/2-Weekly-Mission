import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { Card } from "../../sharing/ui-card/Card";
import { CardContent } from "../../sharing/ui-card-content/CardContent";
import { CardImage } from "../../sharing/ui-card-image/CardImage";
import { PopoverButton } from "../../sharing/ui-popover/PopoverButton";

const cx = classNames.bind(styles);

type Props = {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
  onDeleteClick: () => void;
  onAddClick: () => void;
  // onDeleteClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  // onAddClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  onDeleteClick,
  onAddClick,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [visiblePopover, setVisiblePopover] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClickKebab = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVisiblePopover(true);
  };
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onDeleteClick();
    console.log("삭제클릭");
    setVisiblePopover(false);
  };
  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddClick();
    console.log("에드클릭");
    setVisiblePopover(false);
  };

  return (
    <div className={cx("container")}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <CardImage
            imageSource={imageSource}
            alt={alt}
            isZoomedIn={isHovered}
          />
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
        </Card>
      </a>
      {visiblePopover && (
        <div className={cx("popover")}>
          <PopoverButton onClick={handleDeleteClick}>삭제하기</PopoverButton>
          <PopoverButton onClick={handleAddClick}>폴더에 추가</PopoverButton>
        </div>
      )}
    </div>
  );
};
