import styles from "./CardList.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
}

export const CardList = ({ children }: Props) => {
  return <div className={cx("container")}>{children}</div>;
};
