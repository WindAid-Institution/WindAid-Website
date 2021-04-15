import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import useOurImpactData from "queries/ourImpact";
import Title from "shared/Title";
import Body from "shared/Body";
import "styles/OurImpact/JoinProgram.css";
import "styles/OurPrograms/OurPrograms.css";

const PartnerWithUs = () => {
  const {
    partnerWithUs: {
      title,
      body: { body },
      image,
    },
  } = useOurImpactData();
  return (
    <section className="join-program join-program--reverse">
      <div className="join-program__container join-program__container--reverse container">
        <div className="join-program__content--reverse">
          <Title title={title} />
          <Body body={body} />
          <Link to="/">
            <button
              type="button"
              // eslint-disable-next-line max-len
              className="join-program__button our-programs__button"
            >
              Learn about partnership
            </button>
          </Link>
        </div>

        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="join-program__image our-programs__image"
        />
      </div>
    </section>
  );
};
export default PartnerWithUs;
