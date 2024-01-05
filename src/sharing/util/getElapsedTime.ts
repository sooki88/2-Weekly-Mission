import { TIME_IN_MILLISECONDS } from "./constant";
// import { isValid } from "date-fns";

export const getElapsedTime = (createdAt: string): string => {
  const now = Number(new Date());
  const createdAtDate = Number(new Date(createdAt));
  const elapsedTime = now - createdAtDate;
  const { minute, hour, day, month, year } = TIME_IN_MILLISECONDS;

  // if (!isValid(createdAt)) {
  //   throw new Error("유효한 날짜 데이터가 아닙니다.");
  // }

  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)} years ago`;
  }
  if (year <= elapsedTime) {
    return `1 year ago`;
  }
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)} months ago`;
  }
  if (month <= elapsedTime) {
    return `1 month ago`;
  }
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)} days ago`;
  }
  if (day <= elapsedTime) {
    return `1 day ago`;
  }
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)} hours ago`;
  }
  if (hour <= elapsedTime) {
    return `1 hour ago`;
  }
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  }
  return `1 minute ago`;
};
