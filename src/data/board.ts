import Anthony from "@assets/images/board/anthony.webp";
import Victor from "@assets/images/board/victor.webp";
import Lindsay from "@assets/images/board/lindsay.webp";
import Tom from "@assets/images/board/tom.webp";
import Placeholder from "@assets/images/board/placeholder.webp";

const board = [
  {
    name: "Anthony",
    picture: Anthony,
    roles: "President",
    majors: "Computer Science",
    year: "Senior",
    bio: [
      "I joined UMN Robotics because I was on an FRC team in high school and wanted to continue learning about robotics! It's also a great way to meet new people.",
      "In my free time, I enjoy spending time with friends, playing videogames, and learning about new technologies that are being developed.",
    ],
  },
  {
    name: "Victor",
    picture: Victor,
    roles: ["Vice President", "Webmaster"],
    majors: ["Computer Science", "Mathematics"],
    year: "Junior",
    bio: [
      "I joined UMN Robotics because I wanted to find a similar community to the one I had in my robotics team in high school and work on different code from what I deal with as a software engineer.",
      "In my free time, I code neural networks and web applications, play guitar, compete in eSports, practice martial arts and parkour, cook Asian cuisine, and do Japanese calligraphy.",
    ],
  },
  {
    name: "Tom",
    picture: Tom,
    roles: "RoboMaster Team Lead",
    majors: "Physics",
    year: "Sophomore",
    bio: [
      "I joined UMN Robotics because I wanted to participate in an engineering challenge and robotics competition unlike anything else available at the University of Minnesota.",
      "In my free time, I play tennis and cook.",
    ],
  },
  {
    name: "Lindsay",
    picture: Lindsay,
    roles: "Outreach Officer",
    majors: "Computer Engineering",
    year: "Sophomore",
    bio: [
      "I joined UMN Robotics because I enjoyed my experience in FIRST Robotics in high school and wanted to continue robotics in college.",
      "In my free time, I knit, fish, and spend time with family and friends.",
    ],
  },
  {
    name: "Artemis",
    picture: Placeholder,
    roles: "Director of Engineering",
    majors: ["Computer Science", "Computer Engineering"],
    year: "Junior",
    bio: [
      "I joined UMN Robotics because I had a lot of fun doing FTC and FRC and I wanted to do something similar in college.",
      "In my free time, I like playing video games and riding my bike.",
    ],
  },
  {
    name: "Angelina",
    picture: Placeholder,
    roles: "Director of Finance",
    majors: "Materials Science and Engineering",
    year: "Sophomore",
    bio: [
      "I joined UMN Robotics because I loved my time in FIRST Robotics and I wanted to be involved with more people in CSE.",
      "In my free time, I play clarinet and trumpet, I also love to hike and bake!",
    ],
  },
  {
    name: "Nikki",
    picture: Placeholder,
    roles: "Lunabotics Team Lead",
    majors: "Aerospace Engineering and Mechanics",
    year: "Senior",
    bio: [
      "I joined UMN Robotics because I wanted to get hands-on experience in the robotics field.",
      "In my free time, I read, machine, and play video games.",
    ],
  },
  {
    name: "Katriana",
    picture: Placeholder,
    roles: "Social Media Officer",
    majors: "Biomedical Engineering",
    year: "Sophomore",
    bio: [
      "I joined UMN Robotics because I really enjoyed the experience and the people I met from my high school robotics team, and I wanted to be part of a similar community in college!",
      "In my free time, I love scrapbooking, trying new things, video games, video production and finding obscure study spots on campus.",
    ],
  },
  {
    name: "Tanushka",
    picture: Placeholder,
    roles: "Marketing Officer",
    majors: "Biomedical Engineering",
    year: "Junior",
    bio: [
      "I joined UMN Robotics because I wanted to work with like minded individuals and learn more about the field of Robotics.",
      "In my free time, I dance",
    ],
  },
  {
    name: "Riya",
    picture: Placeholder,
    roles: "R3D Team Lead",
    majors: ["Computer Science", "Mathematics"],
    year: "Sophomore",
    bio: [
      "I joined UMN Robotics because I enjoyed my time in FIRST and wanted to continue that in college!",
      "In my free time, I like spending time with friends, taking photos, and hiking.",
    ],
  },
  {
    name: "Sam",
    picture: Placeholder,
    roles: "Corporate Relations Officer",
    majors: "Computer Engineering",
    year: "Sophomore",
    bio: [
      "I joined UMN Robotics because I did FTC robotics in High School, and wanted to take it to the next level in college. I'm also really interested in the space industry, and Lunabotics combines both of these things.",
      "In my free time, Go on hikes, play bass guitar, play games with friends.",
    ],
  },
  {
    name: "Daniel",
    picture: Placeholder,
    roles: "VexU Team Lead",
    majors: "Computer Science",
    year: "Freshman",
    bio: [
      "I joined UMN Robotics because I was very involved in VEX robotics in high school, and I wanted to continue this into college.",
      "In my free time, I tinker with computers and play video games",
    ],
  },
] as const;

export default board;
