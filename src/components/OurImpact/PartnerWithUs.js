import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";
import "styles/OurImpact/JoinProgram.css";
import "styles/OurPrograms/OurPrograms.css";

import OUR_IMPACT_DATA from "pages/our-impact/data";

const { PARTNER_WITH_US } = OUR_IMPACT_DATA;

const imageQuery = graphql`
  {
    partnerWithUs: file(relativePath: { eq: "OurImpact/partner_with_us.png" }) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
  }
`;

const PartnerWithUs = () => {
  const data = useStaticQuery(imageQuery);
  const imageData = getImage(data.partnerWithUs);
  return (
    <section className="join-program join-program--reverse">
      <div className="join-program__container join-program__container--reverse container">
        <div className="join-program__content--reverse">
          <Title title={PARTNER_WITH_US.TITLE} />
          <Body body={PARTNER_WITH_US.BODY} />
          <Link to="/">
            <button
              type="button"
              // eslint-disable-next-line max-len
              className="join-program__button our-programs__button"
            >
              {PARTNER_WITH_US.BUTTON}
            </button>
          </Link>
        </div>

        <GatsbyImage
          image={imageData}
          alt="group of people"
          className="join-program__image our-programs__image"
        />
      </div>
    </section>
  );
};
export default PartnerWithUs;
