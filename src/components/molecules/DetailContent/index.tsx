import React from "react";
import { useState } from "react";
import { TitleTextBox, ContentTextBox } from "../../atoms/TextBox";
import {
  DetailContentBox,
  DetailContentContainer,
  DetailContentText,
  DetailDate,
  DetailEditButton,
  DetailTitle,
  DetailTitleBox,
} from "./style";

interface DetailContentProperties {
  title: string;
  content: string;
}

const DetailContent = ({ title, content }: DetailContentProperties) => {
  const [IsEdit, setIsEdit] = useState<boolean>(false);
  return (
    <DetailContentContainer>
      <DetailTitleBox>
        {IsEdit ? (
          <TitleTextBox textboxName='title' placeholder={title} />
        ) : (
          <DetailTitle>{title}</DetailTitle>
        )}
        {IsEdit ? <></> : <DetailDate>2022-07-24T14:15:55.537Z</DetailDate>}
        {IsEdit ? (
          <>
            <DetailEditButton onClick={(e) => setIsEdit(false)}>
              수정완료
            </DetailEditButton>
            <DetailEditButton>수정취소</DetailEditButton>
          </>
        ) : (
          <DetailEditButton onClick={(e) => setIsEdit(true)}>
            수정
          </DetailEditButton>
        )}
      </DetailTitleBox>
      <DetailContentBox>
        {IsEdit ? (
          <ContentTextBox textboxName='content' placeholder={content} />
        ) : (
          <DetailContentText>{content}</DetailContentText>
        )}
      </DetailContentBox>
    </DetailContentContainer>
  );
};

export default DetailContent;
