import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled(motion.section)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 4rem 0;
`;

export const TierSection = styled.div`
  margin-bottom: 5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TierHeader = styled.div`
  position: relative;
  margin-bottom: 3rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.detailSoft};
    z-index: 0;
  }
`;

export const TierTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TierTitle = styled.span<{ $bgColor: string; $textColor: string }>`
  font-family: Satoshi;
  position: relative;
  display: inline-block;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

export const MaroonCardContent = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryStrong};
  padding: 2rem;
`;

export const LogoWrapper = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
`;

export const SponsorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;

  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const TierGrid = styled(motion.div)<{ $columns: number }>`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  }
`;
