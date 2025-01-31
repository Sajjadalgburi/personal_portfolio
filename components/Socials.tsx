/* eslint-disable @next/next/no-img-element */
import { socials } from "@/data";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-3">
      {socials.map((social) => (
        <Link
          target="_blank"
          key={social.id}
          className="p-1 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          href={social.href}
        >
          <img width={25} height={25} alt={social.alt} src={social.logo} />
        </Link>
      ))}
    </div>
  );
}
