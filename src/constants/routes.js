export const ROUTES = {
  WHO_WE_ARE: {
    name: "Who We Are",
    path: "/who-we-are",
  },
  ABOUT_US: {
    name: "About us",
    path: "/about-us",
  },
  AMBASSADORS: {
    name: "Ambassadors",
    path: "/ambassadors",
  },

  OUR_WORK: {
    name: "Our Work",
    path: "/our-work",
  },
  OUR_IMPACT: {
    name: "Our impact",
    path: "/our-impact",
  },
  OUR_PROJECTS: {
    name: "Our projects",
    path: "/our-projects",
  },
  PROJECT_ONE: {
    name: "Project one",
    path: "/project-one",
  },
  PROJECT_TWO: {
    name: "Project two",
    path: "/project-two",
  },
  PROJECT_THREE: {
    name: "Project three",
    path: "/project-three",
  },

  JOIN_US: {
    name: "Join Us",
    path: "/join-us",
  },

  GENERAL_PROGRAM: {
    name: "Peru Electrification Program",
    path: "/general-program",
  },

  SHORT_TERM_PROGRAM: {
    name: "Short Term Volunteer",
    path: "/short-term-program",
  },
  LONG_TERM_PROGRAM: {
    name: "Long Term Volunteer",
    path: "/long-term-program",
  },

  PARTNERSHIP: {
    name: "Partnership",
    path: "/partnership",
  },

  CAREERS: {
    name: "Careers",
    path: "/careers",
  },

  TRUJILLO: {
    name: "Living in Trujillo",
    path: "/trujillo",
  },

  FAQ: {
    name: "FAQ",
    path: "/faq",
  },

  CONTACT_US: {
    name: "Contact Us",
    path: "/contact",
  },

  APPLY: {
    name: "Apply",
    path: "/apply",
  },

  APPLICATION_PROGRAM: {
    name: "Application program",
    path: "/application-program",
  },
};

const {
  WHO_WE_ARE,
  ABOUT_US,
  AMBASSADORS,
  OUR_WORK,
  OUR_IMPACT,
  OUR_PROJECTS,
  PROJECT_ONE,
  PROJECT_TWO,
  PROJECT_THREE,
  JOIN_US,
  GENERAL_PROGRAM,
  SHORT_TERM_PROGRAM,
  LONG_TERM_PROGRAM,
  PARTNERSHIP,
  CAREERS,
  TRUJILLO,
  FAQ,
  CONTACT_US,
  APPLY,
} = ROUTES;
export const NAVBAR_ROUTES = [WHO_WE_ARE, OUR_WORK, JOIN_US, CONTACT_US, APPLY];

export const MENU_ROUTES = [
  {
    main: WHO_WE_ARE,
    submenu: [ABOUT_US, AMBASSADORS],
  },
  {
    main: OUR_WORK,
    submenu: [
      OUR_IMPACT,
      {
        ...OUR_PROJECTS,
        subSubmenu: [PROJECT_ONE, PROJECT_TWO, PROJECT_THREE],
      },
    ],
  },

  {
    main: JOIN_US,
    submenu: [
      {
        ...GENERAL_PROGRAM,
        subSubmenu: [SHORT_TERM_PROGRAM, LONG_TERM_PROGRAM],
      },
      PARTNERSHIP,
      CAREERS,
      TRUJILLO,
      FAQ,
    ],
  },
  { main: CONTACT_US },
  { main: APPLY },
];
