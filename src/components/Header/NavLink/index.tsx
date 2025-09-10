import { ComponentProps, useRef, useState } from "react";
import { Container, StyledLink, Popover } from "./styles";
import { ChevronDown } from "lucide-react";

// omitting `to` because it is passed as `route`
interface NavLinkProps extends Omit<ComponentProps<typeof StyledLink>, "to"> {
  label: string;
  route: string;
  sublinks?: NavLinkProps[];
}

const NavLink: React.FC<NavLinkProps> = ({ label, route, sublinks }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const handleMouseEnter = () => {
    setPopoverVisible(true);
  };
  const handleMouseLeave = () => {
    setPopoverVisible(false);
  };
  return (
    <Container>
      <StyledLink
        to={route}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
        {
          <ChevronDown
            size={15}
            style={{
              opacity: sublinks ? 1 : 0,
              marginLeft: 2,
            }}
          />
        }
      </StyledLink>
      {!!sublinks && (
        <Popover
          className={popoverVisible ? "open" : ""}
          ref={popoverRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {sublinks?.map((link) => (
            <NavLink {...link} key={link.label + link.route}></NavLink>
          ))}
        </Popover>
      )}
    </Container>
  );
};

export default NavLink;
