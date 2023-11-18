export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const PW_REGEX = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;

export const testUser = { email: "test@codeit.com", pw: "codeit101", }

/* 빨간 테두리와 에러 문구 리셋 함수 */
export function resetErr ( el ){
  const errText = el.parentNode.querySelector( '.fail-message' );
  if( errText ){
    errText.remove();
    el.classList.remove( 'red-border' );
  }
}

/* 빨간 테두리와 에러 문구 추가 함수 */
/* 근데 이게 적용되면 입력칸 색이 바뀝니다 -> (크롬)브라우저의 문제 */
export function printErr( el, text ) {
  el.classList.add('red-border');
  const span = document.createElement('span');
  span.classList.add('fail-message');
  span.textContent = text;
  el.after(span);
}
