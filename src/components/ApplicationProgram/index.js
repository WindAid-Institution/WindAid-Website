import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import SectionWrapper from "shared/SectionWrapper";
import Title from "shared/Title";
// import ApplicationForm from "./ApplicationForm";
import Button from "shared/Button";

const title = "Application Form For Programs";

const handleClick = () => {
  window.open("https://bit.ly/windaidapplication");
};

const ApplicationProgram = () => {
  const [checked, setChecked] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setButtonDisabled(checked);
  };

  return (
    <SectionWrapper bgColor="secondary">
      <Title title={title} size="lg" />
      <Typography style={{ maxWidth: "700px" }}>
        {
          "Whether you have a question or are just being curious, we are always keen to hear from you. You can always drop us a line via email at: "
        }
        <Link href="mailto:volunteer@windaid.org">volunteer@windaid.org</Link>
      </Typography>
      <Typography
        style={{ maxWidth: "700px", paddingTop: "30px", fontWeight: 700 }}
      >
        You must check this box to submit your application.
      </Typography>
      <Typography style={{ maxWidth: "700px", paddingTop: "10px" }}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          sx={{
            color: "#000",
            "&.Mui-checked": {
              color: "#000",
            },
          }}
        />
        I have read and agree to the{" "}
        <a
          href="https://drive.google.com/file/d/1U7aME95n1BSy6reOYHtfjGsIxZDI8xXy/view?usp=sharing"
          style={{ color: "#056839", fontWeight: 700 }}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          terms and conditions.
        </a>
      </Typography>
      <Button
        text="Application Form"
        style={{ marginTop: "32px" }}
        onClick={handleClick}
        isDisabled={buttonDisabled}
      />
      {/* <ApplicationForm /> */}
    </SectionWrapper>
  );
};

export default ApplicationProgram;
