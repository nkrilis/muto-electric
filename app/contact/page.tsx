import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call or text ${siteConfig.name} to get a quote for your electrical project in ${siteConfig.serviceArea}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-divider px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-default-500">
          The fastest way to reach Muto Electric is by phone. Call or text and
          we&apos;ll help you get your project sorted.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            className="flex flex-col items-center gap-4 rounded-lg border border-primary-400 bg-primary-400 px-8 py-10 text-center transition-colors hover:bg-primary-300"
            href={siteConfig.phoneHref}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-background text-primary">
              <PhoneIcon size={26} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-foreground">
                Call
              </p>
              <p className="mt-1 text-2xl font-bold text-primary-foreground">
                {siteConfig.phone}
              </p>
            </div>
          </a>

          <a
            className="flex flex-col items-center gap-4 rounded-lg border border-divider bg-content1 px-8 py-10 text-center transition-colors hover:border-primary"
            href={siteConfig.smsHref}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-background text-foreground">
              <PhoneIcon size={26} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-default-500">
                Text
              </p>
              <p className="mt-1 text-2xl font-bold text-foreground">
                {siteConfig.phone}
              </p>
            </div>
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-default-500">
          <MapPinIcon size={18} />
          <span>Proudly serving {siteConfig.serviceArea}</span>
        </div>
      </section>
    </>
  );
}
