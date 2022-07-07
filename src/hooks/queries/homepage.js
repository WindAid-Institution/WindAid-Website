import { graphql, useStaticQuery } from "gatsby";

const useHomepageData = () => {
  const data = useStaticQuery(graphql`
    {
      hero: contentfulPageHero(contentId: { eq: "homepage" }) {
        title
        subtitle
        image {
          description
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
          )
        }
      }

      statistics: contentfulSection(contentId: { eq: "homepage-statistics" }) {
        title
        header
        body {
          body
        }
        images {
          title
          statsNumbers: description
          file {
            url
          }
        }
      }

      programLevels: contentfulSection(
        contentId: { eq: "homepage-program-levels" }
      ) {
        title
        body {
          body
        }
      }

      programLevelCards: allContentfulSimpleCard(
        filter: { contentId: { eq: "homepage-program-level-card" } }
        sort: { fields: orderNumber }
      ) {
        programLevelCardsContent: nodes {
          header
          title
          body {
            body
          }
          image {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
            description
          }
          path
        }
      }

      currentProjects: contentfulSection(
        contentId: { eq: "homepage-current-projects" }
      ) {
        title
        body {
          body
        }
      }

      currentProjectCards: allContentfulProjectCard(
        filter: { contentId: { eq: "homepage-project-card" } }
        sort: { fields: orderNumber }
      ) {
        currentProjectCardsContent: nodes {
          orderNumber
          header
          urlSlug
          location
          date
          status
          body {
            body
          }
          householdNumber
          windturbineNumber
          windturbineTotalNumber
          image {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
            description
          }
        }
      }

      careerPortal: contentfulSeparationImage(
        contentId: { eq: "homepage-career-portal" }
      ) {
        title
        body {
          body
        }
        bodyTwo {
          bodyTwo
        }
        image {
          description
          file {
            url
          }
        }
      }
    }
  `);

  const {
    hero,
    statistics,
    programLevels,
    programLevelCards,
    currentProjects,
    currentProjectCards,
    careerPortal,
  } = data;
  return {
    hero,
    statistics,
    programLevels,
    programLevelCards,
    currentProjects,
    currentProjectCards,
    careerPortal,
  };
};

export default useHomepageData;
