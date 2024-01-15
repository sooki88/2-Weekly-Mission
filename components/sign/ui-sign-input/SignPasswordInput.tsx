import styles from "./SignInput.module.scss";
import classNames from "classnames/bind";
import { SignEmailInputProps } from "./constant";
import Image from "next/image";

const cx = classNames.bind(styles);

export const SignPasswordInput = ({
  values,
  setValues,
}: SignEmailInputProps) => {
  return (
    <div className={cx("sign-input-box", "sign-password")}>
      <label htmlFor="password" className={cx("sign-input-label")}>
        비밀번호
      </label>
      <input
        id="password"
        type="password"
        className={cx("sign-input")}
        placeholder="비밀번호를 입력해 주세요."
      />
      <p id="email-error-massage" className={cx("error-message")} />
      <button id="password-toggle" type="button" className={cx("eye-button")}>
        <Image fill src="/images/eye-off.svg" alt="눈 아이콘 이미지" />
      </button>
    </div>
  );
};
