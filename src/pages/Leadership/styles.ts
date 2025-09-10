import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: var(--recommended-page-padding);

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.textStronger};
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 1480px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 1000px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 700px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;

  &.open {
    display: flex;
  }

  scrollbar-color: auto transparent;
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.primaryStrong};
  /* Only show scrollbar when content actually overflows */
  overflow-y: auto;
  display: none;
  max-width: 800px;
  width: 90%;
  border-radius: 12px;
  padding: 2rem;
  gap: 2rem;
  z-index: 1001;
  position: relative;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);

  &.open {
    display: flex;
  }

  /* Transparent scrollbar track; keep thumb subtle */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: ${({ theme }) => theme.colors.textSoft} transparent; /* Firefox */
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 8px;
  }

  .bio {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;
    color: ${({ theme }) => theme.colors.textMedium};
    p {
      margin-bottom: 1rem;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    small {
      align-self: flex-end;
      justify-self: flex-end;
      /* margin-right: 2rem; */
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    max-height: 80vh;

    .bio {
      width: 100%;
    }
  }
`;
