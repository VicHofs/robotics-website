import About from "./About";
import Activities from "./Activites";
import Callout from "./Callout";
import Hero from "./Hero";
import { Container } from "./styles";
import Subscribe from "./Subscribe";

const containerVariants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.2, staggerChildren: 0.1 },
  },
};

const Home = () => {
  return (
    <Container variants={containerVariants} initial="hidden" animate="show">
      <Hero />
      <About />
      <Activities />
      <Callout />
      <Subscribe />
    </Container>
  );
};

export default Home;
