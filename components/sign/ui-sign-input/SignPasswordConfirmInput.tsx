import styles from "./SignInput.module.scss";
import classNames from "classnames/bind";
import { SignPasswordConfirmInputProps } from "./constant";
import Image from "next/image";
import { useState } from "react";

const cx = classNames.bind(styles);

export const SignPasswordConfirmInput = ({
  values,
  setValues,
  passwordConfirmErrorMessageRef,
  passwordConfirmErrorInputRef,
  showPasswordConfirmError,
  setShowPasswordConfirmError,
}: SignPasswordConfirmInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, passwordConfirm: e.target.value });
  };

  const handleBlur = () => {
    setShowPasswordConfirmError(true);

    if (!values.passwordConfirm) {
      passwordConfirmErrorMessageRef.current.textContent =
        "비밀번호를 입력해주세요.";
      return;
    }

    if (values.passwordConfirm !== values.password) {
      passwordConfirmErrorMessageRef.current.textContent =
        "비밀번호가 다릅니다.";
      return;
    }

    if (values.passwordConfirm && values.passwordConfirm === values.password) {
      return setShowPasswordConfirmError(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={cx("sign-input-box", "sign-password")}>
      <label htmlFor="passwordConfirm" className={cx("sign-input-label")}>
        비밀번호 확인
      </label>
      <input
        id="passwordConfirm"
        type={showPassword ? "text" : "password"}
        className={cx("sign-input", {
          "sign-input-error": showPasswordConfirmError,
        })}
        placeholder="비밀번호와 일치하는 값을 입력해 주세요."
        ref={passwordConfirmErrorInputRef}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p
        id="email-error-massage"
        className={cx("error-message", {
          "error-message-on": showPasswordConfirmError,
        })}
        ref={passwordConfirmErrorMessageRef}
      ></p>
      <button
        id="password-toggle"
        type="button"
        className={cx("eye-button")}
        onClick={togglePasswordVisibility}
      >
        <Image
          fill
          src={showPassword ? "/images/eye-on.svg" : "/images/eye-off.svg"}
          alt="눈 아이콘 이미지"
        />
      </button>
    </div>
  );
};
