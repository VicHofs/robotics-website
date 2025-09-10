import DefaultProjectPage, {
  ProjectPageData,
} from "@components/DefaultProjectPage";
import { useTheme } from "styled-components";
import { Wrench, Timer, Cpu } from "lucide-react";

import ri3dHero from "@assets/images/group/ri3dHero.webp";

const Ri3D = () => {
  const theme = useTheme();

  const data: ProjectPageData = {
    hero: {
      backgroundImage: ri3dHero,
      title: "Robot in 3 Days (Ri3D)",
      lede: "A sprint challenge to design, build, and program a functional (mostly FRC‑legal) robot in just 72 hours — then share what we learn with the community.",
      stats: [
        { title: "72 Hours", description: "From kickoff to reveal" },
        { title: "Open Design", description: "Documented and shared" },
        { title: "Team Sprint", description: "Fast, focused collaboration" },
      ],
    },
    about: {
      heading: "About Ri3D",
      image: { src: ri3dHero, alt: "Ri3D 2024 Team" },
      paragraphs: [
        "Ri3D is a rapid prototyping event inspired by the FIRST Robotics Competition. Immediately after kickoff, college teams blitz through concepting, prototyping, and integration to produce a working robot in 3 days.",
        "The goal is to experiment quickly, document what works, and publish helpful resources for the community — not just a robot, but insights others can build on.",
      ],
    },
    subteams: {
      heading: "Subteams and Focus Areas",
      cards: [
        {
          title: "Mechanisms",
          icon: <Wrench size={20} />,
          bullets: [
            "Rapid prototyping of intakes and scoring",
            "Lightweight, serviceable designs",
            "On‑the‑fly iteration and testing",
          ],
        },
        {
          title: "Controls",
          icon: <Cpu size={20} />,
          accentColor: theme.colors.secondaryStrong,
          bullets: [
            "Bring‑up, wiring, and sensor integration",
            "Driver controls and safety interlocks",
            "Autonomous routines when possible",
          ],
        },
        {
          title: "Sprint Ops",
          icon: <Timer size={20} />,
          accentColor: theme.colors.accentStrong,
          bullets: [
            "Scheduling, documentation, and media",
            "Testing plans and design reviews",
            "Release: reveal video + notes",
          ],
        },
      ],
    },
    cta: {
      title: "Join the Ri3D sprint!",
      body: "It’s a high‑energy weekend to try ideas, learn fast, and ship. Builders, coders, and problem‑solvers of all experience levels are welcome.",
      actions: [
        { label: "Email Us", href: "mailto:robotics@umn.edu" },
        { label: "Meeting Times (Calendar)", href: "#", variant: "outline" },
      ],
    },
  };

  return <DefaultProjectPage data={data} />;
};

export default Ri3D;
