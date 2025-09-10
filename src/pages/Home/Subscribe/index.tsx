import Button from "@components/Button";
import { Container, Content, EmailForm, Input } from "./styles";
import { useTheme } from "styled-components";
import { customEaseOut } from "@styles/global";

const childVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: customEaseOut },
  },
};

const Subscribe = () => {
  const theme = useTheme();
  return (
    <section style={{ backgroundColor: theme.colors.primary }}>
      <Container
        variants={childVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 1 }}
      >
        <Content>
          <h2>Subscribe to our Newsletter</h2>
          <p>
            Sign up to receive our monthly newsletter, event reminders, and
            other updates throughout the semester.
          </p>
        </Content>
        <EmailForm>
          <div>
            <Input type="email" placeholder="x500@umn.edu" required />
            <Button
              type="submit"
              variant="secondary"
              style={{ height: "2.5rem", paddingTop: 0, paddingBottom: 0 }}
            >
              Subscribe
            </Button>
          </div>
          <p>
            By subscribing, you agree to our privacy policy and consent to
            receive updates from our team.
          </p>
        </EmailForm>
      </Container>
    </section>
  );
};

export default Subscribe;
