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
    description: "Blogging website created with Next JS and selfhosted Strapi CMS",
    info: "",
    techStack: ["Next JS", "Strapi", "Tailwind CSS", "PostgreSQL"],
    year: 2023,
    demo: "https://blog-test-frontend.vercel.app/",
    repo: 'https://github.com/juancodeaudio/blog-test-frontend',
    src: "strapi-blog.png",
    videos: ['strapi-blog-v.mov', ''],
    altImages: ["strapi-blog.png", "strapi-blog-light.png", "strapi-blog-latest.png"],
    background: "bg-gradient-to-br from-neutral-300 via-[#B69083] via-40% to-[#985136]",
    secondBackground: "bg-gradient-to-br from-[#403F44] to-[#1E1E20]",
    foreground: "dark"
  },
  {
    id: 2,
    slug: "michify",
    name: "Michify",
    description: "Website created with vanilla Javascript that consumes the cats API",
    info: "",
    techStack: ["HTML", "Javascript", "Axios"],
    year: 2022,
    demo: "https://juancodeaudio.github.io/michify/",
    repo: 'https://github.com/juancodeaudio/michify',
    src: "michify.png",
    videos: ['michify-v.mov', ''],
    altImages: ["michify.png", "michify-upload.png", "michify.png"],
    background: "bg-gradient-to-br from-[#F9D677] via-[#FAE1A1] via-80% to-[#FBECC4]",
    secondBackground: "bg-gradient-to-br from-[#393F43] to-[#232631]",
    foreground: "dark"
  },
  {
    id: 3,
    slug: "filmaly",
    name: "Filmaly",
    description: "Movies website built with vanilla Javascript and TheMovieDB API",
    info: "",
    techStack: ["Javascript", "CSS", "RestAPI"],
    year: 2022,
    demo: "https://juancodeaudio.github.io/filmaly/",
    repo: 'https://github.com/juancodeaudio/filmaly',
    src: "filmaly.png",
    videos: ['filmaly-v.mov', ''],
    altImages: ["filmaly.png", "filmaly-movie.png", "filmaly-categories.png"],
    background: "bg-gradient-to-br from-[#1C1D2A] to-[#82BFE3]",
    secondBackground: "bg-gradient-to-br from-[#1C1D2A] to-[#030506]",
    foreground: "light"
  },
  {
    id: 4,
    slug: "taskr",
    name: "Taskr",
    description: "ToDo webapp built with ReactJS and Framer Motion",
    info: "",
    techStack: ["React JS", "CSS", "Framer Motion"],
    year: 2023,
    demo: "https://juancodeaudio.github.io/taskr/",
    repo: 'https://github.com/juancodeaudio/taskr',
    src: "taskr.png",
    videos: ["taskr-v.mov", ''],
    altImages: ["taskr.png", "taskr-light.png", "taskr-addnew.png"],
    background: "bg-gradient-to-br from-[#568094] via-[#8FE1B6] to-[#449979]",
    secondBackground: "bg-gradient-to-br from-[#232227] to-[#161618]",
    foreground: "dark"
  },
  // {
  //   id: 5,
  //   slug: "powell-studio",
  //   name: "Powell—Studio",
  //   description: "The online presence for Powell—Studio.",
  //   info: "",
  //   techStack: ["Next JS", "Tailwind CSS"],
  //   year: 2023,
  //   demo: "https://juancodeaudio.github.io/filmaly/",
  //   repo: 'https://github.com/juancodeaudio/filmaly',
  //   src: "1.jpg",
  //   videos: ['', ''],
  //   altImages: ["1.jpg", "1.jpg", "1.jpg"],
  //   background: "bg-neutral-300",
  //   secondBackground: "",
  //   foreground: "dark"
  // },
  // {
  //   id: 6,
  //   slug: "rocketpanda",
  //   name: "Rocket Panda",
  //   description: "An Italian animation studio.",
  //   info: "",
  //   techStack: ["Next JS", "Tailwind CSS"],
  //   year: 2022,
  //   demo: "https://juancodeaudio.github.io/taskr/",
  //   repo: 'https://github.com/juancodeaudio/taskr',
  //   src: "4.jpg",
  //   videos: ['', ''],
  //   altImages: ["4.jpg", "4.jpg", "4.jpg"],
  //   background: "bg-[#11121B]",
  //   secondBackground: "",
  //   foreground: "light"
  // }
] as const;

export const socialMedia = [
  {
    id: 1,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/juancodeaudio/'
  },
  {
    id: 2,
    title: 'Github',
    href: 'https://github.com/juancodeaudio'
  },
  {
    id: 3,
    title: 'Instagram',
    href: 'https://www.instagram.com/juancodeaudio/'
  },
  {
    id: 4,
    title: 'X',
    href: 'https://www.linkedin.com/in/juancodeaudio/'
  }
] as const