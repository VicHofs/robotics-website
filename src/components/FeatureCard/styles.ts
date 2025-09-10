import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.detailSoft};
  background-color: ${({ theme }) => theme.colors.primaryStrong};
  padding: 1.5rem;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: box-shadow var(--global-animation-speed) var(--custom-ease-in-out);

  &:hover {
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  h3 {
    color: ${({ theme }) => theme.colors.textStrong};
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.75rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text}dd;
    font-weight: 500;
    line-height: 1.25rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  height: 3rem;
  width: 3rem;
  aspect-ratio: 1;
  place-items: center;
  place-content: center;
  border-radius: 50%;
  ${({ theme }) =>
    `background-color: ${theme.colors.contrastSoft}40;\ncolor: ${theme.colors.contrastStrong};\n`}
  margin-bottom: 0.5rem;
`;
