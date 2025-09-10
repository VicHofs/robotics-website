import FeatureCard from "@components/FeatureCard";
import { CardsContainer, Container } from "./styles";
import { ComponentProps } from "react";
import { customEaseOut } from "@styles/global";
import { motion } from "framer-motion";

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

const activitiesList: ComponentProps<typeof FeatureCard>[] = [
  {
    iconLucide: "cpu",
    title: "Build Robots",
    description:
      "Design, build, and program robots for competitions and demonstrations.",
  },
  {
    iconLucide: "graduation-cap",
    title: "STEM Outreach",
    description:
      "Engage with local communities to promote STEM education and robotics.",
  },
  {
    iconLucide: "trophy",
    title: "Competitions",
    description:
      "Participate in and support robotics competitions throughout the year.",
  },
  {
    iconLucide: "wrench",
    title: "Workshops",
    description:
      "Host workshops to teach robotics skills to students of all levels.",
  },
  {
    iconLucide: "flask-conical",
    title: "Research",
    description:
      "Collaborate with faculty on cutting-edge robotics research projects.",
  },
  {
    iconLucide: "users",
    title: "Community",
    description:
      "Build a supportive community of robotics enthusiasts and professionals.",
  },
];

const Activities = () => {
  return (
    <Container id="activities">
      <motion.h2
        variants={childVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        What We Do
      </motion.h2>
      <CardsContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {activitiesList.map((activity) => (
          <motion.div variants={childVariants} style={{ display: "flex" }}>
            <FeatureCard {...activity} key={activity.title} />
          </motion.div>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Activities;
