import BecomeSponsor from "./BecomeSponsor";
import SponsorIntro from "./SponsorIntro";
import SponsorshipTiers from "./SponsorshipTiers";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
};

const Sponsors = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <SponsorIntro />
      <SponsorshipTiers />
      <BecomeSponsor />
    </motion.div>
  );
};

export default Sponsors;
