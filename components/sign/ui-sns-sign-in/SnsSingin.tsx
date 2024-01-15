import Link from "next/link";
import styles from "./SnsSingin.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

export const SnsSingin = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("sns-text")}>소셜 로그인</span>
      <div className={cx("sns-links")}>
        <Link
          href="https://www.google.com"
          className={cx("sns-link", "google-link")}
        >
          <div className={cx("google-img")}>
            <Image fill src="/images/google.png" alt="구글 아이콘" />
          </div>
        </Link>
        <Link
          href="https://www.kakaocorp.com/page"
          className={cx("sns-link", "kakao-link")}
        >
          <div className={cx("kakao-img")}>
            <Image fill src="/images/kakao.svg" alt="카카오 아이콘" />
          </div>
        </Link>
      </div>
    </div>
  );
};
