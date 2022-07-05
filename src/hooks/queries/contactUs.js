import { graphql, useStaticQuery } from "gatsby";

const useContactUsData = () => {
  const data = useStaticQuery(graphql`
    {
      contactUs: contentfulContactUsInfo(contentId: { eq: "contact-us-info" }) {
        title
        subHeaderText
        infoIcons {
          gatsbyImageData(
            placeholder: BLURRED
            quality: 100
            height: 40
            width: 40
          )
          title
        }
        infoList
      }
    }
  `);

  const { contactUs } = data;
  return {
    contactUs,
  };
};

export default useContactUsData;
