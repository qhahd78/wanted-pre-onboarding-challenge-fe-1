import React from "react";
import { ListContentContainer, TodoDate, TodoTitle } from "./style";
import { ReactComponent as TrashIcon } from "../../../assets/icons/icon-trash.svg";

interface ListContentProperties {
  title: string;
  createdTime?: string;
  updatedTime?: string;
  className?: string;
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
      <TrashIcon width={30} />
    </ListContentContainer>
  );
};

export default ListContent;
