// 타입스크립트에서 scss 파일을 모듈로 인식하지 못해서 에러발생
// 해결 방법으로 scss에 대한 모듈 형식을 선언해줌

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
