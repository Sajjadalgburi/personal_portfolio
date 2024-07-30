export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Interlade",
    des: "Revolutionize the modern world and eliminate the need for paper Bills of Lading with Interlade!",
    img: "/t.jpg",
    role: "Software Engineer",
    iconLists: ["/flutter.svg", "/android.svg", "/graphql.svg", "/aws.svg"],
    link: "https://www.interlade.com/",
  },
  {
    id: 2,
    title: "Shad's Barbershop",
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
    id: 3,
    title: "BNO Stucco",
    des: "Brothers Exterior stands as a cherished privately owned family business, passionately dedicated to delivering unparalleled house stucco services across the Greater Toronto Area (GTA).",
    img: "/BNO.jpg",
    role: "Full-Stack Dev",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/aws.svg", "/mongodb.svg"],
    link: "https://www.bnostucco.com/",
  },
];

export const testimonials = [
  {
    id: 1,
    text: "Sajjad is truly a talented and hardworking engineer. I've spent time mentoring him and there was never a single task or concept he even so much as hesitated to figure out. He would be a great asset to any engineering team.",
    name: "Bashiri Smith",
    link: "https://www.linkedin.com/in/bashiri-smith/",
    title: "Software Engineer",
  },
  {
    id: 2,
    text: "I am incredibly grateful to Sajjad for the fantastic website he created for my company. He was always very polite and accommodating whenever I requested new features. He even went the extra mile by paying for my domain!",
    name: "Ali Mhaidi",
    link: "https://www.instagram.com/brothers_exterior_stucco/",
    title: "Client",
  },
  {
    id: 3,
    text: "I appreciate Sajjad Alguir's help and craftsmanship! With the help of his website, I was able to acquire additional customers, many of whom returned because of the custom booking platform he created for me, all at no extra cost!",
    name: "Habeed Shad",
    link: "https://www.instagram.com/habeeb.afzal_/",
    title: "Client",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
