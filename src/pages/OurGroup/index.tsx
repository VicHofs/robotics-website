import { Container } from "./styles";
import Timeline from "./Timeline";
import { motion } from "framer-motion";

import csFair2024 from "@assets/images/group/csFair2024.webp";
import FRC from "@assets/images/group/FRC.webp";
import lunabotics2023 from "@assets/images/group/lunabotics2023.webp";
import lunabotics2024 from "@assets/images/group/lunabotics2024.webp";
import lunaboticsRobot from "@assets/images/group/lunaboticsRobot.webp";
import robomaster2024 from "@assets/images/group/robomaster2024.webp";
import stateFair2024 from "@assets/images/group/stateFair2024.webp";
import tonyDiggs2024 from "@assets/images/group/tonyDiggs2024.webp";
import vexU2025 from "@assets/images/group/vexU2025.webp";
import { customEaseOut } from "@styles/global";
import Gallery from "./Gallery";

const images = [
  {
    src: csFair2024,
    caption: "Interacting with new students at the CS Fair 2024",
  },
  { src: FRC, caption: "First Robotics Competition Pilot's view 2024" },
  { src: stateFair2024, caption: "Leadership at our State Fair 2024 booth" },
  {
    src: lunabotics2023,
    caption: "Control room team mid-competition at Lunabotics 2023",
  },
  {
    src: lunabotics2024,
    caption:
      "Lunabotics 2024 team stopping at Bucc-ees after a long drive to Florida",
  },
  {
    src: lunaboticsRobot,
    caption: "Close-up of the 2024 Lunabotics robot, Moon Muncher",
  },
  {
    src: robomaster2024,
    caption: "Inspecting the robot before competing, RoboMaster 2024",
  },
  {
    src: tonyDiggs2024,
    caption: "Leadership at the 2024 Tony Diggs award ceremony",
  },
  { src: vexU2025, caption: "Our trophies from VEX U 2025" },
];

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

const OurGroup = () => {
  return (
    <Container variants={containerVariants} initial="hidden" animate="show">
      <h1>Our Group</h1>
      <motion.div variants={childVariants}>
        <h2>About our organization</h2>
        <p>
          University of Minnesota Robotics is a student organization at the
          University of Minnesota. We have three major goals: to design and
          build robots, to support the FIRST Robotics program in the Minneapolis
          and St. Paul areas, and to host outreach events to raise awareness of
          robotics and STEM education. Currently, our teams compete in NASA
          Lunabotics, RoboMaster, and VEX U. Additionally, we participate in
          non-competitive challenges like Robot in 3 Days (Ri3D). We also
          maintain a general presence around the Twin Cities, mentoring local
          robotics teams, volunteering at regional events, and facilitating
          workshops for students in Minnesota.
        </p>
      </motion.div>
      <motion.div variants={childVariants}>
        <Gallery images={images} />
      </motion.div>
      <motion.div variants={childVariants}>
        <h2>History</h2>
        <p>
          University of Minnesota Robotics began originally on December 3, 2009,
          as GOFIRST Robotics. The organization consisted initially of six
          students, and has seen continued growth and evolution throughout the
          years. With this growth came a natural interest to continue building
          robots and participating in competitions. Now a designated Campus Life
          Program within the University, University of Minnesota Robotics hosts
          3 project teams, as well as non-competitive projects and outreach
          events.
        </p>
      </motion.div>
      <motion.div variants={childVariants}>
        <h2>Timeline of achievements</h2>
        <Timeline />
      </motion.div>
    </Container>
  );
};

export default OurGroup;
