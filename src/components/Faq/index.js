import React, { useState } from "react";
import { Link } from "gatsby";
import useTheme from "@mui/material/styles/useTheme";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";

import useFaqData from "queries/faq";
import SectionWrapper from "shared/SectionWrapper";
import Body from "shared/Body";
import TextSection from "shared/TextSection";
import { ROUTES } from "src/constants/routes";

const Faq = () => {
  const {
    find: { title },
    questionsAnswersContent,
  } = useFaqData();
  const theme = useTheme();

  const classes = {
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
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <SectionWrapper>
      <TextSection title={title} size="lg" />
      <Typography>
        If you can’t find an answer, feel free to
        <Link style={classes.link} to={ROUTES.CONTACT_US.path}>
          {" contact us"}
        </Link>
        !
      </Typography>
      <Box sx={classes.accordionContainer}>
        {questionsAnswersContent.map(
          ({ question, answer: { answer }, orderNumber }) => (
            <Accordion
              square
              expanded={expanded === orderNumber}
              onChange={handleChange(orderNumber)}
              key={orderNumber}
              sx={classes.accordion}
            >
              <AccordionSummary
                aria-controls={`panel${orderNumber}-content`}
                id={`panel${orderNumber}-header`}
                sx={classes.accordionSummary}
              >
                <Typography variant="h5" sx={classes.openIndicator}>
                  {expanded === orderNumber ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </Typography>
                <Typography variant="h6">{question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={classes.accordionDetails}>
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
