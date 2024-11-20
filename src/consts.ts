import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Kshitij Kapoor",
  EMAIL: "kshitijkapoor0611@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Kshitij Kapoor",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "I write",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/kshitijk4poor"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/kshitijkapoorr",
  },
  {
    NAME: "email",
    HREF: "mailto:kshitijkapoor0611@gmail.com"
  }
];
