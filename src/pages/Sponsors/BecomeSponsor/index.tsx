import {
  Section,
  Content,
  Divider,
  InfoGrid,
  InfoCard,
  BenefitsList,
  BenefitItem,
  CheckIcon,
  ButtonGroup,
  TierGrid,
  TierCard,
  TierHeader,
  TierBody,
  TierBenefits,
  TierBenefitItem,
  TierBenefitCheck,
} from "./styles";
import Container from "@components/UI/Container";
import {
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Text,
} from "@components/UI/Typography";
import Button from "@components/Button";
import { motion } from "framer-motion";
import { customEaseOut } from "@styles/global";
import { useLenis } from "lenis/react";

const containerVariants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
};

const childVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: customEaseOut },
  },
};

const benefits = [
  "Brand visibility at competitions and events",
  "Logo placement on our website and promotional materials",
  "Recognition in our annual report",
  "Opportunities to engage with talented students",
  "Support the future of STEM education and innovation",
  "Tax benefits for your organization",
];

const tiers = [
  {
    name: "Bronze",
    amount: "$500 - $999",
    benefits: [
      "Logo on website",
      // "Recognition in annual report",
      // "Invitation to annual showcase",
    ],
    color: "#B35C00",
    textColor: "#ffffff",
  },
  {
    name: "Silver",
    amount: "$1,000 - $1,999",
    benefits: [
      "Logo on website",
      "Logo on team t-shirts",
      "Logo on competitive robots",
      // "Recognition in annual report",
      // "Invitation to annual showcase",
      // "Social media recognition",
    ],
    color: "#d1d5db",
    textColor: "#171717",
  },
  {
    name: "Gold",
    amount: "$2,000 - $4,999",
    benefits: [
      "Logo on website",
      "Logo on team t-shirts",
      "Logo on competitive robots",
      "Company description on website",
      "Logo on team livestreams",
      // "Recognition in annual report",
      // "Invitation to annual showcase",
      // "Social media recognition",
      // "Company presentation opportunity",
      // "Priority recruitment access",
    ],
    color: "#FFCC33",
    textColor: "#171717",
  },
  {
    name: "Maroon",
    amount: "$5,000+",
    benefits: [
      "Logo on website",
      "Logo on team t-shirts",
      "Logo on competitive robots",
      "Company description on website",
      "Logo on team livestreams",
      "Priority logo on website",
      "Priority logo on competitive robots",
      "Logo on all team apparel",
      "Social media spotlight post",
      "Signed team photo",
      "Thank you letter",
      // "Recognition in annual report",
      // "Invitation to annual showcase",
      // "Social media recognition",
      // "Company presentation opportunity",
      // "Priority recruitment access",
      // "Named project/robot opportunity",
      // "VIP access to all events",
      // "Custom partnership benefits",
    ],
    color: "#7A0019",
    textColor: "#ffffff",
  },
];

const BecomeSponsor = () => {
  const lenis = useLenis();
  return (
    <Section>
      <Container>
        <Content>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Heading2 align="center" weight="bold">
              Become a Sponsor
            </Heading2>
            <Divider />
          </motion.div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Paragraph style={{ marginBottom: "3rem" }}>
              If you or your organization share our passion for robotics,
              education, and technology, we invite you to consider becoming a
              sponsor of the University of Minnesota Robotics Club. Your support
              will directly impact the future of STEM education and empower the
              next generation of innovators.
            </Paragraph>
          </motion.div>
        </Content>

        <InfoGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <InfoCard variants={childVariants}>
            <Heading3
              color="#FFCC33"
              weight="bold"
              style={{ marginBottom: "1.5rem" }}
            >
              Why Sponsor Us?
            </Heading3>
            <BenefitsList>
              {benefits.map((benefit, index) => (
                <BenefitItem key={index}>
                  <CheckIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </CheckIcon>
                  <span>{benefit}</span>
                </BenefitItem>
              ))}
            </BenefitsList>
          </InfoCard>
          <InfoCard variants={childVariants}>
            <Heading3
              color="#FFCC33"
              weight="bold"
              style={{ marginBottom: "1.5rem" }}
            >
              Get Involved
            </Heading3>
            <Paragraph style={{ marginBottom: "1.5rem" }}>
              Ready to make an impact? Contact us today to discuss sponsorship
              opportunities or to request our detailed sponsorship packet.
            </Paragraph>
            <ButtonGroup>
              <Button as="a" href="/contact" fullWidth>
                Contact Us
              </Button>
              <Button
                onClick={() => {
                  if (lenis)
                    lenis.scrollTo("#sponsorship-tiers", { offset: -80 });
                }}
                variant="outline"
                fullWidth
              >
                View Tiers
              </Button>
            </ButtonGroup>
          </InfoCard>
        </InfoGrid>

        <div id="sponsorship-tiers">
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Heading3
              align="center"
              weight="bold"
              style={{ marginBottom: "2.5rem" }}
            >
              Sponsorship Tiers
            </Heading3>
          </motion.div>
          <TierGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {tiers.map((tier) => (
              <TierCard
                key={tier.name}
                variants={childVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <TierHeader $bgColor={tier.color} $textColor={tier.textColor}>
                  <Heading4 weight="bold">{tier.name}</Heading4>
                  <Text weight="medium">{tier.amount}</Text>
                </TierHeader>
                <TierBody>
                  <TierBenefits>
                    {tier.benefits.map((benefit, index) => (
                      <TierBenefitItem key={index}>
                        <TierBenefitCheck>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 13L9 17L19 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </TierBenefitCheck>
                        <span>{benefit}</span>
                      </TierBenefitItem>
                    ))}
                  </TierBenefits>
                  <Button as="a" href="/contact" variant="primary" fullWidth>
                    Select {tier.name}
                  </Button>
                </TierBody>
              </TierCard>
            ))}
          </TierGrid>
        </div>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <Paragraph style={{ marginBottom: "2rem" }}>
            Thank you to all our sponsors for your steadfast support!
          </Paragraph>
          <Button as="a" href="/contact" variant="primary">
            Become a Sponsor Today
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default BecomeSponsor;
