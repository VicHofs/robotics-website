import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  position: relative;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: min(600px, 100vw);
  min-height: fit-content;
  overflow: hidden;
  place-content: center;
  place-items: center;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.primaryStrong};

  :not(video) {
    z-index: 1;
  }

  h1 {
    color: white;
    font-weight: 900;
    font-size: min(15vw, 6rem);
    text-align: center;
    letter-spacing: -0.025em;
  }

  small {
    color: white;
    font-size: min(4vw, 1.1rem);
    max-width: 500px;
    font-weight: 500;
    text-align: center;
    text-wrap: pretty;
    line-height: min(5.5vw, 1.5rem);
  }

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: brightness(0.7);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    .mobile {
      display: none;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
