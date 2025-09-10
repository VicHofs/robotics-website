import { motion } from "framer-motion";
import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  overflow: clip;
  aspect-ratio: 1;

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1;
    -webkit-user-drag: none;
    transition: transform var(--global-animation-speed) var(--custom-ease-out);
  }
`;

export const Container = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  border-radius: 10px;
  overflow: clip;
  border: 1px solid ${({ theme }) => theme.colors.detailSoft};
  background-color: ${({ theme }) => theme.colors.primaryStrong};
  max-width: 20rem;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: box-shadow var(--global-animation-speed) var(--custom-ease-out);

  &:hover {
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);

    ${ImageContainer} img {
      transform: scale(1.05);
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.textStrong};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors.contrast};
    font-weight: 500;
    margin-bottom: 0.5rem;
    line-height: 2rem;
  }

  small {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
  }

  b {
    font-weight: 600;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
