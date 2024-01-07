import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { ReactNode, RefObject } from "react";
import { NavigationBar } from "../ui-navigation-bar/NavigationBar";
// import { Footer } from "../ui-footer/Footer";

const cx = classNames.bind(styles);

interface UserDataProps {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface LayoutProps {
  userdata?: UserDataProps;
  children: ReactNode;
  isSticky?: boolean;
  // footerRef?: RefObject<HTMLElement>;
}

export default function Layout({
  userdata,
  children,
  isSticky = true,
}: // footerRef,
LayoutProps) {
  const profile = userdata
    ? { email: userdata.email, imageSource: userdata.profileImageSource }
    : null;

  if (!userdata) return <div>데이터 없음</div>;
  console.log(userdata);

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      {/* <Footer ref={footerRef} /> */}
    </div>
  );
}
