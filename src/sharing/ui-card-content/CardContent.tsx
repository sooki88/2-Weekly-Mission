import styles from "./CardContent.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  elapsedTime: string;
  description: string; // api가 성공하면 무조건 넘어오는 값이면 필수값
  createdAt: string;
  isHovered: boolean;
}

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
}: Props) => {
  return (
    <div className={cx("container", { hovered: isHovered })}>
      <span className={cx("elapsed-time")}>{elapsedTime}</span>
      <p className={cx("description")}>{description}</p>
      <span className={cx("created-at")}>{createdAt}</span>
    </div>
  );
};
