import { graphql, useStaticQuery } from "gatsby";

const useHomepageData = () => {
  const data = useStaticQuery(graphql`
    {
      hero: contentfulPageHero(contentId: { eq: "homepage" }) {
        title
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
  } = data;
  return {
    hero,
    ourMission,
    statistics,
    ourApproach,
    ourProgramsOne,
    ourProgramsTwo,
    ourCoreWork,
  };
};

export default useHomepageData;
