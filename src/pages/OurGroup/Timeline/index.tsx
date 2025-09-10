import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Container,
  Content,
  Description,
  EventContainer,
  EventsWrapper,
  Grid,
  TimelineLine,
  TitleButton,
  YearDisplay,
  YearMarker,
} from "./styles";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 2010,
    title: "Scouting, Strategy, and Mentoring Initiatives",
    description:
      "GOFIRST Robotics presented awards for Scouting, Strategy, Team Spirit, Pneumatics, Programming, Marketing Communications, and others at the MN Splash Event. Members mentored teams 706, 1675, 1816, 2175, 2470, 2500, 2508, 2846, 3130, and 3524.",
  },
  {
    year: 2011,
    title: "First Post Kick-off Collaborative Strategic Design Meeting (PoKo)",
    description:
      "GOFIRST Robotics organized the first PoKo event and participated in the 2011 St. Louis Championship conferences, attending the FIRST Alumni Conference.",
  },
  {
    year: 2012,
    title: "First Mock Kick-off (MoKo) and Summer Robotics Summit",
    description:
      "GOFIRST Robotics hosted the first MoKo and the first Summer Robotics Summit. Continued volunteering, mentoring, and robot development activities.",
  },
  {
    year: 2013,
    title: "FLL Outreach and Competitive Robotics",
    description:
      "GOFIRST Robotics hosted a non-qualifying FLL tournament with High Tech Kids and participated in the AUVSI IGVC competition in Michigan.",
  },
  {
    year: 2014,
    title: "Robotic Innovations",
    description:
      "The IGVC robot was adapted for the ION Autonomous Snowplow Competition, and the Hexacopter project was completed.",
  },
  {
    year: 2015,
    title: "Second Year in ION Autonomous Snowplow Competition",
    description:
      "The group competed again in the ION Autonomous Snowplow Competition.",
  },
  {
    year: 2016,
    title: "New Snowplow Robot Build",
    description:
      "The group built an entirely new robot to compete in the ION Autonomous Snowplow Competition.",
  },
  {
    year: 2017,
    title: "Snow Squirrel and NASA RMC Team Formation",
    description:
      "GOFIRST Robotics designed a new robot, 'Snow Squirrel', earning fourth place at the ION Autonomous Snowplow Competition. Formed the NASA Remote Mining Competition Team.",
  },
  {
    year: 2018,
    title: "Major Competition Successes",
    description:
      "The 'Snow Squirrel' robot won first place at the ION Autonomous Snowplow Competition. The VEXU team advanced to the World Competition, and the NASA RMC Team placed 11th out of 44 teams.",
  },
  {
    year: 2019,
    title: "Transition to University of Minnesota Robotics",
    description:
      "The group became University of Minnesota Robotics under the Industrial and Systems Engineering Department, won several student group awards, and competed in the Bot Shot competition.",
  },
  {
    year: 2021,
    title: "Outstanding Program Award for Tech Talks",
    description:
      "The group won the Outstanding Student Group Program or Event award from the College of Science and Engineering for exclusive Tech Talks from industry leaders.",
  },
  {
    year: 2022,
    title: "Joining the Minnesota Robotics Institute",
    description:
      "UMN Robotics officially joined MNRI, expanding its robotics capabilities and faculty support.",
  },
  {
    year: 2023,
    title: "Lunabotics Competition and RoboMaster Team Formation",
    description:
      "The Lunabotics team competed in Alabama, marking the first in-person competition in two years. The RoboMaster team was formed in the fall.",
  },
  {
    year: 2024,
    title: "Outstanding Student Group Award",
    description:
      "UMN Robotics was awarded the Outstanding Student Group award for its diverse events and significant student impact.",
  },
  {
    year: 2025,
    title: "Leadership Development and VEX U Achievements",
    description:
      "UMN Robotics received the Tony Diggs Excellence in Leadership Development award and achieved strong results at the SCTCC VEX U Regional Tournament, winning 2nd place in tournament and skills challenge, and the Innovate Award.",
  },
];

const Timeline = () => {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  const toggleYear = (year: number) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <Container>
      <TimelineLine />
      <EventsWrapper>
        {timelineEvents.map((event, index) => (
          <EventContainer key={event.year}>
            <YearMarker aria-hidden="true" />
            <Grid isLeft={index % 2 === 0}>
              <YearDisplay isRight={index % 2 !== 0}>
                <span>{event.year}</span>
              </YearDisplay>
              <Content isLeft={index % 2 === 0}>
                <TitleButton onClick={() => toggleYear(event.year)}>
                  <h3>{event.title}</h3>
                  <ChevronDown
                    style={{
                      marginLeft: "0.5rem",
                      width: "1.25rem",
                      height: "1.25rem",
                      transition:
                        "transform var(--global-animation-speed) var(--custom-ease-out)",
                      transform:
                        expandedYear === event.year
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </TitleButton>
                <AnimatePresence>
                  {expandedYear === event.year && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.25, 0.75, 0.25, 1],
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <Description>{event.description}</Description>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Content>
            </Grid>
          </EventContainer>
        ))}
      </EventsWrapper>
    </Container>
  );
};

export default Timeline;
