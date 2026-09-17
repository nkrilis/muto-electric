import Image from "next/image";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { PhoneIcon, MapPinIcon } from "@/components/icons";

import logoSvg from "../public/images/logo-small-white.svg";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                alt="Muto Electric logo"
                className="invert dark:invert-0"
                src={logoSvg}
                width={28}
              />
              <span className="font-bold tracking-wide text-foreground">
                MUTO ELECTRIC
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-default-500">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <NextLink
                    className="text-sm text-default-500 hover:text-primary"
                    href="/services"
                  >
                    {service.title}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <NextLink
                    className="text-sm text-default-500 hover:text-primary"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  className="flex items-center gap-2 text-sm text-default-500 hover:text-primary"
                  href={siteConfig.phoneHref}
                >
                  <PhoneIcon size={16} />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-default-500">
                <MapPinIcon className="mt-0.5 shrink-0" size={16} />
                {siteConfig.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-divider pt-6 text-xs text-default-500 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Proudly serving {siteConfig.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
};
