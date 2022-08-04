import React from "react";
import { DeleteButton } from "../../atoms/Button";
import {
  DetailContentBox,
  DetailContentContainer,
  DetailContentText,
  DetailDate,
  DetailTitle,
  DetailTitleBox,
} from "./style";

interface DetailContentProperties {
  title: string;
  content: string;
}

const DetailContent = ({ title, content }: DetailContentProperties) => {
  return (
    <DetailContentContainer>
      <DetailTitleBox>
        <DetailTitle>{title}</DetailTitle>
        <DetailDate>2022-07-24T14:15:55.537Z</DetailDate>
      </DetailTitleBox>

      <DetailContentBox>
        <DetailContentText>{content}</DetailContentText>
      </DetailContentBox>
      <DeleteButton buttonName='deleteBtn' buttonHeight={60}>
        삭제
      </DeleteButton>
    </DetailContentContainer>
  );
};

export default DetailContent;
