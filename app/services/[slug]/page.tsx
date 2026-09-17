import { Metadata } from "next";
import { notFound } from "next/navigation";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { ArrowRightIcon, CheckCircleIcon, PhoneIcon } from "@/components/icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: `${service.description} Serving ${siteConfig.serviceArea}.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-divider px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <NextLink
            className="text-sm font-medium text-default-500 hover:text-primary"
            href="/services"
          >
            &larr; All Services
          </NextLink>
          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-md bg-primary-400 text-primary-foreground">
            <service.icon size={28} />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-default-500">
            {service.description}
          </p>
          <div className="mt-8">
            <a
              className="inline-flex items-center gap-2 rounded-md bg-primary-400 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-300"
              href={siteConfig.phoneHref}
            >
              <PhoneIcon size={18} />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">
          What&apos;s included
        </h2>
        <ul className="mt-6 flex flex-col gap-4">
          {service.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <CheckCircleIcon
                className="mt-0.5 shrink-0 text-primary"
                size={20}
              />
              <span className="text-default-500">{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-divider bg-content1">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Ready to talk about your {service.title.toLowerCase()} project?
          </h2>
          <p className="max-w-xl text-default-500">
            Call or text Muto Electric for a straight answer and a fair quote.
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">Other Services</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {otherServices.map((other) => (
            <NextLink
              key={other.slug}
              className="group rounded-lg border border-divider bg-content1 p-6 transition-colors hover:border-primary"
              href={`/services/${other.slug}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-400 text-primary-foreground">
                <other.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {other.title}
              </h3>
              <p className="mt-2 flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRightIcon size={14} />
              </p>
            </NextLink>
          ))}
        </div>
      </section>
    </>
  );
}
