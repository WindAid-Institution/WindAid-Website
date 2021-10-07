import { graphql, useStaticQuery } from "gatsby";

const useLongTermData = () => {
  const data = useStaticQuery(graphql`
    {
      offering: contentfulSection(contentId: { eq: "longTerm-offering" }) {
        title
        header
        body {
          body
        }
      }

      offeringCards: allContentfulSimpleCard(
        filter: { contentId: { eq: "longTerm-offering-card" } }
        sort: { fields: orderNumber }
      ) {
        offeringCardsContent: nodes {
          header
          body {
            body
          }
        }
      }

      areas: contentfulSection(contentId: { eq: "longTerm-areas" }) {
        header
        listItems {
          listItems
        }
      }

      exampleProjects: contentfulSection(
        contentId: { eq: "longTerm-example-projects" }
      ) {
        title: header
        body {
          body
        }
      }

      apply: contentfulSection(contentId: { eq: "longTerm-apply" }) {
        title: header
        body {
          body
        }

        bodyTwo {
          bodyTwo
        }
      }

      projectsCards: allContentfulCard(
        filter: { contentId: { eq: "longTerm-projects-card" } }
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

      infoCard: contentfulInfoCard(contentId: { eq: "longTerm-applyInfo" }) {
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

      structure: contentfulSection(contentId: { eq: "longTerm-structure" }) {
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
