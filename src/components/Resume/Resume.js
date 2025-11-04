import Gaurav_Resume from "./Gaurav-Panchal-Resume.pdf";
import Yash_Resume from "./YP-resumee.pdf";
import styled from "styled-components";
import { Button } from "./ResumeElements";
export const Resume2 = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1vDUWY68mu-3AC9-dXrLWT6vYpNNdvlU9/view?usp=sharing"
    );
  };

  return (
    <div>
      <a
        href={Yash_Resume}
        download="YP_resumee"
        className="nav-link resume"
        id="resume-button-1 resume-link-1"
      >
        <Button
          onClick={openResume}
          id="resume-button-1 resume-link-1"
          className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg nav-link resume"
        >
          Resume
        </Button>
      </a>
    </div>
  );
};
