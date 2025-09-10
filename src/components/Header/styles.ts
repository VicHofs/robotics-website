import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4.5rem;
  background-color: ${({ theme }) =>
    theme.colors[theme.name === "dark" ? "maroonStrong" : "maroon"]};
  justify-content: space-between;
  box-shadow: #2121213e 2px 0px 20px 5px;
  z-index: 10;

  padding: 5px;

  > a {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
  }

  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 1125px) {
    padding: 0 1.5rem;

    > button {
      display: none;
    }

    > a {
      position: initial;
      transform: none;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  /* gap: 3rem; */
  height: 100%;
  > * {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .close-sidebar-container {
    display: none;
  }

  .theme-toggle {
    padding: 25px 0;
  }

  @media (max-width: 1124px) {
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    gap: 0;
    transition: transform var(--global-animation-speed) var(--custom-ease-out);
    transform: translateX(-100%);

    .theme-toggle {
      box-sizing: border-box;
      width: 100%;
      padding: 25px 0;
      height: 100px;
    }

    &:before {
      content: "";
      position: absolute;
      top: 1000;
      left: 0;
      z-index: 20;
      background-color: ${({ theme }) => theme.colors.maroonStrong};
      height: 100vh;
      width: 100%;
    }

    &:after {
      content: "";
      z-index: 15;
      position: absolute;
      background-color: #000000;
      opacity: 0;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      display: none;
    }

    &.open {
      transform: translateX(0);
    }

    > * {
      z-index: 100;
      padding: 1rem 10px;
      padding-right: 15px;
      height: initial;
    }

    .close-sidebar-container {
      cursor: pointer;
      display: flex;
      width: 100%;
      background-color: transparent;
      border: none;
      height: 50px;
      opacity: 0.8;
      padding: 1rem 10px 0 10px;
    }
  }
`;

export const HeaderLink = styled(Link)`
  flex-wrap: none;
  font-family: "Satoshi";
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  height: 100%;
  align-content: center;
  transition: color 150ms linear;

  &:hover {
    color: ${({ theme }) => theme.colors.goldStrong};
  }
`;
