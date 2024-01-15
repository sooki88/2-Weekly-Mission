import styles from "./SignInput.module.scss";
import classNames from "classnames/bind";
import { SignEmailInputProps } from "./constant";

const cx = classNames.bind(styles);

export const SignEmailInput = ({ values, setValues }: SignEmailInputProps) => {
  return (
    <div className={cx("sign-input-box")}>
      <label htmlFor="email" className={cx("sign-input-label")}>
        이메일
      </label>
      <input
        id="email"
        value={values.email}
        className={cx("sign-input")}
        placeholder="이메일을 입력해 주세요."
      />
      <p id="email-error-message" className={cx("error-message")} />
    </div>
  );
};
