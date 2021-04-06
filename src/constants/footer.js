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
      },
      {
        name: "Ambassadors",
        path: "/",
      },
      {
        name: "FAQ",
        path: "/",
      },
    ],
  },
  OUR_WORK: {
    name: "Our Work",
    links: [
      {
        name: "Our Impact",
        path: "/",
      },
      {
        name: "Projects",
        path: "/",
      },
    ],
  },
  JOIN_US: {
    name: "Join Us",
    links: [
      {
        name: "Volunteer Programs",
        path: "/",
      },
      {
        name: "Partnerships",
        path: "/",
      },
      {
        name: "Careers",
        path: "/",
      },
      {
        name: "Living in Trujillo",
        path: "/",
      },
    ],
  },
  CONTACT_US: {
    name: "Contact Us",
    links: [
      {
        name: "General Contact",
        path: "/",
      },
      {
        name: "Program Application",
        path: "/",
      },
    ],
  },
};
const { WHO_WE_ARE, OUR_WORK, JOIN_US, CONTACT_US } = LINKS;
export const FOOTER_LINKS = [WHO_WE_ARE, OUR_WORK, JOIN_US, CONTACT_US];

export const FOOTER_SOCIALS = {
  name: "Socials",
  links: [
    {
      name: "instagram",
      icon: <FaInstagram />,
      link: "",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedinIn />,
      link: "",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      link: "",
    },
  ],
};
