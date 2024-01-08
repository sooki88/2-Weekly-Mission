import Image from "next/image";
import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler } from "react";

const cx = classNames.bind(styles);

interface IconAndTextButtonProps {
  iconSource: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const IconAndTextButton = ({
  iconSource,
  text,
  onClick,
}: IconAndTextButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <div className={cx("icon")}>
        <Image fill src={iconSource} alt={`${text} 아이콘`} />
      </div>
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
