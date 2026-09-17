"use client";

import { useEffect } from "react";

import { siteConfig } from "@/config/site";
import { PhoneIcon } from "@/components/icons";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-foreground">
        Something went wrong
      </h1>
      <p className="text-default-500">
        Sorry about that. Try again, or call us directly and we&apos;ll sort it
        out.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="rounded-md border border-divider px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          onClick={() => reset()}
        >
          Try Again
        </button>
        <a
          className="inline-flex items-center gap-2 rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-300"
          href={siteConfig.phoneHref}
        >
          <PhoneIcon size={16} />
          Call {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
