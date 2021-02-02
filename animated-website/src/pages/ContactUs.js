import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <SyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StlyedSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send Us A Message</h2>
          </StlyedSocial>
        </StyledHide>
        <StyledHide>
          <StlyedSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send An Email</h2>
          </StlyedSocial>
        </StyledHide>
        <StyledHide>
          <StlyedSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Social Media</h2>
          </StlyedSocial>
        </StyledHide>
      </div>
    </SyledContact>
  );
};

const SyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  background: #fff;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const StlyedSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
