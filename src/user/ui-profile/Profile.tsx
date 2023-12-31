import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface UserProfile {
  email: string;
  profileImageSource: string;
}

interface Props {
  profile: UserProfile;
}

export const Profile = ({ profile }: Props) => {
  return (
    <div className={cx("container")}>
      <img
        className={cx("image")}
        src={profile.profileImageSource}
        alt="프로필 이미지"
      />
      <span className={cx("email")}>{profile.email}</span>
    </div>
  );
};
