import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "../../user/data-access-user/useGetUser";
import { Footer } from "../ui-footer/Footer";
import { NavigationBar } from "../ui-navigation-bar/NavigationBar";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  isSticky: boolean;
}

interface Profile {
  email: string;
  profileImageSource: string;
}

export const Layout = ({ children, isSticky = true }: Props) => {
  const { data } = useGetUser();
  const { email, profileImageSource }: Profile = data || {};
  const profile: Profile | null = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
