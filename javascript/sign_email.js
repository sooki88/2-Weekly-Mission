const userEmail = document.querySelector('#user-email');
const userInfo = { email: "test@codeit.com", pw: "codeit101", }

/* 빨간 테두리와 에러 문구 리셋 함수 */
function resetErr (el){
  const errText = el.parentNode.querySelector('.fail-message');
  if(errText){ 
    errText.remove();
    el.classList.remove('red-border');
  }
}

/* 빨간 테두리와 에러 문구 추가 함수 */
/* 근데 이게 적용되면 입력칸 색이 바뀝니다ㅜ */
function printErr( el, text ) {
  el.classList.add('red-border');
  const span = document.createElement('span');
  span.classList.add('fail-message');
  span.textContent = text;
  el.after(span);
}

/* 이메일 입력여부 체크 함수 */
function emailEmptyChk () {
  if( userEmail.value.length === 0 ) {
    resetErr( userEmail );
    printErr( userEmail, '이메일을 입력해주세요.');
  }  
}

/* 이메일 유효성 체크 함수 */
function emailChk () {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  if( userEmail.value && !regex.test(userEmail.value) ){
    resetErr( userEmail );
    printErr( userEmail, '올바른 이메일 주소가 아닙니다.');
  } else if (userEmail.value && regex.test(userEmail.value)) {
    resetErr( userEmail );
  }
}

/* 사용중인 이메일 체크 함수 */
function emailDbChk () {
  const { email } = userInfo;
  
  if( userEmail.value === email ) {
    resetErr( userEmail );
    printErr( userEmail, '이미 사용 중인 이메일입니다.');
  } 
}

/* 이벤트 등록하기 */
userEmail.addEventListener ('focusout', emailEmptyChk );
userEmail.addEventListener ('focusout', emailChk );
userEmail.addEventListener ('focusout', emailDbChk );


export { resetErr, printErr, userInfo };