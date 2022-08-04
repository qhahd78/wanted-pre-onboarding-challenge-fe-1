import { StyledButton } from "./style";

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

export default Button;
