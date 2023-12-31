import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import { MouseEvent, ReactNode } from "react";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  onMouseOver?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
}

export const Card = ({ children, onMouseOver, onMouseLeave }: Props) => {
  return (
    <div
      className={cx("container")}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
