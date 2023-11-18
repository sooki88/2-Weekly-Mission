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

/* 이메일 입력여부 체크 함수 */
function emailEmptyChk () {
  if( userEmail.value.length === 0 ) {
    resetErr( userEmail );
    printErr( userEmail, '이메일을 입력해주세요.');
  }  
}

userEmail.addEventListener ('focusout', emailEmptyChk );

/* 이메일 유효성 체크 함수 */
function emailChk () {
  if( userEmail.value && !EMAIL_REGEX.test(userEmail.value) ){
    resetErr( userEmail );
    printErr( userEmail, '올바른 이메일 주소가 아닙니다.');
  } else if (userEmail.value && EMAIL_REGEX.test(userEmail.value)) {
    resetErr( userEmail );
  }
}

userEmail.addEventListener ('focusout', emailChk );

/* 비밀번호 입력여부 체크 함수 */
function pwEmptyChk () {
  if( userPw.value.length === 0 ) {
    resetErr( userPw );
    printErr( userPw, '비밀번호를 입력해주세요.');
  }  
}

userPw.addEventListener ('focusout', pwEmptyChk );

/* 비밀번호 유효성 체크 함수 */
function pwChk () {
  if( userPw.value && !PW_REGEX.test(userPw.value) ){
    resetErr( userPw );
    printErr( userPw, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  } else if (userPw.value && PW_REGEX.test(userPw.value)) {
    resetErr( userPw );
  }
}

userPw.addEventListener ('focusout', pwChk );

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

eyeImg.addEventListener ('click', (e)=>{ e.preventDefault(); } );
eyeImg.addEventListener ('click', pwShowHide );

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

signInBtn.addEventListener( 'click', signInChk );
signInBtn.addEventListener( 'click', function(){
  e.preventDefault();
} );




