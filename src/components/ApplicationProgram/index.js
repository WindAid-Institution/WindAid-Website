import React from "react";

import ApplicationForm from "./ApplicationForm";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

const data = {
  title: "Application Form For Volunteer Program",
  body:
    "Whether you have a question or are just being curious, we are always keen to hear from you. You can always drop us a line via email at: Volunteer@WindAid.org",
};

const ApplicationProgram = () => (
  <SectionWrapper bgColor="secondary">
    <TextSection title={data.title} body={data.body} size="lg" />
    <ApplicationForm />
  </SectionWrapper>
);

export default ApplicationProgram;
