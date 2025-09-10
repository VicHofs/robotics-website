import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 1.1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.contrastStrong};

  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(100%);
  }
`;

export const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const EventContainer = styled.div`
  position: relative;
`;

export const YearMarker = styled.div`
  position: absolute;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  margin-left: -1rem;
  background-color: ${({ theme }) => theme.colors.secondaryStrong};
  border: 4px solid ${({ theme }) => theme.colors.contrastStrong};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    left: 50%;
    margin-left: -1rem;
  }
`;

export const Grid = styled.div<{ isLeft: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: ${({ isLeft }) => (isLeft ? "end" : "start")};
  }

  &:hover {
    z-index: 4;
  }
`;

export const YearDisplay = styled.div<{ isRight: boolean }>`
  padding-left: 3rem;
  text-align: right;

  @media (min-width: 768px) {
    padding-left: ${({ isRight }) => (isRight ? "2rem" : "0")};
    padding-right: ${({ isRight }) => (isRight ? "0" : "2rem")};
    text-align: ${({ isRight }) => (isRight ? "left" : "right")};
    grid-column-start: ${({ isRight }) => (isRight ? "2" : "1")};
    grid-row: 1;
  }

  span {
    font-family: Satoshi;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.contrastStrong};
  }
`;

export const Content = styled.div<{ isLeft: boolean }>`
  padding-left: 3rem;
  padding-bottom: 2rem;
  justify-self: start;

  @media (min-width: 768px) {
    padding-left: ${({ isLeft }) => (isLeft ? "2rem" : "0")};
    padding-right: ${({ isLeft }) => (isLeft ? "0" : "2rem")};
    padding-bottom: 0;
    grid-column-start: ${({ isLeft }) => (isLeft ? "2" : "1")};
    grid-row: 1;
  }
`;

export const TitleButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  /* align-items: center; */
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.textStrong};

  &:hover {
    color: #ffcc33;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  line-height: 1.25rem;
`;
