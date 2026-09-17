export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Muto Electric",
  shortName: "Muto Electric",
  tagline: "Vaughan & Toronto's Trusted Electrician",
  description:
    "Muto Electric provides licensed residential and commercial electrical services across Vaughan, Toronto, and the GTA — panel upgrades, EV charger installs, pot lights, wiring, and more.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://nkrilis.github.io/muto-electric-website",
  phone: "(647) 333-7383",
  phoneHref: "tel:+16473337383",
  smsHref: "sms:+16473337383",
  serviceArea: "Vaughan, Toronto & the GTA",
  serviceAreaCities: [
    "Vaughan",
    "Toronto",
    "Woodbridge",
    "Maple",
    "Richmond Hill",
    "Thornhill",
    "Markham",
    "King City",
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  navMenuItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
