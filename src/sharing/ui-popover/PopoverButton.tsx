import { ReactNode, useState } from "react";
import styles from "./PopoverButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
}

export const PopoverButton = ({ children }: Props) => {
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
    >
      {children}
    </div>
  );
};
