import Link from "next/link";
import styles from "./SignHeader.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export const SignHeader = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={cx("container")}>
      <Link href="/" className={cx("logo-link")}>
        <div className={cx("header-logo")}>
          <Image fill src="/images/linkbrary.svg" alt="로고 이미지" />
        </div>
      </Link>
      {path === "/signin" ? (
        <p className={cx("header-message")}>
          회원이 아니신가요?
          <Link href="/signup" className={cx("header-link")}>
            회원 가입하기
          </Link>
        </p>
      ) : (
        <p className={cx("header-message")}>
          이미 회원이신가요?
          <Link href="/signin" className={cx("header-link")}>
            로그인 하기
          </Link>
        </p>
      )}
    </div>
  );
};
