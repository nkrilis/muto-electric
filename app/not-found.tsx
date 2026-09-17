import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        404
      </p>
      <h1 className="text-3xl font-bold text-foreground">Page not found</h1>
      <p className="text-default-500">
        That page doesn&apos;t exist. Head back home or check out our services.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <NextLink
          className="inline-flex items-center gap-2 rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-300"
          href="/"
        >
          Back Home
          <ArrowRightIcon size={16} />
        </NextLink>
        <a
          className="rounded-md border border-divider px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          href={siteConfig.phoneHref}
        >
          Call {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
