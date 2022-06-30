import { graphql, useStaticQuery } from "gatsby";

const useCIData = () => {
  const data = useStaticQuery(graphql`
    {
      find: contentfulSection(contentId: { eq: "careers-header" }) {
        title
        body {
          body
        }
      }

      careerInternships: allContentfulCareerInternshipPosting {
        careerInternshipsContent: nodes {
          title
          description
          jobPurpose {
            jobPurpose
          }
          dutiesResponsibilities {
            dutiesResponsibilities
          }
          requirements {
            requirements
          }
          preferredSkills {
            preferredSkills
          }
          benefitsOfCoOpinternship {
            benefitsOfCoOpinternship
          }
          positionsAvailable
          hoursPerWeek
          windaidFeeOptional {
            windaidFeeOptional
          }
          otherBenefits {
            otherBenefits
          }
          majorsConsidered
          languageRequirements {
            languageRequirements
          }
          locationInformation {
            locationInformation
          }
          orderNumber
        }
      }
    }
  `);

  const {
    find,
    careerInternships: { careerInternshipsContent },
  } = data;
  return {
    find,
    careerInternshipsContent,
  };
};

export default useCIData;
