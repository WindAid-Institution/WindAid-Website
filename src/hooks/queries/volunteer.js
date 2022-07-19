import { graphql, useStaticQuery } from "gatsby";

const useVolunteerData = () => {
  const data = useStaticQuery(graphql`
    {
      find: contentfulSection(contentId: { eq: "volunteer-header" }) {
        title
        body {
          body
        }
      }

      volunteer: allContentfulVolunteerPosting {
        volunteerContent: nodes {
          title
          slugId
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
          benefitsOfVolunteeringPosition {
            benefitsOfVolunteeringPosition
          }
          positionsAvailable
          hoursPerWeek
          otherBenefits {
            otherBenefits
          }
          languageRequirements {
            languageRequirements
          }
          locationInformation {
            locationInformation
          }
          orderNumber
          applyUrl
        }
      }
    }
  `);

  const {
    find,
    volunteer: { volunteerContent },
  } = data;
  return {
    find,
    volunteerContent,
  };
};

export default useVolunteerData;
