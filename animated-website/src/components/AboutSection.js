import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles.js";
import Wave from "./Wave";
import { motion } from "framer-motion";
import { titleAnim, fadeAnim, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnim}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img src={home1} alt="man with camera" variants={photoAnim} />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
