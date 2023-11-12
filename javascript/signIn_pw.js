import { resetErr, printErr } from "./signIn_email.js";

const userPw = document.querySelector('#user-password');
const eyeImg = document.querySelector('.eye-image');

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

/* 눈이미지와 비번 감추기 */
function pwShowHide(){
  
  if( userPw.type === "password"){  
    eyeImg.src = "./img/eye-on.svg"
    userPw.type = "text";
  } else if (userPw.type === "text"){
    eyeImg.src = "./img/eye-off.svg"
    userPw.type = "password";
  }
}


/* 이벤트 등록하기 */
userPw.addEventListener ('focusout', pwEmptyChk );
userPw.addEventListener ('focusout', pwChk );
eyeImg.addEventListener ('click', (e)=>{ e.preventDefault(); } );
eyeImg.addEventListener ('click', pwShowHide );


export { userPw, eyeImg, pwShowHide, pwEmptyChk, pwChk };












