import { SignLayout } from "@/components/page-layout/SignLayout/SignLayout";
import { SignHeader } from "@/components/sign/ui-sign-header/SignHeader";
import { SignUpForm } from "@/components/sign/ui-sign-up-form/SignUpForm";

export default function Signup() {
  return <SignLayout header={<SignHeader />} signForm={<SignUpForm />} />;
}
