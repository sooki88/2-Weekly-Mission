import Image from "next/image";
import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";

const cx = classNames.bind(styles);

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCloseClick: (e: MouseEventHandler<HTMLButtonElement>) => void;
}

export const SearchBar = ({
  value,
  onChange,
  onCloseClick,
}: SearchBarProps) => {
  return (
    <div className={cx("container")}>
      <input
        className={cx("input")}
        type="search"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <div className={cx("search-icon")}>
        <Image fill src="/images/search.svg" alt="검색창의 돋보기 아이콘" />
      </div>
      {value && (
        <button className={cx("close")} onClick={onCloseClick}>
          <Image fill src="/images/close.svg" alt="삭제 버튼" />
        </button>
      )}
    </div>
  );
};
