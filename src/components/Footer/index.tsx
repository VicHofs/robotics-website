import ThemedLogo from "@components/ThemedLogo";
import {
  FooterContent,
  FooterGrid,
  Branding,
  Section,
  FooterBottom,
  Container,
} from "./styles";

const Footer = () => {
  return (
    <Container id="footer">
      <FooterContent>
        <FooterGrid>
          <Branding>
            <a href="/">
              <ThemedLogo style={{ maxHeight: 50 }} />
            </a>
            <p>
              A student organization dedicated to robotics education, outreach,
              and competition.
            </p>
          </Branding>

          <Section>
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
            </ul>
          </Section>

          <Section>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="/membership">Membership</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/donate">Donate</a>
              </li>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
            </ul>
          </Section>

          <Section>
            <h3>Connect</h3>
            <ul>
              <li>
                <a href="https://twitter.com/UMNRobotics">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com/umnrobotics">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com/UMNRobotics">Facebook</a>
              </li>
              <li>
                <a href="https://twitch.tv/umnrobotics">Twitch</a>
              </li>
              <li>
                <a href="https://youtube.com/@umnrobotics">YouTube</a>
              </li>
            </ul>
          </Section>
        </FooterGrid>

        <FooterBottom>
          <p>© 2025 University of Minnesota Robotics. All rights reserved.</p>
          <p>
            Made with ❤️ by <a href="https://imvictor.dev">Victor Hofstetter</a>
          </p>
          <p>
            <a href="/accessibility">Accessibility</a> •{" "}
            <a href="/privacy">Privacy Statement</a>
          </p>
        </FooterBottom>
      </FooterContent>
    </Container>
  );
};

export default Footer;
