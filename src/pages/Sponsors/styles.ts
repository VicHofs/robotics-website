import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1rem;
`;

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: #e2e2e2;
  margin: 2rem 0;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
`;

export const SponsorsTierWrapper = styled.div`
  margin-bottom: 4rem;
`;

export const TierTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const TierLine = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #ccc;
  margin-right: 0.5rem;
`;

export const TierDivider = styled.div`
  width: 2px;
  height: 24px;
  background-color: #ccc;
  margin: 0 0.5rem;
`;

export const TierLabel = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: #444;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

export const SponsorDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
`;

export const LearnMoreLink = styled.a`
  display: inline-block;
  margin-top: 0.75rem;
  color: #0066cc;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const GradientSection = styled.section`
  background: linear-gradient(135deg, #6b0f1a, #b91372);
  color: white;
  padding: 60px 20px;
  border-radius: 8px;
  margin-top: 4rem;
`;

export const GradientHeading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const GradientParagraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

export const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 1.5rem;
`;

export const BenefitTitle = styled.h4`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const BenefitList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 1rem;
  line-height: 1.5;
`;

export const TierCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  padding: 20px;
  text-align: center;
`;

export const TierHeader = styled.div`
  margin-bottom: 1rem;
`;

export const TierHeaderText = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
`;

export const TierAmount = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #777;
`;

export const TierBenefits = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #555;
  li {
    margin-bottom: 0.5rem;
  }
`;

export const FinalCTA = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export const FinalParagraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const SponsorImageWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const SmallSponsorImageWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  transition:
    box-shadow ${theme.transitions.default},
    transform ${theme.transitions.default};

  &:hover {
    box-shadow: ${theme.shadows.lg};
  }
`;

export const CardHeader = styled.div<{
  $bgColor?: string;
  $textColor?: string;
}>`
  padding: 1.5rem;
  background-color: ${(props) => props.$bgColor || theme.colors.white};
  color: ${(props) => props.$textColor || theme.colors.gray[900]};
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${theme.colors.gray[200]};
`;
