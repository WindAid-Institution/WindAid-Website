import React from "react";
import Box from "@mui/material/Box";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
// eslint-disable-next-line max-len
import CommunityCard from "components/OurImpact/Community/Carousel/CommunityCard";
import { ROUTES } from "src/constants/routes";
import Button from "src/shared/Button";

import useShortTermData from "queries/shortTerm";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(() => ({
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
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const style = {
    titleStyle: {
      textStyle: {
        textAlign: isUpMd ? "left" : "center",
      },
    },
  };

  return (
    <SectionWrapper>
      <TextSection title={header} style={style} />
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
        <Button
          text="Apply"
          style={{ marginTop: "24px" }}
          route={ROUTES.APPLY}
        />
      </Box>
    </SectionWrapper>
  );
};
export default HearFromPrev;
