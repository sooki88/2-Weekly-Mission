import { 
  EMAIL_REGEX, 
  PW_REGEX, 
  resetErr, 
  printErr, 
  codeitApi,
} from "../utils/utils.js";

import {
  userEmail,
  userPw,
  signInForm,
  pwChk,
  accessApi,
} from "../signin/signIn.js";

const userPw2 = document.querySelector('#user-password-confrim');
const eyeImg2 = document.querySelector('.eye-image2');

/* 이메일 체크 (미입력, 유효성, 가입이력조회) */
async function emailChk( email ) {
  resetErr( email );
  if( email.value.length === 0 ){
    printErr( email, '이메일을 입력해주세요.');
    return false;
  }
  if( !EMAIL_REGEX.test( email.value )){
    printErr( email, '올바른 이메일 주소가 아닙니다.');
    return false;
  }
  if( email.value && EMAIL_REGEX.test( email.value ) ){
    const result = await emailDuplicateChk( userEmail, 'check-email' );
    if( !result ){
      printErr( email, '이미 사용 중인 이메일입니다.');
      return false;
    } 
  }
  return true;
}

userEmail.addEventListener('focusout',(e) => emailChk( e.target ) );

/* 이메일 중복 체크 (서버에 요청) */
async function emailDuplicateChk( email, path ){
  const inputEmail = {
    "email" : email.value,
  };
  try {
    const response = await fetch(`${codeitApi}/${path}`,{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify( inputEmail ),
    });
    if ( response.ok ){
      const result = await response.json();
      return result;
    } 
  } catch (error){
    console.log(error);
  }
};

/* 비밀번호 체크 (미입력, 유효성) */
userPw.addEventListener('focusout', (e) => pwChk( e.target ) );

/* 비밀번호 확인 체크 (미입력, 유효성, 일치성) */
export function pw2Chk( pw2 ){
  resetErr( pw2 );
  if ( pw2.value.length === 0 ){
    printErr( pw2, '비밀번호를 입력해주세요.');
    return false;
  }
  if ( !PW_REGEX.test( pw2.value ) ){
    printErr( pw2, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  }
  if ( pw2.value !== userPw.value ){
    printErr( pw2, '비밀번호가 일치하지 않아요.');
    return false;
  }
  return true;
}

userPw2.addEventListener('focusout', (e) => pw2Chk( e.target ) );

/* 눈이미지와 비번 감추기 _ 비번 확인 */
export function pw2ShowHide(e){
  if( userPw2.type === "password"){  
    eyeImg2.src = "../img/eye-on.svg"
    userPw2.type = "text";
  } else if (userPw2.type === "text"){
    eyeImg2.src = "../img/eye-off.svg"
    userPw2.type = "password";
  }
}

eyeImg2.addEventListener('click', (e)=>{ 
  e.preventDefault(); 
  pw2ShowHide();
} );

/* 회원가입 시도 함수 */
async function signInSubmit(e) {
  e.preventDefault();

  const emailResult = emailChk( userEmail );
  const pwResult = pwChk( userPw );
  const pw2Result = pw2Chk( userPw2 );
  const userInfo = {
    email : userEmail.value,
    password : userPw.value,
  };
  const p = new Promise(( resolve, reject ) => {
    if( emailResult && pwResult && pw2Result ){
      resolve( accessApi( userInfo, 'api/sign-up' ) ),
      reject( 
        printErr( userEmail, '이메일을 확인해주세요.'),
        printErr( userPw, '비밀번호를 확인해주세요.'),
        printErr( userPw2, '비밀번호를 확인해주세요.'))
    }
  })
}

signInForm.addEventListener( 'submit', signInSubmit );
