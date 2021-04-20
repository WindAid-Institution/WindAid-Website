import { graphql, useStaticQuery } from "gatsby";

const useGeneralProgramData = () => {
  const data = useStaticQuery(graphql`
    {
      overview: contentfulSection(
        contentId: { eq: "generalProgram-overview" }
      ) {
        header
        title
        body {
          body
        }
        bodyTwo {
          bodyTwo
        }
        images {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      impact: contentfulSection(contentId: { eq: "generalProgram-impact" }) {
        title: header
        subHeader: title
        listItems {
          listItems
        }
      }

      experience: contentfulSection(
        contentId: { eq: "generalProgram-memorable-experiences" }
      ) {
        title: header
        body {
          body
        }
        bodyTwo {
          bodyTwo
        }
        images {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      volunteerMain: contentfulSection(
        contentId: { eq: "generalProgram-types-of-volunteer" }
      ) {
        titleOne: header
        titleTwo: title
      }

      volunteerShort: contentfulSection(
        contentId: { eq: "generalProgram-short-term" }
      ) {
        title: header
        body {
          body
        }
        image {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      volunteerLong: contentfulSection(
        contentId: { eq: "generalProgram-long-term" }
      ) {
        title: header
        body {
          body
        }
        image {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      adventure: contentfulSection(
        contentId: { eq: "generalProgram-adventure" }
      ) {
        header
        subHeader: title
        body {
          body
        }
        image {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  `);

  const {
    overview,
    impact,
    experience,
    volunteerMain,
    volunteerShort,
    volunteerLong,
    adventure,
  } = data;
  return {
    overview,
    impact,
    experience,
    volunteerMain,
    volunteerShort,
    volunteerLong,
    adventure,
  };
};

export default useGeneralProgramData;
