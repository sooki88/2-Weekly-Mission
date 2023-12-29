import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "../../user/data-access-user/useGetUser";
import { Footer } from "../../sharing/ui-footer/Footer";
import { NavigationBar } from "../../sharing/ui-navigation-bar/NavigationBar";

const cx = classNames.bind(styles);

export const Layout = ({ children, isSticky = true }) => {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
