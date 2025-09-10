import styled from "styled-components";
import { CustomButtonProps } from ".";
import { Dollarize } from "@utils/types";

type ButtonStyleSource = Pick<
  Required<CustomButtonProps>,
  "variant" | "fullWidth" | "size" | "disabled"
>;

type ContainerProps = Dollarize<ButtonStyleSource>;

const sizes: Record<ContainerProps["$size"], string | number> = {
  small: "0.5rem",
  medium: "1rem",
  large: "2rem",
};

export const Container = styled.button<ContainerProps>`
  // fixes for as="a"
  text-decoration: none;
  text-align: center;

  // add width: 100%; if fullWidth
  ${({ $fullWidth }) => ($fullWidth ? "width: 100%;" : "")}
  ${({ $disabled }) => ($disabled ? "opacity: 0.5; pointer-events: none;" : "")}

  cursor: pointer;
  box-sizing: border-box;
  place-content: center;
  place-items: center;
  color: ${({ $variant, theme }) =>
    $variant === "primary"
      ? theme.colors.contrastStrong
      : $variant === "secondary"
        ? "white"
        : "white"};
  background-color: ${({ $variant, theme }) =>
    $variant === "primary"
      ? theme.colors.secondary
      : $variant === "secondary"
        ? theme.colors.contrastStrong
        : "transparent"};
  padding: 1rem 2rem;
  font-size: ${({ $size }) => sizes[$size]};
  font-weight: 600;
  border: none;
  border-radius: 5px;
  outline: ${({ $variant }) =>
    $variant === "outline" ? "1px solid white" : "none"};

  transition: all 150ms linear;

  &:hover,
  &:focus {
    ${({ $variant }) =>
      $variant === "outline"
        ? `background-color: #ffffff50;` // TODO: rethink outline, current approach just blanks it out on hover
        : `filter: brightness(0.9);`}
  }
`;
