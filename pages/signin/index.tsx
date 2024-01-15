import { SignLayout } from "@/components/page-layout/SignLayout/SignLayout";
import { SignInForm } from "@/components/sign/ui-sign-in-form/SignInForm";
import { SignHeader } from "@/components/sign/ui-sign-header/SignHeader";

export default function Signin() {
  return <SignLayout header={<SignHeader />} signInForm={<SignInForm />} />;
}
