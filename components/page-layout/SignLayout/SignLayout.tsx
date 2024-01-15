import { ReactNode } from "react";
import styles from "./SignLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface SignLayoutProps {
  header: ReactNode;
  signForm: ReactNode;
}

export const SignLayout = ({ header, signForm }: SignLayoutProps) => {
  return (
    <div className={cx("container")}>
      {header}
      {signForm}
    </div>
  );
};
