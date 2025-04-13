export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  {
    name: "Resume",
    link: "/resume",
  },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const socials = [
  {
    id: 1,
    logo: "./insta.svg",
    href: "https://www.instagram.com/sajjadalgburi/",
    alt: "Instagram link logo",
  },
  {
    id: 2,
    logo: "./github.svg",
    href: "https://github.com/Sajjadalgburi",
    alt: "GitHub link logo",
  },
  {
    id: 3,
    logo: "./link.svg",
    href: "https://www.linkedin.com/in/sajjadalgburi/",
    alt: "LinkedIn link logo",
  },
];

export const gridItems = [
  {
    id: 1,
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover object-center",
    titleClassName: "justify-end",
    img: "/labtop.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible Timing",
    description: "Seamless global communication.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "Always improving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast",
    description: "Passion for software.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Continuous Learner",
    description: "Passionate about improving and learning new concepts daily.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Got an Idea?",
    description: "Let's collaborate.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: uuid(),
    title: "Outreach AI",
    des: "Craft the perfect outreach message using latest AI tools.",
    img: "/A-robot.jpg",
    role: "Software Engineer",
    iconLists: [
      "/supabase-logo-icon.svg",
      "/next.svg",
      "/OpenAI_Symbol_1.png",
      "/tail.svg",
      "/ts.svg",
    ],
    link: "https://www.outreachai.app/",
    github: "https://github.com/Sajjadalgburi/outreach-ai",
  },
  {
    id: uuid(),
    title: "Chef Mind AI",
    des: "Upload a photo of your ingredients and let AI craft personalized recipes. Transform everyday ingredients into extraordinary dishes.",
    img: "/baker_8841132.png",
    role: "Software Engineer",
    iconLists: [
      "/ts.svg",
      "/next.svg",
      "/OpenAI_Symbol_1.png",
      "/tail.svg",
      "/supabase-logo-icon.svg",
    ],
    link: "https://www.chefmind.app/",
    github: "https://github.com/Sajjadalgburi/Chef_Mind_AI",
  },
  {
    id: uuid(),
    title: "Interview Pal",
    des: "Be interview-ready with AI-powered mock interviews. Practice coding, behavioral, and system design interviews with real-time feedback.",
    img: "/robot.png",
    role: "Full-Stack Dev",
    iconLists: [
      "/ts.svg",
      "/firebase.svg",
      "/next.svg",
      "/OpenAI_Symbol_1.png",
      "/tail.svg",
    ],
    link: "https://drive.google.com/file/d/1szn73VL_cuMHY3MirBCbhMf3JufhJhfg/view",
    github: "https://github.com/Sajjadalgburi/interview_pal",
  },
  {
    id: uuid(),
    title: "Full-Stack Dev",
    des: "Developed a full-stack news application with React.js that displays global trending news and integrates AI to analyze article bias and generate summaries.",
    img: "/21601.png",
    role: "Software Engineer",
    iconLists: [
      "/ts.svg",
      "/re.svg",
      "/OpenAI_Symbol_1.png",
      "/nodejs-icon.svg",
      "/mongodb.svg",
    ],
    link: "https://drive.google.com/file/d/1WX62CmU2zTO7L5pFUM452zN7G2CRMkPe/view",
    github: "https://github.com/Sajjadalgburi/news-app",
  },
  {
    id: uuid(),
    title: "Fitness AI",
    des: "Personalized workout plans tailored to your fitness goals and preferences.",
    img: "/yoga.jpg",
    role: "Full-Stack Dev",
    iconLists: [
      "/next.svg",
      "/OpenAI_Symbol_1.png",
      "/tail.svg",
      "/ts.svg",
      "/supabase-logo-icon.svg",
    ],
    link: "https://fitness-ai-amber.vercel.app/",
    github: "https://github.com/Sajjadalgburi/Fitness-AI",
  },
  {
    id: uuid(),
    title: "Interlade",
    des: "Revolutionize the modern world and eliminate the need for paper Bills of Lading with Interlade!",
    img: "/t.jpg",
    role: "Software Engineer",
    iconLists: ["/flutter.svg", "/android.svg", "/graphql.svg", "/aws.svg"],
    link: "https://www.interlade.com/",
  },
  {
    id: uuid(),
    title: "Freelance",
    des: "At Shad's Barbershop, we believe every haircut is a masterpiece. Our skilled barbers combine artistry with precision to craft the perfect look just for you.",
    img: "/photo.jpg",
    role: "Front-End Dev",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/css-3.svg",
      "/webpack.svg",
    ],
    link: "https://shads-barbershop.onrender.com/",
  },
  {
    id: uuid(),
    title: "Freelance",
    des: "Brothers Exterior stands as a cherished privately owned family business, passionately dedicated to delivering unparalleled house stucco services across the Greater Toronto Area (GTA).",
    img: "/BNO.jpg",
    role: "Front-End Dev",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.bnostucco.com/",
  },
];

export const testimonials = [
  {
    id: 1,
    text: "Sajjad is truly a talented and hardworking engineer. I've spent time mentoring him and there was never a single task or concept he even so much as hesitated to figure out. He would be a great asset to any engineering team.",
    name: "Bashiri Smith",
    title: "Software Engineer",
    profileImg: "/basher.png",
  },
  {
    id: 2,
    text: "Thanks to OutreachAI (outreachai.app), I can efficiently apply to numerous jobs with personalized applications. Their cover letter generator perfectly aligns job listings with my resume details, creating tailored cover letters every time. Not to mention, their outreach message feature which has helped me alot as well!. I highly recommend this tool. Special thanks to Sajjad Algburi, the impressive solo developer behind this game-changing app.",
    name: "Jay Patel",
    title: "OutreachAI User",
    profileImg: "/jay.jpg",
  },
  {
    id: 3,
    text: "I am incredibly grateful to Sajjad for the fantastic website he created for my company. He was always very polite and accommodating whenever I requested new features. He even went the extra mile by paying for my domain!",
    name: "Ali Mhaidi",
    title: "Freelance Client",
  },
  {
    id: 4,
    text: "I appreciate Sajjad Alguir's help and craftsmanship! With the help of his website, I was able to acquire additional customers, many of whom returned because of the custom booking platform he created for me, all at no extra cost!",
    name: "Habeed Shad",
    title: "Freelance Client",
  },
];

export const myApproach = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Discovery and Planning",
    containerClassName: "bg-black",
    colors: [
      [255, 87, 34],
      [220, 20, 60],
    ],
    desc: "In this phase, I understand the client's needs, define the project scope, identify key objectives, create a project plan, and ensure clear communication with stakeholders.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Development and Implementation",
    colors: [
      [0, 255, 0],
      [0, 128, 0],
    ],
    containerClassName: "bg-black",
    desc: "I develop the project by designing the software architecture, writing clean code, conducting code reviews, integrating necessary services, and collaborating with the client for feedback.",
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Testing and Deployment",
    colors: [[125, 211, 252]],
    containerClassName: "bg-black",
    desc: "I ensure the product is ready for release through thorough testing, fixing issues, preparing deployment plans, deploying the product, and providing post-deployment support.",
  },
];

export const footerData = {
  title: "Want to get to know me better?",
  desc: "Please feel free to contact me anytime via my email sajjadalgburi.dev@gmail.com or reach out to me through my socials below.",
};
function uuid() {
  return crypto.randomUUID();
}
