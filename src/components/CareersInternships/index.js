import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";

import useCIData from "queries/careersInternships";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import { ROUTES } from "src/constants/routes";
import Button from "../../shared/Button";
import useClasses from "../../styles/useClasses";

const styles = (theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },

  accordionContainer: {
    marginTop: theme.spacing(7),
  },

  accordion: {
    boxShadow: "none",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "8px",

    "&:before": {
      display: "none",
    },
  },

  accordionSummary: {
    paddingLeft: 20,

    "& > div": {
      margin: "12px 0 !important",
    },
  },

  accordionDetails: {
    padding: "0 34px 0 34px !important",
  },

  openIndicator: {
    paddingRight: theme.spacing(1),
  },
});

const CareersInternships = () => {
  const {
    find: {
      title,
      body: { body },
    },
    careerInternshipsContent,
  } = useCIData();
  const classes = useClasses(styles);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const contentStyles = {
    subHeaderStyle: { textStyle: { lineHeight: "28px" } },
    bodyStyle: { textStyle: { lineHeight: "28px" } },
    rootStyle: { marginBottom: "30px" },
  };

  return (
    <SectionWrapper>
      <TextSection title={title} size="lg" />
      <TextSection body={body} />
      <Button
        text="Apply"
        style={{ marginTop: "24px" }}
        route={ROUTES.APPLY}
      />{" "}
      <Box className={classes.accordionContainer}>
        {careerInternshipsContent.map((fields) => (
          <>
            {fields.orderNumber > 0 && (
              <Accordion
                square
                expanded={expanded === fields.orderNumber}
                onChange={handleChange(fields.orderNumber)}
                key={fields.orderNumber}
                className={classes.accordion}
              >
                <AccordionSummary
                  aria-controls={`panel${fields.orderNumber}-content`}
                  id={fields.slugId}
                  className={classes.accordionSummary}
                >
                  <Typography variant="h5" className={classes.openIndicator}>
                    {expanded === fields.orderNumber ? (
                      <AiOutlineMinus />
                    ) : (
                      <AiOutlinePlus />
                    )}
                  </Typography>
                  <Typography variant="h6">{fields.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  {fields.description && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Job Description"
                      body={fields.description}
                      size="full"
                    />
                  )}
                  {fields.jobPurpose && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Job Purpose"
                      body={fields.jobPurpose.jobPurpose}
                      size="full"
                    />
                  )}
                  {fields.dutiesResponsibilities && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Duties & Responsibilities"
                      body={
                        fields.dutiesResponsibilities.dutiesResponsibilities
                      }
                      size="full"
                    />
                  )}
                  {fields.requirements && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Requirements"
                      body={fields.requirements.requirements}
                      size="full"
                    />
                  )}
                  {fields.preferredSkills && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Preferred Skills"
                      body={fields.preferredSkills.preferredSkills}
                      size="full"
                    />
                  )}
                  {fields.benefitsOfCoOpinternship && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Benefits of Co-op/Internship"
                      body={
                        fields.benefitsOfCoOpinternship.benefitsOfCoOpinternship
                      }
                      size="full"
                    />
                  )}
                  {fields.positionsAvailable && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Positions Available:"
                      body={fields.positionsAvailable}
                      size="full"
                    />
                  )}
                  {fields.hoursPerWeek && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Hours per Week:"
                      body={fields.hoursPerWeek}
                      size="full"
                    />
                  )}
                  {fields.windaidFeeOptional && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Windaid Fee (optional)"
                      body={fields.windaidFeeOptional.windaidFeeOptional}
                      size="full"
                    />
                  )}
                  {fields.otherBenefits && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Other Benefits"
                      body={fields.otherBenefits.otherBenefits}
                      size="full"
                    />
                  )}
                  {fields.majorsConsidered && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Majors Considered"
                      body={fields.majorsConsidered}
                      size="full"
                    />
                  )}
                  {fields.languageRequirements && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Language Requirements"
                      body={fields.languageRequirements.languageRequirements}
                      size="full"
                    />
                  )}
                  {fields.locationInformation && (
                    <TextSection
                      style={contentStyles}
                      subHeader="Location Information (culture, cost of living, etc.)"
                      body={fields.locationInformation.locationInformation}
                      size="full"
                    />
                  )}
                  <Button
                    text="Apply"
                    style={{ marginTop: "24px", marginBottom: "24px" }}
                    route={ROUTES.APPLY}
                  />{" "}
                </AccordionDetails>
              </Accordion>
            )}
          </>
        ))}
      </Box>
    </SectionWrapper>
  );
};
export default CareersInternships;
