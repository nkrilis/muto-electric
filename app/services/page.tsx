import { Metadata } from "next";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description: `Residential and commercial electrical services offered by ${siteConfig.name} across ${siteConfig.serviceArea}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-divider px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-default-500">
          Licensed electrical work for homes and businesses across{" "}
          {siteConfig.serviceArea} — big projects or small fixes.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <NextLink
              key={service.slug}
              className="group rounded-lg border border-divider bg-content1 p-6 transition-colors hover:border-primary"
              href={`/services/${service.slug}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-400 text-primary-foreground">
                <service.icon size={22} />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-default-500">
                {service.description}
              </p>
              <p className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRightIcon size={14} />
              </p>
            </NextLink>
          ))}
        </div>
      </section>

      <section className="border-t border-divider bg-content1">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Don&apos;t see what you need? Just ask.
          </h2>
          <p className="max-w-xl text-default-500">
            Every project is a little different. Call Peter directly to discuss
            your job and get a straight answer.
          </p>
          <a
            className="inline-flex items-center gap-2 rounded-md bg-primary-400 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-300"
            href={siteConfig.phoneHref}
          >
            <PhoneIcon size={18} />
            Call {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
