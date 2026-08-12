import { GithubIcon, LinkedinIcon } from "../Icons/BrandIcons";
import meImage from "../../assets/me-bgout.webp";

const BIO =
  "Let's make your idea benefits you, your colleagues, and your customers.";

interface SocialLink {
  name: string;
  href: string;
  icon: typeof GithubIcon;
}

const socials: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/diego-ortizv/",
    icon: LinkedinIcon,
  },
  { name: "GitHub", href: "https://github.com/DiegoAOV02", icon: GithubIcon },
];

const ProfileCard = () => {
  return (
    <aside className="hidden lg:block lg:fixed lg:top-36 lg:left-[var(--sidebar-left)] lg:z-40 lg:w-[320px]">
      <div className="relative rounded-[28px] bg-white p-5 text-center shadow-2xl">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-cyan-500"
          viewBox="0 0 320 616"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M32 55 C 15 15, 90 -5, 145 12 C 185 24, 205 55, 185 78"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 7"
            strokeLinecap="round"
          />
          <path
            d="M42 335 C 25 365, 55 388, 50 412 C 46 434, 18 442, 14 458"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 7"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative z-10 overflow-hidden rounded-[20px] ring-1 ">
          <img
            src={meImage}
            alt="Diego Ortiz"
            className="aspect-[3/4] w-full origin-top scale-[1.7] object-cover"
          />
        </div>

        <h2 className="relative z-10 mt-5 text-xl font-bold text-black">
          Diego Ortiz
        </h2>

        <span className="relative z-10 mx-auto mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 shadow-md shadow-cyan-500/30">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>

        <p className="relative z-10 mt-3 text-sm font-medium leading-relaxed text-gray-500">
          {BIO}
        </p>

        <div className="relative z-10 mt-5 flex items-center justify-center gap-4 border-t border-black/5 pt-5">
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors duration-300 hover:bg-cyan-500 hover:text-white"
            >
              <Icon size={16} strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProfileCard;
