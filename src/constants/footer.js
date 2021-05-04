import React from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

import { ROUTES } from "src/constants/routes";

const LINKS = {
  WHO_WE_ARE: {
    name: "Who We Are",
    links: [ROUTES.ABOUT_US, ROUTES.AMBASSADORS, ROUTES.FAQ],
  },
  OUR_WORK: {
    name: "Our Work",
    links: [ROUTES.OUR_IMPACT, ROUTES.OUR_PROJECTS],
  },
  JOIN_US: {
    name: "Join Us",
    links: [
      ROUTES.VOLUNTEER_PROGRAMS,
      ROUTES.PARTNERSHIP,
      ROUTES.CAREERS,
      ROUTES.TRUJILLO,
    ],
  },
  CONTACT_US: {
    name: "Contact Us",
    links: [ROUTES.GENERAL_CONTACT, ROUTES.PROGRAM_APPLICATION],
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
    name: "Twitter",
    accName: "@WindAid",
    icon: <FaTwitter />,
    link: "https://twitter.com/windaid?",
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
