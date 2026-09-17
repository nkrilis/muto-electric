import Image from "next/image";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { ArrowRightIcon, CheckCircleIcon, PhoneIcon } from "@/components/icons";

import logo from "../public/images/logo-white.svg";

const trustPoints = [
  "Residential & commercial electrical work",
  "Upfront pricing, no surprises",
  "Clean, careful work in your home",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-divider">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {siteConfig.serviceArea}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your Trusted Local{" "}
              <span className="text-primary">Electrician</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-default-500">
              Muto Electric delivers reliable, safe, and expert electrical
              services for homes and businesses across Vaughan, Toronto, and the
              GTA.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 rounded-md bg-primary-400 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-300"
                href={siteConfig.phoneHref}
              >
                <PhoneIcon size={18} />
                Call {siteConfig.phone}
              </a>
              <NextLink
                className="inline-flex items-center gap-2 rounded-md border border-divider px-6 py-3 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                href="/services"
              >
                View Our Services
                <ArrowRightIcon size={18} />
              </NextLink>
            </div>
            <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-default-500"
                >
                  <CheckCircleIcon
                    className="shrink-0 text-primary"
                    size={18}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="flex h-64 w-64 items-center justify-center rounded-lg border border-divider bg-content1 sm:h-80 sm:w-80">
              <Image
                priority
                alt="Muto Electric logo"
                className="invert dark:invert-0"
                height={180}
                src={logo}
                width={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-divider bg-content1">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 text-center sm:grid-cols-4">
          {[
            "Licensed Electrical Work",
            "Upfront, No-Surprise Pricing",
            "Local & Direct — No Call Centre",
            "Residential & Commercial",
          ].map((point) => (
            <div
              key={point}
              className="flex items-center justify-center gap-2 text-sm font-medium text-default-500"
            >
              <CheckCircleIcon className="shrink-0 text-primary" size={16} />
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </h2>
          <p className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Electrical services for every job
          </p>
          <p className="mt-4 text-default-500">
            From small repairs to full panel upgrades, Muto Electric handles it
            all — residential and commercial.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <NextLink
              key={service.slug}
              className="group rounded-lg border border-divider bg-content1 p-6 transition-colors hover:border-primary"
              href={`/services/${service.slug}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-400 text-primary-foreground">
                <service.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
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

        <div className="mt-10 flex justify-center">
          <NextLink
            className="inline-flex items-center gap-2 rounded-md border border-divider px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            href="/services"
          >
            See All Services
            <ArrowRightIcon size={16} />
          </NextLink>
        </div>
      </section>

      {/* Service area */}
      <section className="border-y border-divider bg-content1">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Where We Work
          </h2>
          <p className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Proudly serving {siteConfig.serviceArea}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {siteConfig.serviceAreaCities.map((city) => (
              <span
                key={city}
                className="rounded-md border border-divider px-4 py-2 text-sm text-default-500"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="max-w-xl text-primary-foreground">
            Call or text Muto Electric today to talk through your project and
            get a quote.
          </p>
          <a
            className="inline-flex items-center gap-2 rounded-md bg-background px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-content1"
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
