import styles from "./SignInput.module.scss";
import classNames from "classnames/bind";
import { SignEmailInputProps } from "./constant";
import { useRef, useState } from "react";
import { EMAIL_REGEX } from "./constant";

const cx = classNames.bind(styles);

export const SignEmailInput = ({ values, setValues }: SignEmailInputProps) => {
  const errorMessageRef = useRef(null);
  const errorInputRef = useRef(null);
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleBlur = () => {
    const isEmailValid = new RegExp(EMAIL_REGEX).test(values.email);
    setShowError(true);

    if (!values.email) {
      errorMessageRef.current.textContent = "이메일을 입력해주세요.";
      return;
    }

    if (!isEmailValid) {
      errorMessageRef.current.textContent = "올바른 이메일 주소가 아닙니다.";
      return;
    }

    if (values.email && isEmailValid) {
      return setShowError(false);
    }
  };

  return (
    <div className={cx("sign-input-box")}>
      <label htmlFor="email" className={cx("sign-input-label")}>
        이메일
      </label>
      <input
        id="email"
        value={values.email}
        className={cx("sign-input", {
          "sign-input-error": showError,
        })}
        placeholder="이메일을 입력해 주세요."
        ref={errorInputRef}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p
        id="email-error-message"
        className={cx("error-message", { "error-message-on": showError })}
        ref={errorMessageRef}
      ></p>
    </div>
  );
};
