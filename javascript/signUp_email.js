import { resetErr, printErr, userInfo } from "./signIn_email.js";

const userEmail = document.querySelector('#user-email');

/* 사용중인 이메일 체크 함수 */
function emailDbChk () {
  const { email } = userInfo;
  
  if( userEmail.value === email ) {
    resetErr( userEmail );
    printErr( userEmail, '이미 사용 중인 이메일입니다.');
  } 
}

/* 이벤트 등록하기 */
userEmail.addEventListener ('focusout', emailDbChk );




