import styles from "./SignLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const SignLayout = () => {
  return <div className={cx("container")}></div>;
};
