import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

export const Content = styled(motion.div)`
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
`;

export const TextContent = styled.div`
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.textStronger};

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const VideoWrapper = styled.div`
  align-self: center;
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  aspect-ratio: 16 / 9;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;
