import { FormProvider, useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { register } from "module";
import { loginUser, registerUser } from "@/pages/api/auth";
import { useRouter } from "next/router";

const AuthForm = () => {
  const methods = useForm({ mode: "onBlur" });
  const router = useRouter();

  const {
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    const { email, password } = data;
    const signUpform = { email, password };

    try {
      const resRegister = await registerUser(signUpform);
      if (resRegister.accessToken) {
        const resLogin = await loginUser(signUpform);
        const accessToken = resLogin.data?.accessToken;
        document.cookie = `accessToken=${accessToken}`;
        router.push("/folder");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          name="email"
          labelTitle="이메일"
          placeholder="이메일을 입력해주세요"
          validate={{
            required: "이메일을 입력해주세요",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "올바른 이메일 형식을 입력해주세요",
            },
          }}
          errors={errors}
        />
        <TextInput
          type="password"
          name="password"
          labelTitle="비밀번호"
          placeholder="비밀번호을 입력해주세요"
          validate={{
            required: "비밀번호을 입력해주세요",
            minLength: { value: 8, message: "8자 이상 입력해주세요" },
            deps: ["passwordConfirm"],
          }}
          errors={errors}
        />
        <TextInput
          type="password"
          name="passwordConfirm"
          labelTitle="비밀번호 확인"
          placeholder="비밀번호을 입력해주세요"
          validate={{
            required: "비밀번호을 입력해주세요",
            validate: (value, formValues) => {
              if (value !== formValues.password)
                return "비밀번호가 일치하지 않습니다.";
            },
          }}
          errors={errors}
        />
        <button type="submit">회원가입</button>
      </form>
    </FormProvider>
  );
};

export default AuthForm;
