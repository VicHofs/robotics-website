import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.maroon};
  gap: 1rem;

  h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.025em;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: 0.03em;
    max-width: 42rem;
  }

  h2,
  p {
    color: white;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
