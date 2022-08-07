import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  DetailContentBox,
  DetailContentContainer,
  DetailContentText,
  DetailDate,
  DetailEditButton,
  DetailTitle,
  DetailTitleBox,
  StyledContentTextBox,
  StyledTitleTextBox,
} from "./style";

interface DetailContentProperties {
  title?: string;
  content?: string;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  updateFunc?: (e: React.MouseEvent<HTMLButtonElement> | any) => void;
}

type Todo = {
  title?: string;
  content?: string;
};

const DetailContent = ({
  title,
  content,
  id,
  createdAt,
  updatedAt,
  updateFunc,
}: DetailContentProperties) => {
  const [IsEdit, setIsEdit] = useState<boolean>(false);
  // 초기 data State 로 저장
  const [TodoData, setTodoData] = useState<Todo>({
    title: title,
    content: content,
  });

  const [SearchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setTodoData({
      title,
      content,
    });
  }, [IsEdit, SearchParams]);

  return (
    <DetailContentContainer>
      <DetailTitleBox>
        {IsEdit ? (
          <StyledTitleTextBox
            name='title'
            value={TodoData.title}
            onChange={(e) => {
              setTodoData({ title: e.target.value });
            }}
          />
        ) : (
          <DetailTitle>{title}</DetailTitle>
        )}
        {IsEdit ? <></> : <DetailDate>{updatedAt}</DetailDate>}
        {IsEdit ? (
          <>
            <DetailEditButton
              onClick={() => {
                setIsEdit(false);
                updateFunc?.(TodoData);
              }}
            >
              수정완료
            </DetailEditButton>
            <DetailEditButton onClick={(e) => setIsEdit(false)}>
              수정취소
            </DetailEditButton>
          </>
        ) : (
          <DetailEditButton
            onClick={(e) => {
              setIsEdit(true);
              console.log(TodoData);
            }}
          >
            수정
          </DetailEditButton>
        )}
      </DetailTitleBox>
      <DetailContentBox>
        {IsEdit ? (
          <StyledContentTextBox
            name='content'
            value={TodoData.content}
            onChange={(e) => {
              setTodoData({ content: e.target.value });
              console.log(TodoData);
            }}
          />
        ) : (
          <DetailContentText>{content}</DetailContentText>
        )}
      </DetailContentBox>
    </DetailContentContainer>
  );
};

export default DetailContent;
