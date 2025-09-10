import DefaultProjectPage, {
  ProjectPageData,
} from "@components/DefaultProjectPage";
import { useTheme } from "styled-components";
import { Wrench, Code2, CircuitBoard } from "lucide-react";

import vexUHero from "@assets/images/group/vexUHero.webp";
import vexU2025 from "@assets/images/group/vexU2025.webp";

const VEXU = () => {
  const theme = useTheme();

  const data: ProjectPageData = {
    hero: {
      backgroundImage: vexUHero,
      title: "VEX U",
      lede: "Competing with two complementary robots in the collegiate VEX Robotics Competition — fast iteration, smart mech design, and reliable autonomous routines.",
      stats: [
        { title: "Two Robots", description: "Complementary roles each season" },
        {
          title: "Rapid Iteration",
          description: "CNC, 3D prints, and testing",
        },
        { title: "Autonomous", description: "Sensors, control, tuning" },
      ],
    },
    about: {
      heading: "About the Competition",
      paragraphs: [
        "VEX U is the collegiate division of the VEX Robotics Competition. Universities face off in a yearly game that rewards clever mechanisms, drive practice, and consistent autonomous routines.",
        "Our team builds two robots that work together for the season’s challenge. We iterate quickly with VEX components, custom machined parts, and 3D prints — balancing reliability, serviceability, and performance.",
      ],
      image: { src: vexU2025, alt: "VEX U team with competition robots" },
    },
    subteams: {
      heading: "Subteams and Focus Areas",
      cards: [
        {
          title: "Mechanical",
          icon: <Wrench size={20} />,
          bullets: [
            "Compact drivetrains and game-specific mechanisms",
            "Serviceable designs for quick swaps",
            "Rigorous drivetrain and intake testing",
          ],
        },
        {
          title: "Software",
          icon: <Code2 size={20} />,
          accentColor: theme.colors.secondaryStrong,
          bullets: [
            "Autonomous routines and skills programming",
            "Driver assistance and control tuning",
            "Telemetry + match logging for iteration",
          ],
        },
        {
          title: "Electrical",
          icon: <CircuitBoard size={20} />,
          accentColor: theme.colors.accentStrong,
          bullets: [
            "Power management and wiring reliability",
            "Sensor integration and validation",
            "Bench tests and competition checklists",
          ],
        },
      ],
    },
    gallery: {
      images: [{ src: vexU2025, caption: "VEX U team and robots (2025)" }],
    },
    cta: {
      title: "Interested in joining VEX U?",
      body: "Help us refine fast, reliable competition robots. All experience levels welcome — great for sharpening mech design and control skills.",
      actions: [
        { label: "Email Us", href: "mailto:robotics@umn.edu" },
        { label: "Meeting Times (Calendar)", href: "#", variant: "outline" },
      ],
    },
  };

  return <DefaultProjectPage data={data} />;
};

export default VEXU;
