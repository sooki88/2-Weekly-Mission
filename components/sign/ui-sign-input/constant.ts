export interface ValuesProps {
  email: string;
  password: string;
}

export interface SignEmailInputProps {
  values: ValuesProps;
  setValues: React.Dispatch<React.SetStateAction<ValuesProps>>;
}
