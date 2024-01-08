import Image from "next/image";
import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler } from "react";

const cx = classNames.bind(styles);

interface AddFolderButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <div className={cx("icon")}>
        <Image fill src="/images/add.svg" alt="폴더 추가하는 더하기 버튼" />
      </div>
    </button>
  );
};
