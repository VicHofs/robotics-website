import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled(motion.section)`
  position: relative;
  background: linear-gradient(
    135deg,
    #171717,
    ${({ theme }) => theme.colors.maroon}
  );
  color: white;
  padding: 5rem 0;
`;

export const Content = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

export const Divider = styled.div`
  height: 4px;
  width: 5rem;
  background-color: ${({ theme }) => theme.colors.goldStrong};
  margin: 1.5rem auto 2rem;
`;

export const InfoGrid = styled(motion.div)`
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InfoCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 0.5rem;
  padding: 2rem;
`;

export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BenefitItem = styled.li`
  font-family: "Satoshi";
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const CheckIcon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.goldStrong};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const TierGrid = styled(motion.div)`
  display: grid;
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TierCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
`;

export const TierHeader = styled.div<{ $bgColor: string; $textColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  padding: 1rem;
  text-align: center;
`;

export const TierBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
`;

export const TierBenefits = styled.ul`
  font-family: "Satoshi";
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TierBenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const TierBenefitCheck = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.goldStrong};
`;
