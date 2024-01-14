import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "../util/constant";
import Image from "next/image";

const cx = classNames.bind(styles);

// react에서 제공하는 fowardRef라는 함수가 있습니다.

// 부모컴포넌트에서 받은 ref를 자식 컴포넌트에게 전달하는데 사용됩니다. 일반적으로 React 컴포넌트는 ref를 prop으로 전달할 수가 없는데, 이때 forwardRef가 필요합니다.
// forwardRef를 사용하는 경우는 예를들어,
// 부모컴포넌트가 자식 컴포넌트 내의 특정 입력 필드에 포커스를 맞추거나,DOM에 접근할 필요가 있을 때 쓰입니다.

// export const Footer = forwardRef<HTMLElement>((_, ref) =>{}
// 예시 코드에서 매개변수 _ 부분은 매개변수가 있지만 안쓰겠다. 라는 의미로 생각하시면 좋습니다.
// forwardRef에 첫번째 인자 자리는 props를 받도록 되어있는데 props를 안받고 그냥 두번째 인자인 ref만 사용하겠다. 라는 의미입니다.

export const Footer = (_: any, ref: any) => {
  return (
    <footer ref={ref} className={cx("container")}>
      <div className={cx("items")}>
        <span className={cx("copyright")}>©codeit - 2023</span>
        <div className={cx("links")}>
          <a className={cx("link")} href={ROUTE.privacy}>
            Privacy Policy
          </a>
          <a className={cx("link")} href={ROUTE.FAQ}>
            FAQ
          </a>
        </div>
        <div className={cx("sns")}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              fill
              src="images/facebook.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              fill
              src="images/twitter.svg"
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              fill
              src="images/youtube.svg"
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              fill
              src="images/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
