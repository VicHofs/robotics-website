import styled from "styled-components";
import { motion as m } from "framer-motion";

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledSVG = styled(m.svg)`
  position: relative;
  overflow: visible;
`;

export const ShinePath = styled(m.path)`
  position: absolute;
  top: 0;
  left: 0;
  stroke: #dbeafe;
`;

export const RaysGroup = styled(m.g)`
  stroke-width: 6;
  stroke: #ca8a04;
  stroke-linecap: round;
  overflow: visible;
`;

export const SunMoonPath = styled(m.path)`
  stroke-linejoin: round;
`;
