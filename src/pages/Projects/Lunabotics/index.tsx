import DefaultProjectPage, { ProjectPageData } from "@components/DefaultProjectPage";
import { Wrench, Code2, CircuitBoard } from "lucide-react";
import { useTheme } from "styled-components";
import lunaboticsTeam2024 from "@assets/images/group/lunaboticsTeam2024.webp";
import lunaboticsRobot from "@assets/images/group/lunaboticsRobot.webp";
import lunabotics2024 from "@assets/images/group/lunabotics2024.webp";
import lunabotics2023 from "@assets/images/group/lunabotics2023.webp";

const Lunabotics = () => {
  const theme = useTheme();

  const data: ProjectPageData = {
    hero: {
      backgroundImage: lunaboticsTeam2024,
      title: "Lunabotics",
      lede:
        "Building autonomous robots to excavate lunar regolith in NASA's Lunabotics challenge. We blend mechanical, electrical, and software engineering to push robotics forward.",
      stats: [
        { title: "3 Subteams", description: "Mechanical · Electrical · Software" },
        { title: "Full Autonomy", description: "Perception, mapping, and planning" },
        { title: "Real Constraints", description: "Dust, power, weight, reliability" },
      ],
    },
    about: {
      heading: "About the Competition",
      paragraphs: [
        "NASA’s Lunabotics competition challenges university teams to mine simulated lunar regolith under strict constraints. Robots must navigate a dynamic arena, avoid obstacles, excavate and deposit material to build a berm, and score with autonomy, efficiency, and reliability.",
        "The effort spans the full stack: robust mechanical design for a harsh dusty environment, reliable power and actuation, and advanced software for sensing, mapping, and navigation without GPS.",
      ],
      image: { src: lunaboticsRobot, alt: "Lunabotics robot detail" },
    },
    subteams: {
      heading: "Subteams and Focus Areas",
      cards: [
        {
          title: "Mechanical",
          icon: <Wrench size={20} />,
          bullets: [
            "Design and manufacture drive and excavation systems",
            "Iterate for dust tolerance, weight, and serviceability",
            "Stress testing and simulation-informed design",
          ],
        },
        {
          title: "Software",
          icon: <Code2 size={20} />,
          accentColor: theme.colors.secondaryStrong,
          bullets: [
            "Perception, mapping, and localization",
            "Planning and autonomous control routines",
            "Robust state machines and telemetry",
          ],
        },
        {
          title: "Electrical",
          icon: <CircuitBoard size={20} />,
          accentColor: theme.colors.accentStrong,
          bullets: [
            "Power distribution, protection, and sensing",
            "Motor control, wiring, and harnessing",
            "Bring-up, validation, and reliability testing",
          ],
        },
      ],
    },
    gallery: {
      images: [
        { src: lunabotics2024, caption: "Lunabotics 2024 team at competition" },
        { src: lunaboticsRobot, caption: "Close-up of our 2024 Lunabotics robot" },
        { src: lunabotics2023, caption: "Control room team mid-competition (2023)" },
      ],
    },
    cta: {
      title: "Interested in joining Lunabotics?",
      body:
        "We welcome newcomers and experienced builders alike. Dive into a hands-on project that blends engineering disciplines and ships to a NASA competition every year.",
      actions: [
        { label: "Email Us", href: "mailto:robotics@umn.edu" },
        { label: "Meeting Times (Calendar)", href: "#", variant: "outline" },
      ],
    },
  };

  return <DefaultProjectPage data={data} />;
};

export default Lunabotics;
