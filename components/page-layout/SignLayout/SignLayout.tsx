import { ReactNode } from "react";
import styles from "./SignLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface SignLayoutProps {
  header: ReactNode;
  signInForm: ReactNode;
}

export const SignLayout = ({ header, signInForm }: SignLayoutProps) => {
  return (
    <div className={cx("container")}>
      {header}
      {signInForm}
    </div>
  );
};
