import React from "react";
import {
  ListContentContainer,
  NewListContentContainer,
  TodoDate,
  TodoTitle,
} from "./style";
import { ReactComponent as TrashIcon } from "../../../assets/icons/icon-trash.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/icon-check.svg";
import { ListContentInput } from "../../atoms/Input";

interface ListContentProperties {
  title?: string;
  createdTime?: string;
  updatedTime?: string;
  className?: string;
  onClickFunc?: () => void;
}

interface NewListContentProperties {
  visible?: boolean;
  onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickFunc?: () => void;
}

const ListContent = ({
  title,
  createdTime = "2022.07.07",
  updatedTime,
  className,
  onClickFunc,
}: ListContentProperties) => {
  return (
    <ListContentContainer className={className} onClick={onClickFunc}>
      <div>
        <TodoTitle>{title}</TodoTitle>
        <TodoDate>{updatedTime ? updatedTime : createdTime}</TodoDate>
      </div>
      <TrashIcon width={30} height={30} onClick={onClickFunc} />
    </ListContentContainer>
  );
};

const NewListContent = ({
  visible,
  onClickFunc,
  onChangeFunc,
}: NewListContentProperties) => {
  return (
    <NewListContentContainer visible={visible}>
      <div>
        <ListContentInput
          inputName='title'
          placeholder='제목을 입력하세요. '
          onChangeFunc={onChangeFunc}
        />
        <ListContentInput
          inputName='content'
          placeholder='세부 사항을 입력하세요. '
          onChangeFunc={onChangeFunc}
        />
      </div>
      <CheckIcon width={30} height={30} onClick={onClickFunc} />
    </NewListContentContainer>
  );
};

export { ListContent, NewListContent };
