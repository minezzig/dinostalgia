import { navLinks } from "../utils/data.js";
import useScrollTo from "../utils/useScrollTo.js";
import { teamMembers } from "../utils/data.js";

function Footer() {
  const scrollToSection = useScrollTo();
  return (
    <footer className="bg-dark/90 text-light">
      <section className="container mx-auto flex flex-col justify-between gap-12 p-8 py-20 md:flex-row">
        {/* navigation  */}
        <article className="flex-1">
          <h3 className="mb-7 text-lg font-semibold font-pressStart">Navigation</h3>
          <div className="flex list-none flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.href}`}
                  className="text-secondary hover:text-highlight"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </div>
        </article>

        {/* team */}
        <article className="flex-1">
          <h3 className="mb-7 text-lg font-semibold font-pressStart">Team</h3>
          <div className="flex flex-col gap-2">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                className="text-primary hover:text-highlight"
                target="_blank"
                href={member.link}
              >
                {member.name} - {member.role}
              </a>
            ))}
          </div>
        </article>

        {/* chingu */}
        <article className="flex flex-1 flex-col gap-2">
          <h3 className="mb-7 text-lg font-semibold font-pressStart">Organisation</h3>
          <a target="_blank" href="https://www.chingu.io/">
            <img
              src="/chingu-logo.png"
              className="h-16"
              alt="chingu logo"
            />
          </a>

          <p className="mt-4 text-light">
            This project was built by Team 33 as part of the Chingu Voyage 53.
            Chingu is a global collaboration platform and coding community.
          </p>

          <a
            className="mt-4 text-primary hover:text-highlight"
            href="https://github.com/chingu-voyages/V53-tier3-team-33"
          >
            {" "}
            GitHub Repo
          </a>
        </article>
      </section>

      <p className="flex h-12 items-center justify-center bg-dark text-light">
        &copy; {new Date().getFullYear()} Chingu. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
