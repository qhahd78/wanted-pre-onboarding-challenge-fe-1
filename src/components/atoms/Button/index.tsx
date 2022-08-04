import { StyledButton, StyledDeleteButton } from "./style";

interface ButtonProperties {
  buttonName: string;
  buttonHeight?: number;
  children: React.ReactNode;
  onClickFunc?: (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => void;
}

const Button = ({
  buttonName,
  buttonHeight,
  children,
  onClickFunc,
}: ButtonProperties) => {
  return (
    <StyledButton
      name={buttonName}
      onClick={onClickFunc}
      buttonHeight={buttonHeight}
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
