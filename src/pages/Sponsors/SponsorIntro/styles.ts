import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled(motion.section)`
  background-color: ${({ theme }) => theme.colors.primaryStrong};
  padding: 4rem 0;
`;

export const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.contrastStrong};
    text-align: center;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    text-wrap: pretty;
  }
`;

export const Divider = styled.div`
  height: 4px;
  width: 5rem;
  background-color: ${({ theme }) => theme.colors.goldStrong};
  margin: 1.5rem auto 2rem;
`;
