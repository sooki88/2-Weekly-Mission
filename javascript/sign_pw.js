import { resetErr, printErr } from "./sign_email.js";

const userPw = document.querySelector('#user-password');
const userPw2 = document.querySelector('#user-password-confrim');

/* 비밀번호 입력여부 체크 함수 */
function pwEmptyChk () {
  if( userPw.value.length === 0 ) {
    resetErr( userPw );
    printErr( userPw, '비밀번호를 입력해주세요.');
  }  
}

/* 비밀번호 유효성 체크 함수 */
function pwChk () {
  let regexPw = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;

  if( userPw.value && !regexPw.test(userPw.value) ){
    resetErr( userPw );
    printErr( userPw, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  } else if (userPw.value && regexPw.test(userPw.value)) {
    resetErr( userPw );
  }
}

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
userPw.addEventListener ('focusout', pwEmptyChk );
userPw.addEventListener ('focusout', pwChk );
userPw2.addEventListener ('focusout', pw2Chk);