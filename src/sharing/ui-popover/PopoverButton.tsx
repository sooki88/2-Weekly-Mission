import { ReactNode, useState } from "react";
import styles from "./PopoverButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

export const PopoverButton = ({ children, onClick }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const handelMouseOver = (e: React.MouseEvent<HTMLSpanElement>) => {
    setIsHover(true);
  };

  const handelMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    setIsHover(false);
  };
  return (
    <div
      onMouseOver={handelMouseOver}
      onMouseLeave={handelMouseLeave}
      className={cx("button", { hover: isHover })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
