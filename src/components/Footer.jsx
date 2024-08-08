import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
const Footer = () => {
  return (
    <section className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <img src={logo} alt={logo} width={200} className="my-20" />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wider text-gray-400">
        &copy;Koushik Ahmed. All rights reserved.
      </p>
    </section>
  );
};
export default Footer;
