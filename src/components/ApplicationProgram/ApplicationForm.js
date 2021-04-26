import React from "react";
import { AutoForm } from "uniforms-material";

import { applicationFormSchemaBridge } from "src/schemas/applicationFormSchema";
import Title from "shared/Title";

const data = {
  generalTitle: "General Information",
};

const ApplicationForm = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Title title={data.generalTitle} size="lg" />

      <AutoForm schema={applicationFormSchemaBridge} onSubmit={handleSubmit} />
    </>
  );
};

export default ApplicationForm;
