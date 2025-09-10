import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.main)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: var(--recommended-page-padding);
  position: relative;
  overflow: clip;

  > img {
    /* z-index: 1; */
  }

  > :not(img) {
    z-index: 2;
    position: relative;
  }

  h1 {
    color: ${({ theme }) => theme.colors.textStronger};
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    margin-bottom: 3rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.textStrong};
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin-bottom: 3rem;
  }
`;
