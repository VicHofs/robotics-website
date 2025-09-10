import ThemedLogo from "@components/ThemedLogo";
import { Container, Navigation } from "./styles";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import { useTheme } from "styled-components";
import ThemeToggle from "@components/ThemeToggle";

const links = [
  {
    label: "About",
    route: "",
    sublinks: [
      { label: "Leadership", route: "leadership" },
      { label: "Our Group", route: "our-group" },
      { label: "Our Sponsors", route: "sponsors" },
    ],
  },
  {
    label: "Events",
    route: "https://gopherlink.umn.edu/events?group_ids=35608",
  },
  {
    label: "Robots and Projects",
    route: "",
    sublinks: [
      { label: "Lunabotics", route: "projects/lunabotics" },
      { label: "RoboMaster", route: "projects/robomaster" },
      { label: "VEX U", route: "projects/vexu" },
      { label: "Ri3D", route: "projects/ri3d" },
      // { label: "Autonomous Snowplow", route: "" },
      // { label: "COVID Bot (CARRI)", route: "" },
    ],
  },
  {
    label: "Membership",
    route: "",
    sublinks: [
      {
        label: "Join Our Group",
        route: "https://gopherlink.umn.edu/events?group_ids=35608",
      },
      { label: "Training Resources", route: "" },
    ],
  },
  { label: "Contact Us", route: "" },
  {
    label: "Donate",
    route: "https://makingagift.umn.edu/give/yourgift.html?&cart=22824",
  },
];

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    // hide the sidebar whenever the current pathname changes
    setSidebarActive(false);
  }, [location.pathname]);

  return (
    <Container id="header">
      <button onClick={() => setSidebarActive(true)}>
        <Menu color="white" />
      </button>
      <Link
        to="/"
        style={{
          height: "100%",
          padding: "22px 0",
          width: "fit-content",
          boxSizing: "border-box",
        }}
      >
        <ThemedLogo
          style={{ height: "100%" }}
          titleColor="white"
          mColor={theme.colors.goldStrong}
        />
      </Link>
      <Navigation className={sidebarActive ? "open" : ""}>
        <button className="close-sidebar-container">
          <X color="white" onClick={() => setSidebarActive(false)} />
        </button>
        {links.map(({ ...link }) => (
          <NavLink {...link} key={link.label + link.route} />
        ))}
        <ThemeToggle className="theme-toggle" />
      </Navigation>
    </Container>
  );
};

export default Header;
