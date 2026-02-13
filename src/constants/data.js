export const DOMAIN = "manmohansingh.dev";

export const MAIL = `hi@${DOMAIN}`;
export const MAIL_TO = `mailto:${MAIL}`;

export const USERNAME = "pulpmint";

export const NAME = "Manmohan Singh";
export const TAGLINE = "Building things for the Web";

export const TITLE = `${NAME} - ${TAGLINE}`;
export const DESC = `A web developer based in India. Working with JavaScript & Figma. ${TAGLINE}.`;

export const GREETINGS = `I am ${NAME}.`;

export const PIXEL_PERFECT =
  "Crafting pixel-perfect, secure & scalable web experiences with great attention to detail.";

export const DESIGN_DEV =
  "I enjoy working at the intersection of design & engineering, where great user experience meets robust & clean code.";

export const DANPEN = {
  LABEL: "Danpen",
  LINK: "https://www.danpen.wtf",
  YEAR: 2022
};

const TWITTER_GEMS = {
  LABEL: "Twitter Gems",
  LINK: "https://twittrgems.careerleap.io",
  YEAR: 2021
};

const COFFEE_HOURS = {
  LABEL: "Coffee Hours",
  LINK: "https://www.coffeehours.club",
  YEAR: 2020
};

const RIVI = {
  LABEL: "Rivi",
  LINK: "https://www.rivi.co",
  YEAR: 2020
};

export const PROJECTS = [DANPEN, TWITTER_GEMS, COFFEE_HOURS, RIVI];

export const EXPERIENCES = [
  {
    DESG: "Frontend",
    LABEL: "PayU",
    YEAR: "2023"
  },
  {
    DESG: "Full Stack",
    LABEL: "Standard Chartered Bank",
    YEAR: "2020"
  },
  {
    DESG: "Frontend (Intern)",
    LABEL: "Rivi",
    YEAR: "2019"
  }
];

export const SKILLS = [
  "React.js",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Node.js",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Figma"
];

export const AWARDS = [
  {
    ...TWITTER_GEMS,
    AWARD: "Product Hunt - #1 POD",
    LINK: "https://www.producthunt.com/products/twittr-gems"
  }
];

export const GITHUB = {
  LABEL: "GitHub",
  LINK: "https://www.github.com/pulpmint"
};

export const CODEPEN = {
  LABEL: "CodePen",
  LINK: "https://www.codepen.io/pulpmint"
};

export const TWITTER = {
  LABEL: "Twitter",
  LINK: "https://www.twitter.com/pulpmint"
};

export const HASHNODE = {
  LABEL: "Hashnode",
  LINK: "https://pulpmint.hashnode.dev",
  OPTIONAL: "My Blog"
};

export const SOCIALS = [GITHUB, CODEPEN, TWITTER, HASHNODE];

export const FAQS = [
  {
    QUESTION: "What are you currently working on?",
    ANSWER:
      "Currently tinkering with a modular checkout finance flow that supercharges merchants — seamless plug-and-play modules for user onboarding, EMI, KYC & autopay, all in one powerhouse system."
  },
  {
    QUESTION: "What is your thought process for a project?",
    ANSWER:
      "Clarify the goal & design, decide a tech stack, draft a spec doc, client / stakeholder sync & refinement, create small independent sub-tasks, test cases & deploy. The process more or less remains the same. First 4 steps are the key."
  },
  {
    QUESTION: "What do you do when you are not coding?",
    ANSWER:
      "Busy chasing sunsets, capturing & writing about the simplest little things while roaming around the outskirts on my two-wheeler or strumming mellow tunes on ukulele in my balcony."
  },
  {
    QUESTION: "What would you do if you were not a dev?",
    ANSWER: "Probably a photographer or a designer."
  }
];

export const MORE_QUESTIONS = "Have more questions or a project in mind?";

export const COPYRIGHT = `🧙‍♂️ Manmohan Singh`;

export const META = {
  TITLE,
  DESC: `${DESC} ${PIXEL_PERFECT}`,
  CANONICAL: `https://${DOMAIN}`,
  LOCALE: "en_UK",
  TYPE: "website",
  TWITTER_CARD: "summary_large_image",
  OG_IMG_WIDTH: "1200",
  OG_IMG_HEIGHT: "630",
  OG_IMG: "/manmohan-singh-home-og.png",
  OG_IMG_NAME: "Manmohan Singh Home OG.png",
  OG_IMG_TYPE: "image/png",
  FAVICON: "/favicon.ico",
  APPLE_TOUCH: {
    57: "/apple-touch-icon-57x57.png",
    60: "/apple-touch-icon-60x60.png",
    72: "/apple-touch-icon-72x72.png",
    76: "/apple-touch-icon-76x76.png",
    114: "/apple-touch-icon-114x114.png",
    120: "/apple-touch-icon-120x120.png",
    144: "/apple-touch-icon-144x144.png",
    152: "/apple-touch-icon-152x152.png",
    180: "/apple-touch-icon-180x180.png",
    256: "/apple-touch-icon-256x256.png"
  }
};
