import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;

  @media (min-width: 1125px) {
    height: 100%;
  }
`;

export const Popover = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  right: 0;
  z-index: 1000;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.maroonStrong};
  overflow: hidden;
  transform: scaleY(1);
  transform-origin: top;
  transition: transform 200ms var(--custom-ease-out);
  height: fit-content;
  width: 100%;

  > * {
    width: 100%;
    /* text-align: end;
    justify-content: flex-end; */
    > * {
      padding: 0.5rem 0.5rem;
      width: 100%;
    }
  }

  @media (min-width: 1125px) {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.maroon};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    top: 70%;
    &:not(.open) {
      transform: scaleY(0);
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  font-family: "Satoshi";
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  align-content: center;
  align-items: center;
  transition: color 150ms linear;

  &:hover {
    color: ${({ theme }) => theme.colors.goldStrong};
  }

  @media (min-width: 1125px) {
    height: 100%;
  }
`;
