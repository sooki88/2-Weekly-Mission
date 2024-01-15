import Image from "next/image";
import styles from "./SignInForm.module.scss";
import classNames from "classnames/bind";
import { Cta } from "@/components/ui-cta/Cta";
import Link from "next/link";

const cx = classNames.bind(styles);

export const SignInForm = () => {
  return (
    <div className={cx("container")}>
      <form className={cx("sign-form")}>
        <div className={cx("sign-inputs")}>
          <div className={cx("sign-input-box")}>
            <label htmlFor="email" className={cx("sign-input-label")}>
              이메일
            </label>
            <input id="email" className={cx("sign-input")} />
            <p id="email-error-message" className={cx("error-message")} />
          </div>
          <div className={cx("sign-input-box", "sign-password")}>
            <label htmlFor="password" className={cx("sign-input-label")}>
              비밀번호
            </label>
            <input id="password" type="password" className={cx("sign-input")} />
            <p id="email-error-massage" className={cx("error-message")} />
            <button
              id="password-toggle"
              type="button"
              className={cx("eye-button")}
            >
              {/* <div className={cx("eye-button-img")}> */}
              <Image fill src="/images/eye-off.svg" alt="눈 아이콘 이미지" />
              {/* </div> */}
            </button>
          </div>
        </div>
        <button type="submit" className={cx("cta")}>
          로그인
        </button>
      </form>
      <div className={cx("sns-box")}>
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
    </div>
  );
};
