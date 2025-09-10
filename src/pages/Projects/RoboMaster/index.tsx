import DefaultProjectPage, {
  ProjectPageData,
} from "@components/DefaultProjectPage";
import { useTheme } from "styled-components";
import { Wrench, Crosshair, CircuitBoard } from "lucide-react";

import robomaster2024 from "@assets/images/group/robomaster2024.webp";
import robomasterHero from "@assets/images/group/robomasterHero.webp";

const RoboMaster = () => {
  const theme = useTheme();

  const data: ProjectPageData = {
    hero: {
      backgroundImage: robomasterHero,
      title: "RoboMaster",
      lede: "Designing and building a coordinated fleet of robots to compete in DJI's international RoboMaster competition — blending precision mechatronics, real-time vision, and smart strategy.",
      stats: [
        { title: "Multirobot", description: "Coordinated roles and tactics" },
        {
          title: "Real-Time Vision",
          description: "Detection, tracking, targeting",
        },
        {
          title: "Reliability",
          description: "Serviceable, robust, comp-ready",
        },
      ],
    },
    about: {
      heading: "About the Program",
      paragraphs: [
        "RoboMaster is an annual international robotics competition created by DJI. It challenges university teams to design, build, and program multiple robots that work together in a fast-paced competitive arena.",
        "The competition emphasizes engineering discipline and strategy — robust mechanical systems, dependable electrical architecture, and software that blends perception with real-time control.",
      ],
      image: { src: robomaster2024, alt: "RoboMaster robot close-up" },
    },
    subteams: {
      heading: "Subteams and Focus Areas",
      cards: [
        {
          title: "Mechanical",
          icon: <Wrench size={20} />,
          bullets: [
            "Chassis, mechanisms, and gimbals",
            "Rapid serviceability and modular design",
            "Durability testing and iteration",
          ],
        },
        {
          title: "Software",
          icon: <Crosshair size={20} />,
          accentColor: theme.colors.secondaryStrong,
          bullets: [
            "Vision: detection, tracking, targeting",
            "Motion control and state machines",
            "Teleop UX, telemetry, and tuning",
          ],
        },
        {
          title: "Electrical",
          icon: <CircuitBoard size={20} />,
          accentColor: theme.colors.accentStrong,
          bullets: [
            "Power distribution and protection",
            "Motor drivers, wiring, and harnessing",
            "Board bring-up and validation",
          ],
        },
      ],
    },
    gallery: {
      images: [
        { src: robomaster2024, caption: "RoboMaster robot close-up (2024)" },
      ],
    },
    cta: {
      title: "Interested in joining RoboMaster?",
      body: "Help us build a competitive multi-robot system. All skill levels welcome — learn, build, and compete with a focused, supportive team.",
      actions: [
        { label: "Email Us", href: "mailto:robotics@umn.edu" },
        { label: "Meeting Times (Calendar)", href: "#", variant: "outline" },
      ],
    },
  };

  return <DefaultProjectPage data={data} />;
};

export default RoboMaster;
