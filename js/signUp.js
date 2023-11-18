import { 
  EMAIL_REGEX, 
  PW_REGEX, 
  resetErr, 
  printErr, 
  testUser, 
} from "./utils.js";

const userEmail = document.querySelector('#user-email');
const userPw = document.querySelector('#user-password');
const eyeImg = document.querySelector('.eye-image');
const userPw2 = document.querySelector('#user-password-confrim');

/* 사용중인 이메일 체크 함수 */
function emailDbChk () {
  const { email } = userInfo;
  
  if( userEmail.value === email ) {
    resetErr( userEmail );
    printErr( userEmail, '이미 사용 중인 이메일입니다.');
  } 
}

userEmail.addEventListener ('focusout', emailDbChk );

/* 비밀번호 확인 일치하는지 체크 함수 */
function pw2Chk () {
  if( userPw2.value && userPw2.value !== userPw.value ) {
    resetErr( userPw2 );
    printErr( userPw2, '비밀번호가 일치하지 않아요.');
  } else if ( userPw2.value && userPw2.value == userPw.value ) {
    resetErr( userPw2 );
  }
}

userPw2.addEventListener ('focusout', pw2Chk);
