import styles from "./SignInput.module.scss";
import classNames from "classnames/bind";
import { SignEmailInputProps } from "./constant";
import Image from "next/image";
import { useRef, useState } from "react";

const cx = classNames.bind(styles);

export const SignPasswordInput = ({
  values,
  setValues,
}: SignEmailInputProps) => {
  const errorMessageRef = useRef(null);
  const errorInputRef = useRef(null);
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleBlur = () => {
    setShowError(true);

    if (values.password === "") {
      errorMessageRef.current.textContent = "비밀번호를 입력해주세요.";
      return;
    }

    if (values.password) {
      return setShowError(false);
    }
  };

  return (
    <div className={cx("sign-input-box", "sign-password")}>
      <label htmlFor="password" className={cx("sign-input-label")}>
        비밀번호
      </label>
      <input
        id="password"
        type="password"
        className={cx("sign-input", { "sign-input-error": showError })}
        placeholder="비밀번호를 입력해 주세요."
        ref={errorInputRef}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p
        id="email-error-massage"
        className={cx("error-message", { "error-message-on": showError })}
        ref={errorMessageRef}
      ></p>
      <button id="password-toggle" type="button" className={cx("eye-button")}>
        <Image fill src="/images/eye-off.svg" alt="눈 아이콘 이미지" />
      </button>
    </div>
  );
};
