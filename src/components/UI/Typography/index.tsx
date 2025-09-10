import type React from "react";
import type { ReactNode } from "react";
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledParagraph,
  StyledText,
  StyledSmallText,
} from "./styles";

interface TypographyProps {
  children: ReactNode;
  color?: string;
  align?: "left" | "center" | "right";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  className?: string;
  style?: React.CSSProperties;
}

export const Heading1 = ({
  children,
  color,
  align,
  weight,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledHeading1
      $color={color}
      $align={align}
      $weight={weight}
      className={className}
      style={style}
    >
      {children}
    </StyledHeading1>
  );
};

export const Heading2 = ({
  children,
  color,
  align,
  weight,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledHeading2
      $color={color}
      $align={align}
      $weight={weight}
      className={className}
      style={style}
    >
      {children}
    </StyledHeading2>
  );
};

export const Heading3 = ({
  children,
  color,
  align,
  weight,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledHeading3
      $color={color}
      $align={align}
      $weight={weight}
      className={className}
      style={style}
    >
      {children}
    </StyledHeading3>
  );
};

export const Heading4 = ({
  children,
  color,
  align,
  weight,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledHeading4
      $color={color}
      $align={align}
      $weight={weight}
      className={className}
      style={style}
    >
      {children}
    </StyledHeading4>
  );
};

export const Paragraph = ({
  children,
  color,
  align,
  weight,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledParagraph
      $color={color}
      $align={align}
      $weight={weight}
      className={className}
      style={style}
    >
      {children}
    </StyledParagraph>
  );
};

export const Text = ({
  children,
  color,
  align,
  weight,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledText
      $color={color}
      $align={align}
      $weight={weight}
      className={className}
      style={style}
    >
      {children}
    </StyledText>
  );
};

export const SmallText = ({
  children,
  color,
  align,
  weight,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledSmallText
      $color={color}
      $align={align}
      $weight={weight}
      className={className}
      style={style}
    >
      {children}
    </StyledSmallText>
  );
};
