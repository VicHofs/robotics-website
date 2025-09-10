import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  background-color: color-mix(
    in srgb,
    black 5%,
    ${({ theme }) => theme.colors.primary}
  );

  h2 {
    color: ${({ theme }) => theme.colors.textStronger};
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    text-align: center;
  }
`;

export const CardsContainer = styled(motion.div)`
  margin-top: 3rem;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
