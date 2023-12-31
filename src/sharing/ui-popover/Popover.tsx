// import { ReactNode, useState } from "react";
import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import { PopoverButton } from "./PopoverButton";

const cx = classNames.bind(styles);

export const Popover = () => {
  return (
    <div className={cx("container")}>
      <PopoverButton>삭제하기</PopoverButton>
      <PopoverButton>폴더에 추가</PopoverButton>
    </div>
  );
};

// return (
//   <div className={cx("container")}>
//     <span
//       onMouseOver={handelMouseOver}
//       onMouseLeave={handelMouseLeave}
//       className={cx({ hover: isHover })}
//     >
//       삭제하기
//     </span>
//     <span
//       onMouseOver={handelMouseOver}
//       onMouseLeave={handelMouseLeave}
//       className={cx({ hover: isHover })}
//     >
//       폴더에 추가
//     </span>
//   </div>
// );
// };
