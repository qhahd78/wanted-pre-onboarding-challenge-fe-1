import React from "react";
import { StyledContentTextBox, StyledTitleTextBox } from "./style";

interface TextBoxProperties {
  textboxName: string;
  placeholder?: string;
  textValue?: string;
}

const TitleTextBox = ({ textboxName, textValue }: TextBoxProperties) => {
  return <StyledTitleTextBox name={textboxName} value={textValue} />;
};

const ContentTextBox = ({ textboxName, textValue }: TextBoxProperties) => {
  return <StyledContentTextBox name={textboxName} value={textValue} />;
};

export { TitleTextBox, ContentTextBox };
