import { graphql, useStaticQuery } from "gatsby";

const useShortTermData = () => {
  const data = useStaticQuery(graphql`
    {
      structureCards: allContentfulSimpleCard(
        filter: { contentId: { eq: "levelTwo-structure" } }
        sort: { fields: orderNumber }
      ) {
        structureCardsContent: nodes {
          title
          header
          body {
            body
          }
        }
      }

      volunteers: contentfulSection(contentId: { eq: "levelTwo-volunteers" }) {
        header
        body {
          body
        }
      }

      hearFromPrev: contentfulSection(
        contentId: { eq: "levelTwo-hear-from-previous" }
      ) {
        header
      }

      volunteersCards: allContentfulCard(
        filter: { contentId: { eq: "levelTwo-volunteers-card" } }
        sort: { fields: orderNumber }
        limit: 3
      ) {
        volunteersCardsContent: nodes {
          name
          location
          date
          body {
            text: body
          }
          image {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
          }
          additionalText
        }
      }

      apply: contentfulSeparationImage(contentId: { eq: "levelTwo-apply" }) {
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

      infoCard: contentfulInfoCard(
        contentId: { eq: "engineering-program-applyInfo" }
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

      structureImages: contentfulSection(
        contentId: { eq: "levelTwo-structureImages" }
      ) {
        images {
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      applyDescription: contentfulSimpleCard(
        contentId: { eq: "levelTwo-applyDescription" }
      ) {
        title
        header
      }

      living: contentfulSection(contentId: { eq: "levelTwo-living" }) {
        title
        body {
          body
        }
        images {
          title
          description
          file {
            url
          }
        }
      }
    }
  `);

  const {
    overview,
    volunteers,
    hearFromPrev,
    volunteersCards: { volunteersCardsContent },
    structureCards: { structureCardsContent },
    apply,
    infoCard,
    structureImages,
    applyDescription,
    living,
  } = data;
  return {
    overview,
    volunteers,
    hearFromPrev,
    volunteersCardsContent,
    structureCardsContent,
    apply,
    infoCard,
    structureImages,
    applyDescription,
    living,
  };
};

export default useShortTermData;
