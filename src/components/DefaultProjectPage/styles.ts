import { motion } from "framer-motion";
import styled from "styled-components";

export const Page = styled(motion.main)`
  background: ${({ theme }) => theme.colors.primary};
`;

export const Hero = styled.section`
  position: relative;
  min-height: 60vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 4rem min(10vw, 9rem);
  background: ${({ theme }) => theme.colors.primaryStrong};

  .bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5) saturate(0.9);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  .content {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 0.75rem;
    text-align: center;
    max-width: 900px;
  }

  h1 {
    color: white;
    font-weight: 900;
    font-size: clamp(2.2rem, 6vw, 4.5rem);
    letter-spacing: -0.02em;
  }
  p.lede {
    color: #ffffffd0;
    font-size: clamp(1rem, 2.4vw, 1.25rem);
    line-height: 1.6;
  }
`;

export const StatRow = styled.div`
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;

  .stat {
    display: grid;
    backdrop-filter: blur(2px);
    background: #ffffff1a;
    border: 1px solid #ffffff2a;
    color: white;
    border-radius: 10px;
    padding: 0.75rem 1rem;
  }
  .stat h3 {
    font-weight: 800;
    font-size: 1.25rem;
  }
  .stat p {
    opacity: 0.9;
  }
`;

export const Section = styled(motion.section)`
  padding: 4rem min(10vw, 9rem);
  h2 {
    color: ${({ theme }) => theme.colors.textStrong};
    font-size: clamp(1.5rem, 3.2vw, 2rem);
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.015em;
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.05rem;
    line-height: 1.65rem;
  }
`;

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  --accent: ${({ theme }) => theme.colors.goldStrong};
  border: 1px solid ${({ theme }) => theme.colors.detailSoft};
  background: ${({ theme }) => theme.colors.primaryStrong};
  border-radius: 12px;
  padding: 1.25rem;
  display: grid;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--accent),
      ${({ theme }) => theme.colors.contrast}
    );
  }

  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.75rem;
    align-items: center;
  }
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: ${({ theme }) => theme.colors.goldStrong}33;
    color: ${({ theme }) => theme.colors.goldStrong};
    border: 1px solid ${({ theme }) => theme.colors.goldStrong}55;
  }
  h3 {
    color: ${({ theme }) => theme.colors.textStrong};
    font-weight: 800;
    font-size: 1.125rem;
    letter-spacing: -0.01em;
  }
  p,
  li {
    color: ${({ theme }) => theme.colors.text};
    font-family: "Satoshi", sans-serif;
    font-size: 0.985rem;
    line-height: 1.5rem;
  }

  ul {
    padding-left: 1.2rem;
    list-style: disc;
  }
  li::marker {
    color: ${({ theme }) => theme.colors.goldStrong};
  }
`;

export const CTA = styled.section`
  background: ${({ theme }) => theme.colors.maroon};
  color: white;
  display: grid;
  place-items: center;
  text-align: center;
  gap: 1rem;
  padding: 3rem min(10vw, 9rem);

  .buttons {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
