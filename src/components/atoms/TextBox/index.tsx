import React from "react";
import { StyledContentTextBox, StyledTitleTextBox } from "./style";

interface TextBoxProperties {
  textboxName: string;
  placeholder?: string;
}

const TitleTextBox = ({ textboxName, placeholder }: TextBoxProperties) => {
  return <StyledTitleTextBox name={textboxName} placeholder={placeholder} />;
};

const ContentTextBox = ({ textboxName, placeholder }: TextBoxProperties) => {
  return <StyledContentTextBox name={textboxName} placeholder={placeholder} />;
};

export { TitleTextBox, ContentTextBox };
