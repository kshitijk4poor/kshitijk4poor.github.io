type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "kshitijkapoor0611@gmail.com",
  title: "Hi, I’m Kshitij 👋",
  // profile: "/profile.webp",
  description:
    "I am a 19 year old self-taught *frontend developer* and *UI/UX designer*. learning *cybersecurity*, *machine learning*. currently dabbling with *golang*",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/kshitijjkapoor",
    },
    {
      label: "Github",
      link: "https://github.com/kshitijk4poor",
    },
    {
      label: "Discord",
      link: "https://github.com/kshitijk4poor",
    },
  ],
};

export default presentation;
