import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "../util/constant";
import { Cta } from "../ui-cta/Cta";
import { Profile } from "../../user/ui-profile/Profile";
import { LOGO_IMAGE, TEXT } from "./constant";

const cx = classNames.bind(styles);

interface UserProfile {
  email: string;
  profileImageSource: string;
}

interface Props {
  profile: UserProfile | null;
  isSticky: boolean;
}

export const NavigationBar = ({ profile, isSticky }: Props) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <a href={ROUTE.랜딩}>
          <img
            className={cx("logo")}
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            {/* <Cta isSmall> */}
            <Cta>
              <span className={cx("signin")}>{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
