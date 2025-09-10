import styled, { css } from "styled-components";

interface TypographyStyledProps {
  $color?: string;
  $align?: "left" | "center" | "right";
  $weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
}

const getWeight = (weight?: string) => {
  switch (weight) {
    case "normal":
      return 400;
    case "medium":
      return 500;
    case "semibold":
      return 600;
    case "bold":
      return 700;
    case "extrabold":
      return 800;
    default:
      return "inherit";
  }
};

const baseStyles = css<TypographyStyledProps>`
  font-family: "Satoshi";
  margin: 0;
  color: ${(props) => props.$color || "inherit"};
  text-align: ${(props) => props.$align || "inherit"};
  font-weight: ${(props) => getWeight(props.$weight)};
`;

export const StyledHeading1 = styled.h1<TypographyStyledProps>`
  ${baseStyles}
  font-size: 2.25rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

export const StyledHeading2 = styled.h2<TypographyStyledProps>`
  ${baseStyles}
  font-size: 1.875rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const StyledHeading3 = styled.h3<TypographyStyledProps>`
  ${baseStyles}
  font-size: 1.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const StyledHeading4 = styled.h4<TypographyStyledProps>`
  ${baseStyles}
  font-size: 1.25rem;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledParagraph = styled.p<TypographyStyledProps>`
  ${baseStyles}
  font-size: 1rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const StyledText = styled.span<TypographyStyledProps>`
  ${baseStyles}
  font-size: 1rem;
  line-height: 1.5;
`;

export const StyledSmallText = styled.span<TypographyStyledProps>`
  ${baseStyles}
  font-size: 0.875rem;
  line-height: 1.5;
`;
