import { ReactNode } from "react";
import Button from "@components/Button";
import { customEaseOut } from "@styles/global";
import { motion } from "framer-motion";
import Gallery from "@pages/OurGroup/Gallery";
import {
  Card,
  CardGrid,
  CTA,
  Hero,
  Page,
  Section,
  StatRow,
  TwoCol,
} from "./styles";

type Stat = { title: string; description: string };
type HeroData = {
  backgroundImage: string;
  title: string;
  lede: string;
  stats?: Stat[];
};

type AboutData = {
  heading: string;
  paragraphs: string[];
  image?: { src: string; alt: string };
};

type SubteamCard = {
  title: string;
  bullets: string[];
  icon?: ReactNode;
  accentColor?: string;
};

type SubteamsData = {
  heading: string;
  cards: SubteamCard[];
};

type GalleryImage = { src: string; caption: string };

type CTAAction = { label: string; href: string; variant?: "primary" | "outline" };
type CTAData = { title: string; body: string; actions: CTAAction[] };

export type ProjectPageData = {
  hero: HeroData;
  about: AboutData;
  subteams?: SubteamsData;
  gallery?: { images: GalleryImage[] };
  cta?: CTAData;
};

const child = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: customEaseOut },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const DefaultProjectPage: React.FC<{ data: ProjectPageData }> = ({ data }) => {
  const { hero, about, subteams, gallery, cta } = data;

  return (
    <Page variants={container} initial="hidden" animate="show">
      <Hero>
        <img className="bg" src={hero.backgroundImage} alt={hero.title} />
        <div className="overlay" />
        <div className="content">
          <h1>{hero.title}</h1>
          <p className="lede">{hero.lede}</p>
          {hero.stats?.length ? (
            <StatRow>
              {hero.stats.map((s) => (
                <div className="stat" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </StatRow>
          ) : null}
        </div>
      </Hero>

      <Section as={motion.section} variants={child}>
        <TwoCol>
          <div>
            <h2>{about.heading}</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 0 : "0.75rem" }}>
                {p}
              </p>
            ))}
          </div>
          {about.image ? (
            <img
              src={about.image.src}
              alt={about.image.alt}
              style={{ width: "100%", borderRadius: 12 }}
            />
          ) : null}
        </TwoCol>
      </Section>

      {subteams ? (
        <Section as={motion.section} variants={child}>
          <h2>{subteams.heading}</h2>
          <CardGrid>
            {subteams.cards.map((c) => (
              <Card
                key={c.title}
                style={c.accentColor ? ({ "--accent": c.accentColor } as any) : undefined}
              >
                <div className="header">
                  {c.icon ? <div className="icon">{c.icon}</div> : null}
                  <h3>{c.title}</h3>
                </div>
                <ul>
                  {c.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </CardGrid>
        </Section>
      ) : null}

      {gallery?.images?.length ? (
        <Section as={motion.section} variants={child}>
          <Gallery images={gallery.images} />
        </Section>
      ) : null}

      {cta ? (
        <CTA>
          <h2 style={{ fontWeight: 800 }}>{cta.title}</h2>
          <p style={{ maxWidth: 760 }}>{cta.body}</p>
          <div className="buttons">
            {cta.actions.map((a) => (
              <Button
                key={a.label + a.href}
                as="a"
                href={a.href}
                variant={a.variant === "outline" ? "outline" : "primary"}
              >
                {a.label}
              </Button>
            ))}
          </div>
        </CTA>
      ) : null}
    </Page>
  );
};

export default DefaultProjectPage;

