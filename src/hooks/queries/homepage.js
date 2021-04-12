import { graphql, useStaticQuery } from "gatsby";

export const useHomepageData = () => {
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
    }
  `);

  const { hero, ourMission, statistics, ourApproach } = data;
  return { hero, ourMission, statistics, ourApproach };
};
