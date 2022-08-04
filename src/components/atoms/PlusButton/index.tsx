import React from "react";
import { ReactComponent as PlusIcon } from "../../../assets/icons/icon-plus.svg";
import { PlusContainer } from "./style";

const PlusButton = ({ onClickFunc }: { onClickFunc: () => void }) => {
  return (
    <PlusContainer>
      <PlusIcon onClick={onClickFunc} />
    </PlusContainer>
  );
};

export default PlusButton;
