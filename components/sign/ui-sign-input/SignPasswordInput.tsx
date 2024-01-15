import styles from "./SignInput.module.scss";
import classNames from "classnames/bind";
import { SignPasswordInputProps, isPasswordValid } from "./constant";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export const SignPasswordInput = ({
  values,
  setValues,
  passwordErrorMessageRef,
  passwordErrorInputRef,
  showPasswordError,
  setShowPasswordError,
}: SignPasswordInputProps) => {
  const router = useRouter();
  const path = router.pathname;

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleBlur = () => {
    setShowPasswordError(true);

    if (values.password === "") {
      passwordErrorMessageRef.current.textContent = "비밀번호를 입력해주세요.";
      return;
    }

    if (path === "/signup" && !isPasswordValid(values.password)) {
      passwordErrorMessageRef.current.textContent =
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
      return;
    }

    if (values.password) {
      return setShowPasswordError(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={cx("sign-input-box", "sign-password")}>
      <label htmlFor="password" className={cx("sign-input-label")}>
        비밀번호
      </label>
      <input
        id="password"
        type={showPassword ? "text" : "password"}
        className={cx("sign-input", { "sign-input-error": showPasswordError })}
        placeholder={
          path === "/signin"
            ? "비밀번호를 입력해 주세요."
            : "영문, 숫자를 조합해 8자 이상 입력해 주세요."
        }
        ref={passwordErrorInputRef}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p
        id="email-error-massage"
        className={cx("error-message", {
          "error-message-on": showPasswordError,
        })}
        ref={passwordErrorMessageRef}
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
