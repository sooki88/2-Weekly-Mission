import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import IMG_close from "../../assets/close.svg";
import IMG_check from "../../assets/check.svg";
import { useState } from "react";

// npm start하면 이미지가 엑박으로 나옵니다.

const cx = classNames.bind(styles);

// interface Folder {
//   id: number;
//   created_at: string;
//   favorite: true;
//   link: {count: number}
//   name: string;
//   user_id: number;
// }

interface Props {
  modalOption: string;
  selectedCardUrl: string;
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
  folders: any;
}

export const Modal = ({
  setVisibleModal,
  modalOption,
  selectedCardUrl,
  folders,
}: Props) => {
  const [selectedFolderId, setSelectedFolderId] = useState(0);

  return (
    <div className={cx("background")}>
      {modalOption === "deleteLink" ? (
        <div className={cx("container")}>
          <div className={cx("text")}>
            <h2>폴더 삭제</h2>
            <span>{selectedCardUrl}</span>
          </div>
          <button className={cx("button_delete")}>삭제하기</button>
          <div
            className={cx("close")}
            onClick={() => {
              setVisibleModal(false);
            }}
          >
            <img src={IMG_close} alt="닫기 버튼 이미지" />
          </div>
        </div>
      ) : (
        <div className={cx("container")}>
          <div className={cx("text")}>
            <h2>폴더에 추가</h2>
            <span>{selectedCardUrl}</span>
          </div>
          <ul className={cx("folders")}>
            {folders?.map(
              ({ id, name, link }: { id: number; name: string; link: any }) => {
                return (
                  <li
                    key={id}
                    className={cx("folder")}
                    onClick={() => setSelectedFolderId(id)}
                  >
                    {name}
                    <span className={cx("count")}>{link.count}개 링크</span>
                    <img
                      className={cx(
                        id === selectedFolderId ? "check_show" : "check_hide"
                      )}
                      src={IMG_check}
                      alt="체크 이미지"
                    />
                  </li>
                );
              }
            )}
          </ul>
          <button className={cx("button_addLink")}>추가하기</button>
          <div
            className={cx("close")}
            onClick={() => {
              setVisibleModal(false);
            }}
          >
            <img src={IMG_close} alt="닫기 버튼 이미지" />
          </div>
        </div>
      )}
    </div>
  );
};
