import { ComponentProps } from "react";
import { Container } from "./styles";
import { ChevronRight } from "lucide-react";

interface ArrowLinkProps extends ComponentProps<typeof Container> {}

const ArrowLink: React.FC<ArrowLinkProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
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
};

export default ArrowLink;
