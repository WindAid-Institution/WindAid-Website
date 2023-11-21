import React from "react";

import { ROUTES } from "src/constants/routes";

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

const LINKS = {
  WHO_WE_ARE: {
    name: "Who We Are",
    links: [ROUTES.ABOUT_US, ROUTES.AMBASSADORS],
  },
  OUR_WORK: {
    name: "Our Work",
    links: [ROUTES.OUR_WORK, ROUTES.OUR_IMPACT],
  },
  JOIN_US: {
    name: "Join Us",
    links: [
      ROUTES.CERTIFICATE_PROGRAMS,
      ROUTES.E_LEARNING,
      ROUTES.ENGINEERING_PROGRAM,
      ROUTES.INTERNSHIP_PROGRAM,
      ROUTES.TRUJILLO,
      ROUTES.FAQ,
    ],
  },
  CONTACT_US: {
    name: "Contact",
    links: [ROUTES.CONTACT_US, ROUTES.VOLUNTEER_PROGRAMS],
  },
};
const { WHO_WE_ARE, OUR_WORK, JOIN_US, CONTACT_US } = LINKS;
export const FOOTER_LINKS = [WHO_WE_ARE, OUR_WORK, JOIN_US, CONTACT_US];

export const BASIC_SOCIAL_LINKS = [
  {
    name: "instagram",
    accName: "@windaidinstitute",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/windaidinstitute",
  },
  {
    name: "Facebook",
    accName: "@WindAidInstitute",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/WindAidInstitute",
  },
  {
    name: "Linkedin",
    accName: "WindAid Institute",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/windaid/",
  },
];

export const FOOTER_SOCIALS = {
  name: "Socials",
  links: [
    ...BASIC_SOCIAL_LINKS,
    {
      name: "YouTube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/channel/UCsUgpazA2kMQ6DoHGq_5fuA",
    },
  ],
};
