import { links } from "../../project-assets/data";

const Navbar = () => {
  return (
    <div className="bg-blue-50">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center md:justify-between sm:py-8">
        <h2 className="text-3xl font-bold text-blue-600">KA</h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize tracking-wide text-lg hover:text-blue-600 duration-600"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
