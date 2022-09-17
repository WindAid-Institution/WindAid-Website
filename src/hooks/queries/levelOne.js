import { graphql, useStaticQuery } from "gatsby";

const useLevelOneData = () => {
  const data = useStaticQuery(graphql`
    {
      structureContent: contentfulSection(
        contentId: { eq: "eLearning-Structure" }
      ) {
        header
        body {
          body
        }
      }

      modules: allContentfulLevelOneModules(
        sort: { order: ASC, fields: orderNumber }
      ) {
        modulesContent: nodes {
          orderNumber
          moduleTitle
          moduleDescription {
            moduleDescription
          }
          moduleIcon {
            title
            gatsbyImageData(quality: 100, placeholder: BLURRED)
          }
        }
      }

      infoCard: contentfulInfoCard(
        contentId: { eq: "eLearning-program-applyInfo" }
      ) {
        title {
          title
        }
        price
        note {
          note
        }
        priceImage {
          description
          file {
            url
          }
        }
        programDates {
          heading
          data {
            cohort
            dates
          }
        }
        included {
          included
        }
        notIncluded {
          notIncluded
        }
        image {
          description
          file {
            url
          }
        }
      }
      applyDescription: contentfulSimpleCard(
        contentId: { eq: "eLearning-applyDescription" }
      ) {
        header
      }
    }
  `);

  const {
    modules: { modulesContent },
    structureContent,
    infoCard,
    applyDescription,
  } = data;
  return {
    modulesContent,
    structureContent,
    infoCard,
    applyDescription,
  };
};

export default useLevelOneData;
