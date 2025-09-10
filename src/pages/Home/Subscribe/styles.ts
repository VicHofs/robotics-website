import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  background-color: color-mix(
    in srgb,
    black 5%,
    ${({ theme }) => theme.colors.primarySoft}
  );
  border-radius: 0.75rem;
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 1rem;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Content = styled.div`
  text-align: center;

  > h2 {
    color: ${({ theme }) => theme.colors.textStronger};
    letter-spacing: -0.025em;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;

    @media (min-width: 768px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }

  > p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`;

export const EmailForm = styled.form`
  margin-top: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 640px) {
      flex-direction: row;
    }
  }

  > p {
    margin-top: 1rem;
    font-size: 0.75rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  flex: 1;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors.accentSoft};
  background-color: ${({ theme }) => theme.colors.primaryStrong};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textStrong};
  transition: box-shadow var(--global-animation-speed) var(--custom-ease-in-out);

  &::placeholder {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.contrast};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &::file-selector-button {
    border: 0;
    background: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }
`;
