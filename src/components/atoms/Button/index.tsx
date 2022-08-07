import { StyledButton, StyledDeleteButton } from "./style";

interface ButtonProperties {
  buttonName: string;
  buttonHeight?: number;
  children: React.ReactNode;
  onClickFunc?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  idDisabled?: boolean;
}

const Button = ({
  buttonName,
  buttonHeight,
  children,
  onClickFunc,
  idDisabled,
}: ButtonProperties) => {
  return (
    <StyledButton
      name={buttonName}
      onClick={onClickFunc}
      buttonHeight={buttonHeight}
      disabled={idDisabled}
    >
      {children}
    </StyledButton>
  );
};

const DeleteButton = ({
  buttonName,
  buttonHeight,
  children,
  onClickFunc,
}: ButtonProperties) => {
  return (
    <StyledDeleteButton buttonHeight={buttonHeight}>
      {children}
    </StyledDeleteButton>
  );
};

export { Button, DeleteButton };
