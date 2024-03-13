export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Durdle",
    techs: ["HTML", "CSS", "Python"],
    link: "https://github.com/Devansh3712/durdle",
  },
  {
    title: "Augmy",
    techs: ["flutter"],
    link: "https://github.com/Arjun-Mishra-312/augmy",
  },
  {
    title: "Booktunes",
    techs: ["HTML","CSS","Python"],
    link: "https://github.com/PustakP/BookTunes/",
  },
  {
    title: "backlink-identifier",
    techs: ["HTML","CSS","Javascript"],
    link: "https://github.com/kshitijk4poor/backlink",
  },
];

export default projects;
