import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Outer } from "./ContactElements";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaMobileAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Outer>
            <Box1>
              <HiMail />
              <p id="contact-email">yashpanchal5320@gmail.com</p>
            </Box1>
            <Box1>
              <FaMobileAlt />
              <p id="contact-phone">+91 9987591440</p>
            </Box1>
            <Box1>
              <HiLocationMarker />
              <p>Airoli, Navi Mumbai, Maharashtra</p>
            </Box1>
            <Box1 id="linkdin">
              <FaLinkedin />
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/yashb-panchal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yash Panchal
              </a>
            </Box1>
            <Box1 id="github">
              <FaGithub />
              <a
                id="contact-github"
                href="https://github.com/Sen-Pai-11"
                target="_blank"
                rel="noopener noreferrer"
              >
                yashpanchalll
              </a>
            </Box1>
          </Outer>
        </div>
        {/* <SocialIcon /> */}
      </div>
    </ContactWrapper>
  );
}

export default Contact;
