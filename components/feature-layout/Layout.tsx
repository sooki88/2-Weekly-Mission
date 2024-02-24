import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { ReactNode, RefObject } from "react";
import { NavigationBar } from "../ui-navigation-bar/NavigationBar";
import { UserResponse } from "@/pages/api/user";
import { ServiceResponse } from "@/pages/api/axios";

const cx = classNames.bind(styles);

interface LayoutProps {
  userdata?: ServiceResponse<UserResponse> | undefined;
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
    ? {
        email: userdata?.data.email,
        imageSource: userdata?.data.profileImageSource,
      }
    : null;

  if (!userdata) return <div>데이터 없음</div>;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      {/* <Footer ref={footerRef} /> */}
    </div>
  );
}
