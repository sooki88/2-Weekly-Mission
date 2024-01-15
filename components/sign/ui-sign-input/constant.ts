export interface ValuesProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface SignEmailInputProps {
  values: ValuesProps;
  setValues: React.Dispatch<React.SetStateAction<ValuesProps>>;
  emailErrorInputRef: any;
  emailErrorMessageRef: any;
  showEmailError: boolean;
  setShowEmailError: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignPasswordConfirmInputProps {
  values: ValuesProps;
  setValues: React.Dispatch<React.SetStateAction<ValuesProps>>;
  passwordConfirmErrorInputRef: any;
  passwordConfirmErrorMessageRef: any;
  showPasswordConfirmError: boolean;
  setShowPasswordConfirmError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function isPasswordValid(password: string) {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter =
    password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
}
