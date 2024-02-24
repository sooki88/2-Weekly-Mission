import Image from "next/image";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { Cta } from "../ui-cta/Cta";
import { ChangeEvent, FormEvent, useState } from "react";
import { AddLinkModal } from "../ui-add-link-modal/AddLinkModal";

const cx = classNames.bind(styles);

interface FoldersData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: { count: number };
}

interface LinkFormProps {
  folders: FoldersData[];
}

// export const LinkForm = ({ folders }: LinkFormProps) => {
export const LinkForm = () => {
  const [linkUrl, setLinkUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className={cx("container")}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("input-box")}>
          <div className={cx("icon")}>
            <Image fill src="images/link.svg" alt="링크 아이콘" />
          </div>
          <input
            className={cx("input")}
            type="text"
            placeholder="링크를 추가해 보세요"
            value={linkUrl}
            onChange={handleChange}
          />
        </div>
        <button className={cx("button")} type="submit">
          <Cta>추가하기</Cta>
        </button>
      </form>
    </div>
  );
};
