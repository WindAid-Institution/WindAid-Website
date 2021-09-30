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
            placeholder: TRACED_SVG
            quality: 100
          )
        }
      }

      ourMission: contentfulSection(contentId: { eq: "homepage-our-mission" }) {
        header
        title
        body {
          body
        }
        images {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
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

      ourApproach: contentfulSection(
        contentId: { eq: "homepage-our-approach" }
      ) {
        header
        title
        body {
          body
        }
      }

      ourProgramsOne: contentfulSection(
        contentId: { eq: "homepage-our-programs-one" }
      ) {
        header
        title
        body {
          body
        }
        image {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
      ourProgramsTwo: contentfulSection(
        contentId: { eq: "homepage-our-programs-two" }
      ) {
        header
        body {
          body
        }
        bodyTwo {
          bodyTwo
        }
        image {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      ourCoreWork: contentfulSection(
        contentId: { eq: "homepage-our-core-work" }
      ) {
        header
        title
        listItems {
          listItems
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
        filter: { contentId: { eq: "program-level" } }
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
        filter: { contentId: { eq: "project-card" } }
        sort: { fields: orderNumber }
      ) {
        currentProjectCardsContent: nodes {
          orderNumber
          header
          location
          date
          status
          body {
            body
          }
          householdNumber
          windturbineNumber
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

      householdImage: contentfulAsset(title: { eq: "household" }) {
        file {
          url
        }
      }

      windturbineImage: contentfulAsset(title: { eq: "windturbine" }) {
        file {
          url
        }
      }
    }
  `);

  const {
    hero,
    ourMission,
    statistics,
    ourApproach,
    ourProgramsOne,
    ourProgramsTwo,
    ourCoreWork,
    programLevels,
    programLevelCards,
    currentProjects,
    currentProjectCards,
    careerPortal,
    householdImage,
    windturbineImage,
  } = data;
  return {
    hero,
    ourMission,
    statistics,
    ourApproach,
    ourProgramsOne,
    ourProgramsTwo,
    ourCoreWork,
    programLevels,
    programLevelCards,
    currentProjects,
    currentProjectCards,
    careerPortal,
    householdImage,
    windturbineImage,
  };
};

export default useHomepageData;
