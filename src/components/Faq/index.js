import React, { useState } from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";

import useFaqData from "queries/faq";
import SectionWrapper from "shared/SectionWrapper";
import Body from "shared/Body";
import TextSection from "shared/TextSection";
import { ROUTES } from "src/constants/routes";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },

  accordionContainer: {
    marginTop: theme.spacing(7),
  },

  accordion: {
    boxShadow: "none",

    "&:before": {
      display: "none",
    },
  },

  accordionSummary: {
    paddingLeft: 0,

    "& > div": {
      margin: "12px 0 !important",
    },
  },

  accordionDetails: {
    padding: "0 0 0 34px !important",
  },

  openIndicator: {
    paddingRight: theme.spacing(1),
  },
}));

const Faq = () => {
  const {
    find: { title },
    questionsAnswersContent,
  } = useFaqData();
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <SectionWrapper>
      <TextSection title={title} size="lg" />
      <Typography>
        If you can’t find an answer, feel free to
        <Link className={classes.link} to={ROUTES.CONTACT_US.path}>
          {" contact us"}
        </Link>
        !
      </Typography>
      <Box className={classes.accordionContainer}>
        {questionsAnswersContent.map(
          ({ question, answer: { answer }, orderNumber }) => (
            <Accordion
              square
              expanded={expanded === orderNumber}
              onChange={handleChange(orderNumber)}
              key={orderNumber}
              className={classes.accordion}
            >
              <AccordionSummary
                aria-controls={`panel${orderNumber}-content`}
                id={`panel${orderNumber}-header`}
                className={classes.accordionSummary}
              >
                <Typography variant="h5" className={classes.openIndicator}>
                  {expanded === orderNumber ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </Typography>
                <Typography variant="h6">{question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Body
                  style={{ textStyle: { margin: 0 } }}
                  body={answer}
                  size="lg"
                />
              </AccordionDetails>
            </Accordion>
          )
        )}
      </Box>
    </SectionWrapper>
  );
};
export default Faq;
