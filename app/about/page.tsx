import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { CheckCircleIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: `Get to know ${siteConfig.name}, a local electrical contractor serving ${siteConfig.serviceArea}.`,
};

const values = [
  {
    title: "Straight Talk",
    description:
      "Clear, upfront pricing and honest advice about what your project actually needs — no upselling.",
  },
  {
    title: "Quality Workmanship",
    description:
      "Every job is done carefully and to code, whether it's a single outlet or a full panel upgrade.",
  },
  {
    title: "Respect For Your Home",
    description:
      "Clean job sites, careful scheduling, and clear communication from quote to completion.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-divider px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          About <span className="text-primary">Muto Electric</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-default-500">
          A local electrical contractor serving {siteConfig.serviceArea}, built
          on reliable work and straightforward service.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-default-500">
          Muto Electric is a Vaughan-based electrical contractor serving
          homeowners and businesses throughout Toronto and the GTA. From panel
          upgrades and EV charger installs to pot lights, rewiring, and everyday
          repairs, every job gets the same attention to detail and respect for
          your property.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-default-500">
          When you call Muto Electric, you talk directly to the person doing the
          work — no call centre, no runaround. Just a local electrician who
          shows up, does the job right, and stands behind it.
        </p>
      </section>

      <section className="border-t border-divider bg-content1">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
            What We Stand For
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-divider bg-background p-6"
              >
                <CheckCircleIcon className="text-primary" size={26} />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-default-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Let&apos;s talk about your project
        </h2>
        <a
          className="inline-flex items-center gap-2 rounded-md bg-primary-400 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-300"
          href={siteConfig.phoneHref}
        >
          <PhoneIcon size={18} />
          Call {siteConfig.phone}
        </a>
      </section>
    </>
  );
}
