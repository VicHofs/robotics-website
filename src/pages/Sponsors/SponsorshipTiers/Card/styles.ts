import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryStrong};
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const StyledCardHeader = styled.div<{
  $bgColor?: string;
  $textColor?: string;
}>`
  padding: 1.5rem;
  background-color: ${({ $bgColor, theme }) =>
    $bgColor || theme.colors.primaryStrong};
  color: ${({ $textColor, theme }) => $textColor || theme.colors.text};
`;

export const StyledCardContent = styled.div`
  padding: 1.5rem;

  p,
  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const StyledCardFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.detailSoft};
`;
