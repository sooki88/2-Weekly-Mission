import styles from "./SignUpForm.module.scss";
import classNames from "classnames/bind";
import { SignEmailInput } from "../ui-sign-input/SignEmailInput";
import { useRef, useState } from "react";
import { SignPasswordInput } from "../ui-sign-input/SignPasswordInput";
import { SignPasswordConfirmInput } from "../ui-sign-input/SignPasswordConfirmInput";
import { instance } from "@/components/util/instance";
import { useRouter } from "next/router";
import { SnsSingin } from "../ui-sns-sign-in/SnsSingin";

const cx = classNames.bind(styles);

export const SignUpForm = () => {
  const router = useRouter();
  const path = router.pathname;
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const emailErrorMessageRef = useRef(null);
  const passwordErrorMessageRef = useRef(null);
  const passwordConfirmErrorMessageRef = useRef(null);
  const emailErrorInputRef = useRef(null);
  const passwordErrorInputRef = useRef(null);
  const passwordConfirmErrorInputRef = useRef(null);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showPasswordConfirmError, setShowPasswordConfirmError] =
    useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await instance("/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (!response.ok) {
        throw Error();
      }

      const { data } = await response.json();
      const accessToken = data?.accessToken;
      if (!accessToken) {
        alert("토큰이 없습니다.");
        return;
      }
      localStorage.setItem("accessToken", accessToken);
      router.push("/folder");
    } catch {
      emailErrorMessageRef.current.textContent = "이메일을 확인해주세요";
      passwordErrorMessageRef.current.textContent = "비밀번호를 확인해주세요.";
      setShowEmailError(true);
      setShowPasswordError(true);
    }
  };

  return (
    <div className={cx("container")}>
      <form className={cx("sign-form")} onSubmit={handleSubmit}>
        <div className={cx("sign-inputs")}>
          <SignEmailInput
            values={values}
            setValues={setValues}
            emailErrorInputRef={emailErrorInputRef}
            emailErrorMessageRef={emailErrorMessageRef}
            showEmailError={showEmailError}
            setShowEmailError={setShowEmailError}
          />
          <SignPasswordInput
            values={values}
            setValues={setValues}
            passwordErrorMessageRef={passwordErrorMessageRef}
            passwordErrorInputRef={passwordErrorInputRef}
            showPasswordError={showPasswordError}
            setShowPasswordError={setShowPasswordError}
          />
          <SignPasswordConfirmInput
            values={values}
            setValues={setValues}
            passwordConfirmErrorMessageRef={passwordConfirmErrorMessageRef}
            passwordConfirmErrorInputRef={passwordConfirmErrorInputRef}
            showPasswordConfirmError={showPasswordConfirmError}
            setShowPasswordConfirmError={setShowPasswordConfirmError}
          />
        </div>
        {path === "/signin" ? (
          <button type="submit" className={cx("cta")}>
            로그인
          </button>
        ) : (
          <button type="submit" className={cx("cta")}>
            회원가입
          </button>
        )}
      </form>
      <SnsSingin />
    </div>
  );
};
