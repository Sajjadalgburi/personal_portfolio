export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  console.log("====================================");
  console.log("showing");
  console.log("====================================");
  return (
    <nav className=" absolute w-full">
      <ul>
        <li className="text-white text-2xl">Home</li>
      </ul>
    </nav>
  );
}
