import { Section, Content, Divider } from "./styles";
import Container from "@components/UI/Container";
import { Heading2, Paragraph } from "@components/UI/Typography";
import { customEaseOut } from "@styles/global";
import { motion } from "framer-motion";

const childVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: customEaseOut },
  },
};

export default function SponsorIntro() {
  return (
    <Section>
      <Container>
        <Content>
          <motion.div variants={childVariants}>
            <Heading2 align="center" weight="bold">
              Our Sponsors
            </Heading2>
            <Divider />
          </motion.div>
          <motion.div variants={childVariants}>
            <Paragraph>
              We at University of Minnesota Robotics are immensely grateful for
              the generous support and collaboration of our valued sponsors.
              Their commitment to supporting our teams at competitions and in
              our efforts to forward robotics innovation and education is vital
              to the club's success and prosperity.
            </Paragraph>
          </motion.div>
        </Content>
      </Container>
    </Section>
  );
}
