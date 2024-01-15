export interface ValuesProps {
  email: string;
  password: string;
}

export interface SignEmailInputProps {
  values: ValuesProps;
  setValues: React.Dispatch<React.SetStateAction<ValuesProps>>;
  emailErrorInputRef: any;
  emailErrorMessageRef: any;
  showEmailError: boolean;
  setShowEmailError: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignPasswordInputProps {
  values: ValuesProps;
  setValues: React.Dispatch<React.SetStateAction<ValuesProps>>;
  passwordErrorInputRef: any;
  passwordErrorMessageRef: any;
  showPasswordError: boolean;
  setShowPasswordError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
