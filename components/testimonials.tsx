/// <reference types="google.maps" />
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { StarIcon, GoogleIcon, ArrowRightIcon } from "@/components/icons";

declare global {
  interface Window {
    google: typeof google;
  }
}

type Review = {
  authorName: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime: string;
  text: string;
};

type PlaceSummary = {
  rating: number;
  totalReviews: number;
  mapsUrl: string;
  reviews: Review[];
};

type Status = "loading" | "ready" | "error";

let mapsLoadPromise: Promise<void> | null = null;

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (window.google?.maps?.places) return Promise.resolve();
  if (mapsLoadPromise) return mapsLoadPromise;

  mapsLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Failed to load the Google Maps script"));
    document.head.appendChild(script);
  });

  return mapsLoadPromise;
}

const writeReviewUrl = (placeId: string) =>
  `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`;

const StarRow = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div
    aria-label={`${rating.toFixed(1)} out of 5 stars`}
    className="relative inline-flex"
    role="img"
  >
    <div className="flex gap-0.5 text-default-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} size={size} />
      ))}
    </div>
    <div
      className="absolute inset-0 flex gap-0.5 overflow-hidden text-primary"
      style={{ width: `${(Math.max(0, Math.min(rating, 5)) / 5) * 100}%` }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} size={size} />
      ))}
    </div>
  </div>
);

const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col gap-4 rounded-lg border border-divider bg-content1 p-6"
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, translateY: 12, filter: "blur(4px)" }
      }
      transition={{
        type: "spring",
        duration: 0.45,
        bounce: 0,
        delay: Math.min(index, 4) * 0.06,
      }}
      viewport={{ once: true, margin: "-60px" }}
      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, translateY: 0, filter: "blur(0px)" }
      }
    >
      <div className="flex items-center gap-3">
        {review.profilePhotoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt=""
            className="h-10 w-10 shrink-0 rounded-full"
            height={40}
            src={review.profilePhotoUrl}
            width={40}
          />
        ) : (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-content2 text-sm font-semibold text-default-500">
            {review.authorName.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {review.authorName}
          </p>
          <p className="text-xs text-default-500">{review.relativeTime}</p>
        </div>
      </div>
      <StarRow rating={review.rating} />
      <p className="text-sm leading-relaxed text-default-500">{review.text}</p>
    </motion.div>
  );
};

export const Testimonials = () => {
  const [status, setStatus] = React.useState<Status>("loading");
  const [data, setData] = React.useState<PlaceSummary | null>(null);
  const serviceHost = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const configured = Boolean(
    siteConfig.googlePlacesApiKey && siteConfig.googlePlaceId,
  );

  React.useEffect(() => {
    if (!configured || !serviceHost.current) {
      setStatus("error");

      return;
    }

    let cancelled = false;

    loadGoogleMaps(siteConfig.googlePlacesApiKey)
      .then(() => {
        if (cancelled || !serviceHost.current) return;

        const service = new window.google.maps.places.PlacesService(
          serviceHost.current,
        );

        service.getDetails(
          {
            placeId: siteConfig.googlePlaceId,
            fields: ["rating", "user_ratings_total", "reviews", "url"],
          },
          (place, requestStatus) => {
            if (cancelled) return;

            if (
              requestStatus !==
                window.google.maps.places.PlacesServiceStatus.OK ||
              !place
            ) {
              setStatus("error");

              return;
            }

            setData({
              rating: place.rating ?? 0,
              totalReviews: place.user_ratings_total ?? 0,
              mapsUrl: place.url ?? "",
              reviews: (place.reviews ?? []).map((review) => ({
                authorName: review.author_name,
                authorUrl: review.author_url,
                profilePhotoUrl: review.profile_photo_url,
                rating: review.rating ?? 0,
                relativeTime: review.relative_time_description,
                text: review.text,
              })),
            });
            setStatus("ready");
          },
        );
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [configured]);

  // Not configured yet — stay invisible rather than show a broken section.
  if (!configured) return null;

  const fallback =
    status === "error" || (status === "ready" && !data?.reviews.length);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div ref={serviceHost} className="hidden" />
      <div className="max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
          Customer Reviews
        </h2>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <p className="text-3xl font-bold text-foreground sm:text-4xl">
            What our customers say
          </p>
          {status === "ready" && data && data.totalReviews > 0 && (
            <div className="flex items-center gap-2 text-sm text-default-500">
              <StarRow rating={data.rating} />
              <span>
                {data.rating.toFixed(1)} · {data.totalReviews} Google reviews
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12">
        {status === "loading" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-44 rounded-lg border border-divider bg-content1"
              />
            ))}
          </div>
        )}

        {status === "ready" && data && data.reviews.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.reviews.map((review, i) => (
              <ReviewCard key={i} index={i} review={review} />
            ))}
          </div>
        )}

        {fallback && (
          <motion.div
            className="flex flex-col items-start gap-4 rounded-lg border border-divider bg-content1 p-8 sm:flex-row sm:items-center sm:justify-between"
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, translateY: 8 }
            }
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            viewport={{ once: true }}
            whileInView={
              reduceMotion ? { opacity: 1 } : { opacity: 1, translateY: 0 }
            }
          >
            <div>
              <p className="text-lg font-semibold text-foreground">
                See our reviews on Google
              </p>
              <p className="mt-1 text-sm text-default-500">
                Read what Vaughan &amp; Toronto customers say about working with
                Muto Electric.
              </p>
            </div>
            <a
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-divider px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              href={data?.mapsUrl || writeReviewUrl(siteConfig.googlePlaceId)}
              rel="noopener noreferrer"
              target="_blank"
            >
              View on Google
              <ArrowRightIcon size={16} />
            </a>
          </motion.div>
        )}
      </div>

      {status === "ready" && data && data.reviews.length > 0 && (
        <div className="mt-8 flex items-center gap-2 text-xs text-default-500">
          <GoogleIcon size={14} />
          Reviews sourced live from Google ·{" "}
          <a
            className="font-medium text-foreground hover:text-primary"
            href={data.mapsUrl || writeReviewUrl(siteConfig.googlePlaceId)}
            rel="noopener noreferrer"
            target="_blank"
          >
            leave a review
          </a>
        </div>
      )}
    </section>
  );
};
