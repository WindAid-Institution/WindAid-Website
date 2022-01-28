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

  PROGRAMS: {
    name: "Programs",
    path: "/level-2",
  },

  VOLUNTEER_PROGRAMS: {
    name: "Volunteer",
    path: "/general-program",
  },
  CERTIFICATE_PROGRAMS: {
    name: "Certificate Programs",
    path: "/",
  },
  LEVEL_1: {
    name: "Level 1: E-learning",
    path: "#",
  },

  LEVEL_2: {
    name: "Level 2: In Person Practical Training",
    path: "/level-2",
  },
  LEVEL_3: {
    name: "Level 3: Project Focused Career Development",
    path: "/level-3",
  },

  PARTNERSHIP: {
    name: "Partnership",
    path: "/level-2",
  },

  CAREERS: {
    name: "Careers",
    path: "/application-program",
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
    path: "/contact-us",
  },

  GENERAL_CONTACT: {
    name: "Contact",
    path: "/contact",
  },

  PROGRAM_APPLICATION: {
    name: "Program Application",
    path: "/application-program",
  },
  APPLY: {
    name: "Apply",
    path: "/application-program",
  },
  DONATE: {
    name: "Donate",
    path: "/donate",
  },
};

const {
  WHO_WE_ARE,
  ABOUT_US,
  AMBASSADORS,
  OUR_WORK,
  OUR_IMPACT,
  PROGRAMS,
  CERTIFICATE_PROGRAMS,
  LEVEL_1,
  LEVEL_2,
  LEVEL_3,
  TRUJILLO,
  FAQ,
  GENERAL_CONTACT,
  DONATE,
} = ROUTES;
export const NAVBAR_ROUTES = [
  WHO_WE_ARE,
  OUR_WORK,
  PROGRAMS,
  GENERAL_CONTACT,
  DONATE,
];

export const MENU_ROUTES = [
  {
    main: WHO_WE_ARE,
    submenu: [ABOUT_US, AMBASSADORS],
  },
  {
    main: OUR_WORK,
    submenu: [OUR_IMPACT],
  },

  {
    main: PROGRAMS,
    submenu: [
      {
        ...CERTIFICATE_PROGRAMS,
        subSubmenu: [LEVEL_1, LEVEL_2, LEVEL_3],
      },
      TRUJILLO,
      FAQ,
    ],
  },
  { main: DONATE },
];
