import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.main)`
  > section {
    padding: 4rem min(10vw, 9rem);
  }
`;
