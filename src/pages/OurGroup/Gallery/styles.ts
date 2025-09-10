import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  margin-top: 3rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

export const Masonry = styled.div`
  column-count: 4;
  column-gap: 0.75rem;

  @media (max-width: 1200px) {
    column-count: 3;
  }
  @media (max-width: 900px) {
    column-count: 2;
  }
  @media (max-width: 600px) {
    column-count: 1;
  }
`;

export const Item = styled.figure`
  display: block;
  width: 100%;
  margin: 0 0 1rem 0;
  break-inside: avoid;

  > button {
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    border-radius: 8px;
    overflow: hidden;
    position: relative;
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);

    img {
      display: block;
      width: 100%;
      height: auto;
      transform: scale(1);
      transition: transform 250ms var(--custom-ease-out);
    }

    &:hover img,
    &:focus img {
      transform: scale(1.03);
    }
  }
`;

export const LightboxOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const LightboxContent = styled(motion.div)`
  position: relative;
  max-width: min(90vw, 1200px);
  max-height: 85vh;
  outline: none;
  touch-action: pan-y;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 8px;
  }

  figcaption {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
    line-height: 1.4rem;
    text-align: center;
    font-family: 'Satoshi';
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

export const NavButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.45);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  display: grid;
  place-items: center;

  &.prev { left: 2rem; }
  &.next { right: 2rem; }

  @media (max-width: 700px) {
    &.prev { left: 0.5rem; }
    &.next { right: 0.5rem; }
  }
`;
