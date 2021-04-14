import React from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

const LINKS = {
  WHO_WE_ARE: {
    name: "Who We Are",
    links: [
      {
        name: "About Us",
        path: "/",
        external: false,
      },
      {
        name: "Ambassadors",
        path: "/",
        external: false,
      },
      {
        name: "FAQ",
        path: "/",
        external: false,
      },
    ],
  },
  OUR_WORK: {
    name: "Our Work",
    links: [
      {
        name: "Our Impact",
        path: "/our-impact",
        external: false,
      },
      {
        name: "Projects",
        path: "/",
        external: false,
      },
    ],
  },
  JOIN_US: {
    name: "Join Us",
    links: [
      {
        name: "Volunteer Programs",
        path: "/",
        external: false,
      },
      {
        name: "Partnerships",
        path: "/",
        external: false,
      },
      {
        name: "Careers",
        path: "/",
        external: false,
      },
      {
        name: "Living in Trujillo",
        path: "/",
        external: false,
      },
    ],
  },
  CONTACT_US: {
    name: "Contact Us",
    links: [
      {
        name: "General Contact",
        path: "/",
        external: false,
      },
      {
        name: "Program Application",
        path: "/",
        external: false,
      },
    ],
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
