import {
  Section,
  TierSection,
  TierHeader,
  TierTitleContainer,
  TierTitle,
  MaroonCardContent,
  LogoContainer,
  LogoWrapper,
  SponsorInfo,
  TierGrid,
} from "./styles";
import Container from "@components/UI/Container";
import { Card, CardHeader, CardContent } from "./Card";
import { Heading3, Heading4, Paragraph, Text } from "@components/UI/Typography";
import { motion } from "framer-motion";

import BitteleLogo from "@assets/images/sponsors/bittele.webp";
import emjLogo from "@assets/images/sponsors/emj.svg";
import geneHaasLogoDark from "@assets/images/sponsors/ghfDark.svg";
import geneHaasLogoLight from "@assets/images/sponsors/ghfLight.svg";
import klnLogo from "@assets/images/sponsors/kln.svg";
import medtronicLogo from "@assets/images/sponsors/medtronic.svg";
import mnsgLogo from "@assets/images/sponsors/mnsgc.svg";
import stratasysLogoLight from "@assets/images/sponsors/stratasysLight.svg";
import stratasysLogoDark from "@assets/images/sponsors/stratasysDark.svg";
import { useTheme } from "styled-components";
import ArrowLink from "@components/ArrowLink";
import { customEaseOut } from "@styles/global";

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

const dividerVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.5, ease: customEaseOut },
  },
};

type Logo = string | { dark: string; light: string };
type Sponsor = { name: string; logo: Logo; link: string; description?: string };

const sponsors: {
  maroon: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
  bronze: Sponsor[];
} = {
  maroon: [
    {
      name: "Minnesota Space Grant Consortium",
      logo: mnsgLogo,
      description:
        "NASA’s Minnesota Space Grant Consortium (MnSGC) is part of the NASA-funded National Space Grant College and Fellowship Program (usually just called Space Grant) established by Congress in 1988. Space Grant provides support for higher education students majoring in STEM fields, student teams participating in NASA-themed higher education projects (like Lunabotics!), research opportunities for faculty and students, and much more!",
      link: "https://www.mnspacegrant.org",
    },
  ],
  gold: [
    {
      name: "Medtronic",
      logo: medtronicLogo,
      description:
        "A global leader in medical technology, services, and solutions.",
      link: "#",
    },
    {
      name: "Gene Haas Foundation",
      logo: { dark: geneHaasLogoDark, light: geneHaasLogoLight },
      description: "Supporting manufacturing education across North America.",
      link: "#",
    },
  ],
  silver: [
    {
      name: "Earle M. Jorgensen Company",
      logo: emjLogo,
      // description: "One of the largest distributors of metal products.",
      link: "#",
    },
  ],
  bronze: [
    {
      name: "KLN Family Brands",
      logo: klnLogo,
      description: "A family-owned company producing quality food products.",
      link: "#",
    },
    {
      name: "Stratasys",
      logo: { dark: stratasysLogoDark, light: stratasysLogoLight },
      description:
        "A global leader in 3D printing and additive manufacturing solutions.",
      link: "#",
    },
    {
      name: "Bittele",
      logo: BitteleLogo,
      description: "Turn-Key PCB Assembly services.",
      link: "#",
    },
  ],
};

export default function SponsorshipTiers() {
  const theme = useTheme();
  return (
    <Section>
      <Container>
        {/* Maroon Tier */}
        <TierSection>
          <TierHeader>
            <motion.div variants={dividerVariants}>
              <TierTitleContainer>
                <TierTitle $bgColor="#7A0019" $textColor="#ffffff">
                  Maroon Sponsors
                </TierTitle>
              </TierTitleContainer>
            </motion.div>
          </TierHeader>

          <div>
            {sponsors.maroon.map((sponsor) => (
              <motion.div variants={childVariants}>
                <Card key={sponsor.name}>
                  <CardHeader bgColor="#7A0019" textColor="#ffffff">
                    <Heading3 align="center" weight="bold">
                      {sponsor.name}
                    </Heading3>
                  </CardHeader>
                  <CardContent style={{ padding: 0 }}>
                    <MaroonCardContent>
                      <LogoContainer>
                        <LogoWrapper>
                          <img
                            src={
                              typeof sponsor.logo === "object"
                                ? sponsor.logo[(theme.name as "dark" | "light")]
                                : sponsor.logo
                            }
                            alt={sponsor.name}
                            style={{
                              objectFit: "contain",
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </LogoWrapper>
                      </LogoContainer>
                      <SponsorInfo>
                        <Paragraph
                          color="#333333"
                          style={{ marginBottom: "1rem" }}
                        >
                          {sponsor.description}
                        </Paragraph>
                        <ArrowLink
                          href={sponsor.link}
                          style={{ display: "flex", width: "fit-content" }}
                        >
                          Learn more
                        </ArrowLink>
                      </SponsorInfo>
                    </MaroonCardContent>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TierSection>

        {/* Gold Tier */}
        <TierSection>
          <TierHeader>
            <motion.div
              variants={dividerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <TierTitleContainer>
                <TierTitle $bgColor="#FFCC33" $textColor="#171717">
                  Gold Sponsors
                </TierTitle>
              </TierTitleContainer>
            </motion.div>
          </TierHeader>

          <TierGrid
            $columns={2}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {sponsors.gold.map((sponsor) => (
              <motion.div key={sponsor.name} variants={childVariants}>
                <Card key={sponsor.name}>
                  <CardHeader bgColor="#FFCC33" textColor="#171717">
                    <Heading4 align="center" weight="bold">
                      {sponsor.name}
                    </Heading4>
                  </CardHeader>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          height: "8rem",
                          width: "8rem",
                        }}
                      >
                        <img
                          src={
                            typeof sponsor.logo === "object"
                              ? sponsor.logo[(theme.name as "dark" | "light")]
                              : sponsor.logo
                          }
                          alt={sponsor.name}
                          style={{
                            objectFit: "contain",
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </div>
                      {sponsor.description && (
                        <Paragraph align="center">
                          {sponsor.description}
                        </Paragraph>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TierGrid>
        </TierSection>

        {/* Silver Tier */}
        <TierSection>
          <TierHeader>
            <motion.div
              variants={dividerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <TierTitleContainer>
                <TierTitle $bgColor="#d1d5db" $textColor="#171717">
                  Silver Sponsors
                </TierTitle>
              </TierTitleContainer>
            </motion.div>
          </TierHeader>

          <TierGrid
            $columns={3}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {sponsors.silver.map((sponsor) => (
              <motion.div key={sponsor.name} variants={childVariants}>
                <Card key={sponsor.name}>
                  <CardHeader bgColor="#d1d5db" textColor="#171717">
                    <Heading4 align="center" weight="bold">
                      {sponsor.name}
                    </Heading4>
                  </CardHeader>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          height: "6rem",
                          width: "6rem",
                        }}
                      >
                        <img
                          src={
                            typeof sponsor.logo === "object"
                              ? sponsor.logo[(theme.name as "dark" | "light")]
                              : sponsor.logo
                          }
                          alt={sponsor.name}
                          style={{
                            objectFit: "contain",
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </div>
                      {sponsor.description && (
                        <Text align="center">{sponsor.description}</Text>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TierGrid>
        </TierSection>

        {/* Bronze Tier */}
        <TierSection>
          <TierHeader>
            <motion.div
              variants={dividerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <TierTitleContainer>
                <TierTitle $bgColor="#B35C00" $textColor="#ffffff">
                  Bronze Sponsors
                </TierTitle>
              </TierTitleContainer>
            </motion.div>
          </TierHeader>

          <TierGrid
            $columns={3}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {sponsors.bronze.map((sponsor) => (
              <motion.div key={sponsor.name} variants={childVariants}>
                <Card key={sponsor.name}>
                  <CardHeader bgColor="#B35C00" textColor="#ffffff">
                    <Text align="center" weight="bold">
                      {sponsor.name}
                    </Text>
                  </CardHeader>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          height: "5rem",
                          width: "5rem",
                        }}
                      >
                        <img
                          src={
                            typeof sponsor.logo === "object"
                              ? sponsor.logo[(theme.name as "dark" | "light")]
                              : sponsor.logo
                          }
                          alt={sponsor.name}
                          style={{
                            objectFit: "contain",
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TierGrid>
        </TierSection>
      </Container>
    </Section>
  );
}
