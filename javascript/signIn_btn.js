import { userPw } from "./signIn_pw.js";
import { userEmail } from "./signIn_email.js";

const signInBtn = document.querySelector('#signin-btn');

/* 로그인 체크 함수 */
function signInChk () {
  if( userEmail.value === "test@codeit.com" && userPw.value === "codeit101" ) { window.location.href = "../folder.html";
  } else {
    resetErr(userEmail);
    resetErr(userPw);
    printErr(userEmail, '이메일을 확인해주세요.');
    printErr(userPw, '비밀번호를 확인해주세요.');
  }
}

/* 이벤트 등록하기 */
signInBtn.addEventListener( 'click', signInChk );
signInBtn.addEventListener( 'click', function(){
  e.preventDefault();
} );