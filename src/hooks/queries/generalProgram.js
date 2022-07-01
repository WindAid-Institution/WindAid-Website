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
        contentId: { eq: "generalProgram-types-of-programs" }
      ) {
        titleOne: header
        titleTwo: title
      }

      volunteerLevel1: contentfulSection(
        contentId: { eq: "generalProgram-level-1" }
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

      volunteerLevel2: contentfulSection(
        contentId: { eq: "generalProgram-level-2" }
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

      volunteerLevel3: contentfulSection(
        contentId: { eq: "generalProgram-level-3" }
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
    volunteerLevel1,
    volunteerLevel2,
    volunteerLevel3,
    adventure,
  } = data;
  return {
    overview,
    impact,
    experience,
    volunteerMain,
    volunteerLevel1,
    volunteerLevel2,
    volunteerLevel3,
    adventure,
  };
};

export default useGeneralProgramData;
