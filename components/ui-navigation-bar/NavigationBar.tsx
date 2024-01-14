import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "../util/constant";
import { Cta } from "../ui-cta/Cta";
import { Profile } from "../ui-profile/Profile";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(styles);

type NavigationBarProps = {
  profile: {
    imageSource: string;
    email: string;
  } | null;
  isSticky: boolean;
};

export const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <Link href={ROUTE.landing}>
          <div className={cx("logo")}>
            <Image
              fill
              src="images/linkbrary.svg"
              alt="Linkbrary 서비스 로고"
            />
          </div>
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.signin}>
            <Cta>
              <span className={cx("signin")}>로그인</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
