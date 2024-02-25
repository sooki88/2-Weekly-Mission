// import { useFormContext } from "react-hook-form";

// function TextInput() {
//   const { register } = useFormContext();

//   return (
//     <>
//       <label htmlFor="email">이메일</label>
//       <input
//         type="text"
//         placeholder="이메일을 입력해주세요"
//         {...register("email")}
//         name="email"
//       />
//     </>
//   );
// }

// export default TextInput;

import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface TextInputProps {
  type: string;
  name: string;
  labelTitle: string;
  validate?: any;
  placeholder: string;
  errors?: any;
}

function TextInput({
  type,
  name,
  labelTitle,
  placeholder,
  validate,
  errors,
}: TextInputProps) {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={name}>{labelTitle}</label>
      <input
        type={type}
        {...register(name, validate)}
        id={name}
        placeholder={placeholder}
      />
      {errors?.[name] && <span>{errors[name]?.message}</span>}
    </>
  );
}

export default TextInput;
