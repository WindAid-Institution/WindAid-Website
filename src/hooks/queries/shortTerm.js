import { graphql, useStaticQuery } from "gatsby";

const useShortTermData = () => {
  const data = useStaticQuery(graphql`
    {
      structureCards: allContentfulSimpleCard(
        filter: { contentId: { eq: "shortTerm-structure" } }
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

      volunteers: contentfulSection(contentId: { eq: "shortTerm-volunteers" }) {
        header
        body {
          body
        }
      }

      hearFromPrev: contentfulSection(
        contentId: { eq: "shortTerm-hear-from-previous" }
      ) {
        header
      }

      volunteersCards: allContentfulCard(
        filter: { contentId: { eq: "shortTerm-volunteers-card" } }
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

      apply: contentfulSeparationImage(contentId: { eq: "shortTerm-apply" }) {
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

      infoCard: contentfulInfoCard(contentId: { eq: "shortTerm-applyInfo" }) {
        title {
          title
        }
        price
        note {
          note
        }
        programDates {
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
        contentId: { eq: "shortTerm-structureImages" }
      ) {
        images {
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      applyDescription: contentfulSimpleCard(
        contentId: { eq: "shortTerm-applyDescription" }
      ) {
        title
        header
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
  };
};

export default useShortTermData;
