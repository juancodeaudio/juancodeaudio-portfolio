export const links = [
  // { href: "/", label: "Home," },
  { href: "/about", label: "About," },
  { href: "/projects", label: "Projects," },
  { href: "/contact", label: "Contact," },
] as const;

export const projectsData = [
  {
    id: 1,
    slug: "strapi-blog-demo",
    name: "Strapi Blog Demo",
    description: "A partnership between Google & SN37.",
    techStack: ["Next JS", "Tailwind CSS"],
    year: 2023,
    src: "strapi-blog.jpg",
    video: '',
    altImages: ["strapi-blog.jpg", "strapi-blog.jpg", "strapi-blog.jpg"],
    background: "bg-neutral-300"
  },
  {
    id: 2,
    slug: "michify",
    name: "Michify",
    description: "Portfolio site for Decimal.",
    techStack: ["Next JS", "Tailwind CSS"],
    year: 2023,
    src: "michify.jpg",
    video: '',
    altImages: ["michify.jpg", "michify.jpg", "michify.jpg"],
    background: "bg-[#F9D677]"
  },
  {
    id: 3,
    slug: "filmaly",
    name: "Filmaly",
    description: "New web design for the blockchain investment fund Maven 11.",
    techStack: ["Next JS", "Tailwind CSS"],
    year: 2022,
    src: "filmaly.jpg",
    video: '',
    altImages: ["filmaly.jpg", "filmaly.jpg", "filmaly.jpg"],
    background: "bg-[#1C1D2A]"
  },
  {
    id: 4,
    slug: "taskr",
    name: "Taskr",
    description: "Wix Playground is powered by the Wix.com design team.",
    techStack: ["Next JS", "Tailwind CSS"],
    year: 2022,
    src: "taskr.jpg",
    video: '',
    altImages: ["taskr.jpg", "taskr.jpg", "taskr.jpg"],
    background: "bg-[#8FE1B6]"
  },
  {
    id: 5,
    slug: "powell-studio",
    name: "POWELL—STUDIO",
    description: "The online presence for Powell—Studio.",
    techStack: ["Next JS", "Tailwind CSS"],
    year: 2023,
    src: "1.jpg",
    video: '',
    altImages: ["1.jpg", "1.jpg", "1.jpg"],
    background: "bg-neutral-300"
  },
  {
    id: 6,
    slug: "rocketpanda",
    name: "ROCKETPANDA",
    description: "An Italian animation studio.",
    techStack: ["Next JS", "Tailwind CSS"],
    year: 2022,
    src: "4.jpg",
    video: '',
    altImages: ["4.jpg", "4.jpg", "4.jpg"],
    background: "bg-[#11121B]"
  }
] as const;