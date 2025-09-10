import Button from "@components/Button";
import { ButtonsContainer, Container } from "./styles";
import { useTheme } from "styled-components";
import { customEaseOut } from "@styles/global";
import { useNavigate } from "react-router-dom";

const childVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: customEaseOut },
  },
};

const Callout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Container
      variants={childVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 1 }}
    >
      <h2>Join Competitive Robotics</h2>
      <p>
        Whether you're a beginner or an experienced roboticist, there's a place
        for you in our teams.
      </p>
      <ButtonsContainer>
        <Button
          style={{ backgroundColor: "white", color: theme.colors.maroon }}
          disabled
        >
          Pick a team
        </Button>
        <Button variant="outline" onClick={() => navigate("/our-group")}>
          Learn More
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Callout;
