import React from "react";
import SignupForm from "../../components/organisms/SignupForm.tsx";
import { SignupPageContainer } from "./style";

const SignupPage = () => {
  return (
    <SignupPageContainer>
      <SignupForm />
    </SignupPageContainer>
  );
};

export default SignupPage;
