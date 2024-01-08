import { EditableCard } from "../ui-editable-card/EditableCard";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface LinksData {
  id: number;
  created_at: string;
  updated_at: any;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

interface CardListProps {
  linksData: LinksData[];
}

export const CardList = ({ linksData }: CardListProps) => {
  return (
    <div className={cx("container")}>
      {linksData.map((link) => (
        <EditableCard key={link?.id} {...link} />
      ))}
    </div>
  );
};
