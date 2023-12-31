import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);

interface Props {
  imageSource: string;
  alt?: string;
  isZoomedIn: boolean;
}

export const CardImage = ({ imageSource, alt, isZoomedIn }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={cx("container", { zoomin: isZoomedIn })}
      // alt={alt}
    />
  );
};

/* 
alt를 사용하면 div 엘리먼트가 alt 속성을 가지지 않기때문에 아래와 같은 에러가 발생해서 주석처리했습니다.
Type '{ style: { backgroundImage: `url(${string})`; }; className: string; alt: string | undefined; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'alt' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  */
