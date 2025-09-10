import ArrowLink from "@components/ArrowLink";
import { Container, Content, Grid, TextContent, VideoWrapper } from "./styles";
import { customEaseOut } from "@styles/global";

const childVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: customEaseOut },
  },
};

const About = () => {
  return (
    <Container>
      <Content variants={childVariants}>
        <Grid>
          <TextContent>
            <h2>Building the Future of Robotics</h2>
            <br />
            <p>
              As a student organization, we unite students interested in
              robotics and connect with local communities to increase awareness
              of{" "}
              <i>For Inspiration and Recognition of Science and Technology</i>{" "}
              (FIRST) robotics programs.
              <br />
              <br />
              We are a University of Minnesota Campus Life Program. We build
              robots, support FIRST, and host outreach events to engage the
              community with STEM education.
            </p>
            <br />
            <br />
            <ArrowLink to="/our-group">Learn more about us</ArrowLink>
          </TextContent>
          <VideoWrapper>
            <iframe
              style={{ borderRadius: 15 }}
              width="570"
              height="321"
              src="https://www.youtube.com/embed/LAxD26ZGMRY"
              title="Getting involved with the UMN Robotics team"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        </Grid>
      </Content>
    </Container>
  );
};

export default About;
