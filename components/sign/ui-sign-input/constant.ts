export interface ValuesProps {
  email: string;
  password: string;
}

export interface SignEmailInputProps {
  values: ValuesProps;
  setValues: React.Dispatch<React.SetStateAction<ValuesProps>>;
}

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

// const isEightLettersOrMore = values.password.length >= 8;
// const hasNumberAndCharacter =
//   values.password.match(/[0-9]/g) && values.password.match(/[a-zA-Z]/gi);
