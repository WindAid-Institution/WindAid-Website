import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
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

const useStyles = makeStyles((theme) => ({
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
}));

const CareersInternships = () => {
  const {
    find: {
      title,
      body: { body },
    },
    careerInternshipsContent,
  } = useCIData();
  const classes = useStyles();

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
        {careerInternshipsContent.map(
          ({
            title: position,
            slugId,
            description,
            jobPurpose: { jobPurpose },
            dutiesResponsibilities: { dutiesResponsibilities },
            requirements: { requirements },
            preferredSkills: { preferredSkills },
            benefitsOfCoOpinternship: { benefitsOfCoOpinternship },
            positionsAvailable,
            hoursPerWeek,
            windaidFeeOptional: { windaidFeeOptional },
            otherBenefits: { otherBenefits },
            majorsConsidered,
            languageRequirements: { languageRequirements },
            locationInformation: { locationInformation },
            orderNumber,
          }) => (
            <Accordion
              square
              expanded={expanded === orderNumber}
              onChange={handleChange(orderNumber)}
              key={orderNumber}
              className={classes.accordion}
            >
              <AccordionSummary
                aria-controls={`panel${orderNumber}-content`}
                id={slugId}
                className={classes.accordionSummary}
              >
                <Typography variant="h5" className={classes.openIndicator}>
                  {expanded === orderNumber ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </Typography>
                <Typography variant="h6">{position}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                {description && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Job Description"
                    body={description}
                    size="full"
                  />
                )}
                {jobPurpose && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Job Purpose"
                    body={jobPurpose}
                    size="full"
                  />
                )}
                {dutiesResponsibilities && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Duties & Responsibilities"
                    body={dutiesResponsibilities}
                    size="full"
                  />
                )}
                {requirements && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Requirements"
                    body={requirements}
                    size="full"
                  />
                )}
                {preferredSkills && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Preferred Skills"
                    body={preferredSkills}
                    size="full"
                  />
                )}
                {benefitsOfCoOpinternship && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Benefits of Co-op/Internship"
                    body={benefitsOfCoOpinternship}
                    size="full"
                  />
                )}
                {positionsAvailable && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Positions Available:"
                    body={positionsAvailable}
                    size="full"
                  />
                )}
                {hoursPerWeek && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Hours per Week:"
                    body={hoursPerWeek}
                    size="full"
                  />
                )}
                {windaidFeeOptional && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Windaid Fee (optional)"
                    body={windaidFeeOptional}
                    size="full"
                  />
                )}
                {otherBenefits && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Other Benefits"
                    body={otherBenefits}
                    size="full"
                  />
                )}
                {majorsConsidered && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Majors Considered"
                    body={majorsConsidered}
                    size="full"
                  />
                )}
                {languageRequirements && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Language Requirements"
                    body={languageRequirements}
                    size="full"
                  />
                )}
                {locationInformation && (
                  <TextSection
                    style={contentStyles}
                    subHeader="Location Information (culture, cost of living, etc.)"
                    body={locationInformation}
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
          )
        )}
      </Box>
    </SectionWrapper>
  );
};
export default CareersInternships;
