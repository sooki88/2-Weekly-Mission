import { EditableCard } from "../ui-editable-card/EditableCard";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface LinksData {
  id: number;
  title: string;
  url: string;
  imageSource: string;
  createdAt: string;
  elapsedTime: string;
  description: string;
  alt: string;
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
