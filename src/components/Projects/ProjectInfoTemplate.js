import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";
import MainLayout from "../../layout/MainLayout";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";
import theme from "../../../theme";

const ProjectInfoTemplate = ({ pageContext }) => {
  const { project } = pageContext;
  const sectionStyle = {
    containerStyle: {
      display: "flex",
      flexDirection: "column",
      gap: "50px",
    },
  };

  const textStyle = {
    titleStyle: {
      textStyle: {
        fontSize: "40px",
        lineHeight: "50px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "28px",
          lineHeight: "35px",
        },
      },
    },
    subHeaderStyle: {
      textStyle: {
        color: theme.palette.primary.main,
      },
    },
    bodyStyle: {
      textStyle: {
        margin: "5px 0 0 10px",
        [theme.breakpoints.down("sm")]: {
          margin: "0px 0 0 10px",
        },
      },
    },
  };

  const subTextStyle = {
    bodyStyle: {
      textStyle: {
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  };
  return (
    <MainLayout>
      <SectionWrapper bgColor="secondary" style={sectionStyle}>
        <Box>
          <TextSection title={project.projectName} style={textStyle} />
          <TextSection title={project.location} style={textStyle} />
          <TextSection header={project.dateStarted} />
        </Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <GatsbyImage
            image={project.mainImage.gatsbyImageData}
            alt={project.mainImage.description}
          />
        </Box>
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <TextSection subHeader="Status:" style={textStyle} />
          <TextSection body={project.status} style={textStyle} />
        </Box>
        <Box>
          <TextSection subHeader="About the community" style={textStyle} />
          <TextSection body={project.aboutTheCommunity.aboutTheCommunity} />
        </Box>
        <Box>
          <TextSection subHeader="How did we get involved" style={textStyle} />
          <TextSection body={project.howDidWeGetInvolved.howDidWeGetInvolved} />
          <TextSection body="Goal of the project" style={subTextStyle} />
          <TextSection body={project.goalOfTheProject.goalOfTheProject} />
        </Box>
        <Box
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <GatsbyImage
            image={project.secondaryImage.gatsbyImageData}
            alt={project.secondaryImage.description}
          />
        </Box>
        <Box>
          <TextSection subHeader="Case Study" style={textStyle} />
          <TextSection body={project.caseStudy.caseStudy} />
        </Box>
        <Box>
          <TextSection subHeader="Impact" style={textStyle} />
          <TextSection body={project.impact.impact} />
        </Box>
      </SectionWrapper>
    </MainLayout>
  );
};

export default ProjectInfoTemplate;

ProjectInfoTemplate.propTypes = {
  pageContext: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};
