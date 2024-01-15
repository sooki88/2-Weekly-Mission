import Link from "next/link";
import styles from "./SignHeader.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

export const SignHeader = () => {
  return (
    <div className={cx("container")}>
      <Link href="/">
        <div className={cx("logoImg")}>
          <Image fill src="/images/linkbrary.svg" alt="로고 이미지" />
        </div>
      </Link>
      <p className={cx("header-message")}>
        회원이 아니신가요?
        <Link href="/signup" className={cx("header-link")}>
          회원 가입하기
        </Link>
      </p>
    </div>
  );
};
