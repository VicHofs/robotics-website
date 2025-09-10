import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const base = css`
  --padding: 4px;

  position: relative;
  color: ${({ theme }) => theme.colors.contrast};
  text-decoration: none;
  padding: var(--padding);
  padding-left: 0;

  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.contrastSoft};
    opacity: 0.2;
    height: 100%;
    width: 100%;
    border-radius: 2px;
    transform: translate(0, calc(-1 * var(--padding))) scaleX(0) scaleY(0.7);
    transition: 300ms transform var(--custom-ease-in-out);
    transform-origin: left center;
  }

  &:hover {
    &::before {
      transform: translate(0, calc(-1 * var(--padding))) scaleX(1.1) scaleY(0.7);
    }
  }
`;

export const Container = styled(Link)`
  ${base}
`;

export const AnchorContainer = styled.a`
  ${base}
`;
