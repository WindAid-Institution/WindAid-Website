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
    path: "/projects",
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
    path: "/certificate-programs",
  },

  VOLUNTEER_PROGRAMS: {
    name: "Volunteer",
    path: "/volunteer",
  },
  CERTIFICATE_PROGRAMS: {
    name: "Certificate Programs",
    path: "/certificate-programs",
  },
  E_LEARNING: {
    name: "E-learning",
    path: "/e-learning",
  },

  ENGINEERING_PROGRAM: {
    name: "Engineering Program",
    path: "/engineering-program",
  },
  INTERNSHIP_PROGRAM: {
    name: "Internship Program",
    path: "/internship-program",
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

  PROGRAM_APPLICATION: {
    name: "Program Application",
    path: "/application",
  },
  APPLY: {
    name: "Apply",
    path: "/application",
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
  OUR_PROJECTS,
  OUR_IMPACT,
  PROGRAMS,
  CERTIFICATE_PROGRAMS,
  ENGINEERING_PROGRAM,
  INTERNSHIP_PROGRAM,
  // CAREERS,
  TRUJILLO,
  FAQ,
  CONTACT_US,
  DONATE,
  // VOLUNTEER_PROGRAMS,
  // VOLUNTEER_PROGRAMS,
} = ROUTES;
export const NAVBAR_ROUTES = [
  WHO_WE_ARE,
  OUR_WORK,
  PROGRAMS,
  CONTACT_US,
  DONATE,
];

export const MENU_ROUTES = [
  {
    main: WHO_WE_ARE,
    submenu: [ABOUT_US, AMBASSADORS],
  },
  {
    main: OUR_WORK,
    submenu: [OUR_PROJECTS, OUR_IMPACT],
  },

  {
    main: PROGRAMS,
    submenu: [
      {
        ...CERTIFICATE_PROGRAMS,
        subSubmenu: [ENGINEERING_PROGRAM, INTERNSHIP_PROGRAM],
      },
      TRUJILLO,
      FAQ,
    ],
  },
  {
    main: CONTACT_US,
  },
  { main: DONATE },
];
