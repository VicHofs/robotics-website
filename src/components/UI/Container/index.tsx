import type { ReactNode } from "react";
import { StyledContainer } from "./styles";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
