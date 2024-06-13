import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTree } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DhruvGoyal404" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/DhruvGoyalThapar/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/agent__dg/" },
  { icon: <FaTree />, path: "https://linktr.ee/DhruvGoyal404" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
