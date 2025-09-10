import { Typewriter } from "react-simple-typewriter";
import { ButtonsContainer, Container } from "./styles";
import HeroVideo from "@assets/videos/hero.mp4";
import Button from "@components/Button";
import { smoothScrollToId } from "@utils/scroll";

const Hero = () => {
  const handleLearnMore = () => smoothScrollToId("activities");

  return (
    <Container>
      <h1>
        We&nbsp;are <br className={"mobile"} />
        <span style={{ color: "#fc3", minHeight: "1rem" }}>
          <Typewriter
            loop
            cursor
            cursorColor="#fc3"
            words={[
              "Robotics",
              "Hands\u2011on", // non-breaking hyphen
              "Innovative",
              "Competitive",
              "Collaborative",
            ]}
          />
        </span>
      </h1>
      <small>
        Doing Robotics through innovation, education, and community at the
        University of Minnesota
      </small>
      <ButtonsContainer>
        <Button
          variant="primary"
          href="https://gopherlink.umn.edu/feeds?type=club&type_id=35608&tab=about"
        >
          Join&nbsp;Us
        </Button>
        <Button variant="outline" onClick={handleLearnMore}>
          Learn&nbsp;More
        </Button>
      </ButtonsContainer>
      <video
        src={HeroVideo}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        controls={false}
      />
    </Container>
  );
};

export default Hero;
