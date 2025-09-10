import { HTMLProps } from "react";
import { Container } from "./styles";

export type CustomButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset"; // ? idk typescript was complaining and i didnt care enough
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

type ButtonProps = CustomButtonProps &
  Omit<HTMLProps<HTMLButtonElement>, "size">;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  size = "medium",
  disabled = false,
  ...props
}) => {
  return (
    <Container
      $variant={variant}
      $fullWidth={fullWidth}
      $size={size}
      $disabled={disabled}
      {...(props.href ? { as: "a" } : {})}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Button;
