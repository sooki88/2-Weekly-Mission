import { resetErr, printErr } from "./signIn_email.js";
import { userPw, eyeImg, pwShowHide, pwEmptyChk, pwChk } from "./signIn_pw.js";

const userPw2 = document.querySelector('#user-password-confrim');

/* 비밀번호 확인 일치하는지 체크 함수 */
function pw2Chk () {
  if( userPw2.value && userPw2.value !== userPw.value ) {
    resetErr( userPw2 );
    printErr( userPw2, '비밀번호가 일치하지 않아요.');
  } else if ( userPw2.value && userPw2.value == userPw.value ) {
    resetErr( userPw2 );
  }
}

/* 이벤트 등록하기 */
userPw2.addEventListener ('focusout', pw2Chk);

export { userPw2, pw2Chk };