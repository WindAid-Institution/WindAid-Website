import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import SectionWrapper from "shared/SectionWrapper";
import Title from "shared/Title";
// import ApplicationForm from "./ApplicationForm";
import Button from "shared/Button";

const title = "Application Form For Programs";

const ApplicationProgram = () => (
  <SectionWrapper bgColor="secondary">
    <Title title={title} size="lg" />
    <Typography style={{ maxWidth: "700px" }}>
      {
        "Whether you have a question or are just being curious, we are always keen to hear from you. You can always drop us a line via email at: "
      }
      <Link href="mailto:volunteer@windaid.org">volunteer@windaid.org</Link>
    </Typography>
    <Button
      text="Application Form"
      style={{ marginTop: "32px" }}
      url="https://bit.ly/windaidapplication"
    />
    {/* <ApplicationForm /> */}
  </SectionWrapper>
);

export default ApplicationProgram;
