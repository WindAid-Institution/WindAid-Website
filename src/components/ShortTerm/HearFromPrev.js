import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
// eslint-disable-next-line max-len
import CommunityCard from "components/OurImpact/Community/Carousel/CommunityCard";
import ApplyButton from "components/ApplyButton";

import useShortTermData from "queries/shortTerm";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: "32px 0",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const HearFromPrev = () => {
  const {
    hearFromPrev: { header },
    volunteersCardsContent,
  } = useShortTermData();

  const classes = useStyles();

  return (
    <SectionWrapper>
      <TextSection title={header} size="lg" />
      <Box className={classes.cardsContainer}>
        {volunteersCardsContent.map(({ name, location, date, body, image }) => (
          <Box className={classes.cardContainer} key={name}>
            <CommunityCard
              name={name}
              location={location}
              date={date}
              body={body}
              image={image}
              isTopAligned
            />
          </Box>
        ))}
      </Box>

      <Box className={classes.buttonContainer}>
        <ApplyButton />
      </Box>
    </SectionWrapper>
  );
};
export default HearFromPrev;
