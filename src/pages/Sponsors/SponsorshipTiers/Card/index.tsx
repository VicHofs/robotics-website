import type React from "react";
import type { ReactNode } from "react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardContent,
  StyledCardFooter,
} from "./styles";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

interface CardHeaderProps {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export const CardHeader = ({
  children,
  bgColor,
  textColor,
  className,
}: CardHeaderProps) => {
  return (
    <StyledCardHeader
      $bgColor={bgColor}
      $textColor={textColor}
      className={className}
    >
      {children}
    </StyledCardHeader>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardContent = ({
  children,
  className,
  style,
}: CardContentProps) => {
  return (
    <StyledCardContent className={className} style={style}>
      {children}
    </StyledCardContent>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className }: CardFooterProps) => {
  return <StyledCardFooter className={className}>{children}</StyledCardFooter>;
};
