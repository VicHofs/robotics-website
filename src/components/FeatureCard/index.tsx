import { ComponentProps } from "react";
import { Container, IconContainer } from "./styles";
import { DynamicIcon } from "lucide-react/dynamic";

interface FeatureCardProps {
  iconLucide: ComponentProps<typeof DynamicIcon>["name"];
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconLucide,
  title,
  description,
}) => {
  return (
    <Container>
      <IconContainer>
        <DynamicIcon name={iconLucide} />
      </IconContainer>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  );
};

export default FeatureCard;
