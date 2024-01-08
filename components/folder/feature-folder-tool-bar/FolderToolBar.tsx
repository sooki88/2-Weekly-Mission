import { SetStateAction, useState } from "react";
import { FolderButton } from "../ui-folder-button/FolderButton";
import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { AddFolderButton } from "../ui-add-folder-button/AddFolderButton";
import { BUTTONS, MODALS_ID } from "./constant";
import { IconAndTextButton } from "@/components/ui-icon-and-text-button/IconAndTextButton";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

interface FoldersData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: { count: number };
}

interface FolderToolBarProps {
  folders: FoldersData[];
  selectedFolderId: number | "all";
  setSelectedFolderId: React.Dispatch<SetStateAction<number | "all">>;
  // folder.tsx에서 넘겨준 setSelectedFolderId인데 set함수는 어떻게 해야할까요?
}

export const FolderToolBar = ({
  folders,
  selectedFolderId,
  setSelectedFolderId,
}: FolderToolBarProps) => {
  const router = useRouter();
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const folderName =
    "all" === selectedFolderId
      ? "전체"
      : folders?.find(({ id }) => id === selectedFolderId)?.name ?? "";

  const handleFolderClick = (folderId: number | "all") => {
    if (folderId === "all") {
      setSelectedFolderId("all");
      router.push("/folder?q=all");
    }
    setSelectedFolderId(folderId);
    router.push(`/folder?q=${folderId}`);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("folders")}>
        <FolderButton
          key="all"
          text="전체"
          onClick={() => handleFolderClick("all")}
          // onClick={() => onFolderClick("all")}
          isSelected={"all" === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => handleFolderClick(id)}
            // onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div className={cx("add-button")}>
        <AddFolderButton onClick={() => setCurrentModal(MODALS_ID.addFolder)} />
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      {selectedFolderId !== "all" && (
        <div className={cx("buttons")}>
          {BUTTONS.map(({ text, iconSource, modalId }) => (
            <IconAndTextButton
              key={text}
              text={text}
              iconSource={iconSource}
              onClick={() => setCurrentModal(modalId)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
