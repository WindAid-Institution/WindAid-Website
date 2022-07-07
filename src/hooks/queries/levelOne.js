import { graphql, useStaticQuery } from "gatsby";

const useLevelOneData = () => {
  const data = useStaticQuery(graphql`
    {
      structureContent: contentfulSection(
        contentId: { eq: "levelOne-Structure" }
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

      infoCard: contentfulInfoCard(contentId: { eq: "levelOne-applyInfo" }) {
        title {
          title
        }
        price
        note {
          note
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
        contentId: { eq: "levelOne-applyDescription" }
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
