import { graphql, useStaticQuery } from "gatsby";

const useLongTermData = () => {
  const data = useStaticQuery(graphql`
    {
      offering: contentfulSection(contentId: { eq: "levelThree-offering" }) {
        title
        header
        body {
          body
        }
      }

      offeringCards: allContentfulSimpleCard(
        filter: { contentId: { eq: "levelThree-offering-card" } }
        sort: { fields: orderNumber }
      ) {
        offeringCardsContent: nodes {
          header
          body {
            body
          }
        }
      }

      areas: contentfulSection(contentId: { eq: "levelThree-areas" }) {
        header
        listItems {
          listItems
        }
      }

      exampleProjects: contentfulSection(
        contentId: { eq: "levelThree-example-projects" }
      ) {
        title: header
        body {
          body
        }
      }

      apply: contentfulSection(contentId: { eq: "levelThree-apply" }) {
        title: header
        body {
          body
        }

        bodyTwo {
          bodyTwo
        }
      }

      projectsCards: allContentfulCard(
        filter: { contentId: { eq: "levelThree-projects-card" } }
        sort: { fields: orderNumber }
        limit: 3
      ) {
        projectsCardsContent: nodes {
          name
          location
          date
          body {
            text: body
          }
          image {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
            description
          }
          url
          email
        }
      }

      infoCard: contentfulInfoCard(
        contentId: { eq: "other-programs-applyInfo" }
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

      structure: contentfulSection(contentId: { eq: "levelThree-structure" }) {
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
    overview,
    offering,
    areas,
    exampleProjects,
    apply,
    hearFromPrev,
    projectsCards: { projectsCardsContent },
    offeringCards: { offeringCardsContent },
    infoCard,
    structure,
  } = data;
  return {
    overview,
    offering,
    areas,
    exampleProjects,
    apply,
    hearFromPrev,
    projectsCardsContent,
    offeringCardsContent,
    infoCard,
    structure,
  };
};

export default useLongTermData;
