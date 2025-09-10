import { ComponentProps } from "react";
import { AnchorContainer, Container } from "./styles";
import { ChevronRight } from "lucide-react";

type BaseContainerProps = Omit<ComponentProps<typeof Container>, "to"> & {
  to?: string;
  href?: string;
};
interface ArrowLinkProps extends BaseContainerProps {}

const ArrowLink: React.FC<ArrowLinkProps> = ({ children, href, to, ...rest }) => {
  if (href) {
    return (
      <AnchorContainer href={href} {...rest}>
        {children}{" "}
        <ChevronRight
          size={15}
          style={{
            position: "absolute",
            left: "100%",
            top: "55%",
            transform: "translateY(-50%)",
          }}
        />
      </AnchorContainer>
    );
  }

  if (to) {
    return (
      <Container to={to} {...rest}>
        {children}{" "}
        <ChevronRight
          size={15}
          style={{
            position: "absolute",
            left: "100%",
            top: "55%",
            transform: "translateY(-50%)",
          }}
        />
      </Container>
    );
  }

  // Fallback to anchor if neither provided
  return (
    <AnchorContainer href="#" {...rest}>
      {children}{" "}
      <ChevronRight
        size={15}
        style={{
          position: "absolute",
          left: "100%",
          top: "55%",
          transform: "translateY(-50%)",
        }}
      />
    </AnchorContainer>
  );
};

export default ArrowLink;
