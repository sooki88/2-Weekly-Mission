import { 
  EMAIL_REGEX, 
  PW_REGEX, 
  resetErr, 
  printErr, 
  codeitApi,
} from "../utils/utils.js";

export const userEmail = document.querySelector('#user-email');
export const userPw = document.querySelector('#user-password');
export const eyeImg = document.querySelector('.eye-image');
export const signInForm = document.querySelector('.sign-form');

/* 이메일 체크 (미입력, 유효성) */
function emailChk( email ) {
  resetErr( email );
  if( email.value.length === 0 ){
    printErr( email, '이메일을 입력해주세요.');
    return false;
  }
  if( !EMAIL_REGEX.test( email.value )){
    printErr( email, '올바른 이메일 주소가 아닙니다.');
    return false;
  }
  return true;
}

userEmail.addEventListener('focusout',(e) => emailChk( e.target ) );

/* 비밀번호 체크 (미입력, 유효성) */
export function pwChk( pw ){
  resetErr( pw );
  if ( pw.value.length === 0 ){
    printErr( pw, '비밀번호를 입력해주세요.');
    return false;
  }
  if ( !PW_REGEX.test( pw.value ) ){
    printErr( pw, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  }
  return true;
}

userPw.addEventListener('focusout', (e) => pwChk( e.target ) );

/* 눈이미지와 비번 감추기 */
export function pwShowHide(){
  if( userPw.type === "password"){  
    eyeImg.src = "../img/eye-on.svg"
    userPw.type = "text";
  } else if (userPw.type === "text"){
    eyeImg.src = "../img/eye-off.svg"
    userPw.type = "password";
  }
}

eyeImg.addEventListener('click', (e)=>{ 
  e.preventDefault(); 
  pwShowHide();
} );

/* 로그인 시도 함수 */
async function signInSubmit(e) {
  e.preventDefault();

  const emailResult = emailChk( userEmail );
  const pwResult = pwChk( userPw );
  const userInfo = {
    email : userEmail.value,
    password : userPw.value,
  };
  const p = new Promise(( resolve, reject ) => {
    if( emailResult && pwResult ){
      resolve( accessApi( userInfo, 'sign-in' ) ),
      reject( 
        resetErr( userEmail ),
        resetErr( userPw ),
        printErr( userEmail, '이메일을 확인해주세요.'),
        printErr( userPw, '비밀번호를 확인해주세요.'),)
    }
  })
}

/* 로그인, 회원가입시 api 요청과 응답을 받기  */
export async function accessApi( userInfo, path ){
  try {
    const response = await fetch(`${codeitApi}/${path}`,{
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify( userInfo ),
    });
    if( response.ok ){
      const result = await response.json();
      localStorage.setItem( 'signInAccessToken', result.accessToken );
      location.href = "../folder.html";
    }
  } catch (error){
    throw new Error('실패했습니다.');
  }
}

signInForm.addEventListener( 'submit', signInSubmit );
