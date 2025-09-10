import { ComponentProps } from "react";
import { Container, Content, ImageContainer } from "./styles";

interface LeadershipCardProps extends ComponentProps<typeof Container> {
  name: string;
  picture: string;
  majors: string | string[] | readonly string[];
  roles: string | string[] | readonly string[];
  year: "Freshman" | "Sophomore" | "Junior" | "Senior";
  bio?: string | string[] | readonly string[];
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({
  name,
  picture,
  majors,
  roles,
  year,
  bio,
  ...props
}) => {
  return (
    <Container {...props}>
      <ImageContainer>
        <img src={picture} alt={name} />
      </ImageContainer>
      <Content>
        <h3>{name}</h3>
        <h4>{typeof roles === "string" ? roles : roles.join(", ")}</h4>
        <small>
          <b>Major{majors.length > 1 ? "s" : ""}: </b>
          {typeof majors === "string" ? majors : majors.join(", ")}
        </small>
        <small>
          <b>Year: </b>
          {year}
        </small>
        {/* <p>{bio}</p> */}
      </Content>
    </Container>
  );
};

export default LeadershipCard;
