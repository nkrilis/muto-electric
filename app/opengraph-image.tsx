import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const dynamic = "force-static";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [poppinsBold, openSansRegular] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Poppins-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/OpenSans-Regular.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        background: "#000000",
      }}
    >
      <div style={{ display: "flex", width: 20, background: "#ED1C24" }} />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg fill="#ED1C24" height={48} viewBox="0 0 24 24" width={48}>
            <path d="M13 2 4.5 14h5.7l-1.2 8L18 10h-5.7L13 2Z" />
          </svg>
          <span
            style={{
              fontFamily: "Poppins",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#ED1C24",
              textTransform: "uppercase",
            }}
          >
            Muto Electric
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontFamily: "Poppins",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#FFFFFF",
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontFamily: "Open Sans",
            fontSize: 28,
            color: "#A1A1AA",
            maxWidth: 820,
          }}
        >
          Licensed residential &amp; commercial electrical services across{" "}
          {siteConfig.serviceArea}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#ED1C24",
              color: "#FFFFFF",
              padding: "16px 32px",
              borderRadius: 8,
              fontFamily: "Open Sans",
              fontSize: 30,
            }}
          >
            <svg fill="#FFFFFF" height={26} viewBox="0 0 24 24" width={26}>
              <path d="M5.5 3.5h2.7l1.3 3.8-2 1.6a11.6 11.6 0 0 0 5.6 5.6l1.6-2 3.8 1.3v2.7c0 1-.8 1.8-1.8 1.7C8.9 17.9 6.1 15.1 4.8 7.3c-.1-1 .7-1.8 1.7-1.8Z" />
            </svg>
            {siteConfig.phone}
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Poppins", data: poppinsBold, weight: 700, style: "normal" },
        {
          name: "Open Sans",
          data: openSansRegular,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
