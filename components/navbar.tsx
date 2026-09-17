"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import React from "react";

import { siteConfig } from "@/config/site";
import { PhoneIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

import logoSvg from "../public/images/logo-small-white.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <HeroUINavbar
      className="bg-background/90 backdrop-blur border-b border-divider"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <Image
              priority
              alt="Muto Electric logo"
              className="invert dark:invert-0"
              src={logoSvg}
              width={30}
            />
            <p className="font-bold text-inherit tracking-wide">
              MUTO ELECTRIC
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-6 justify-start ml-8">
          {siteConfig.navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    "text-sm font-medium text-default-500 hover:text-foreground transition-colors",
                    isActive && "text-foreground",
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <a
            className="inline-flex items-center gap-2 rounded-md bg-primary-400 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-300"
            href={siteConfig.phoneHref}
          >
            <PhoneIcon size={16} />
            {siteConfig.phone}
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 gap-2 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-background/95 pt-6">
        <div className="mx-4 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <NextLink
                className="text-lg font-medium text-foreground/80 hover:text-foreground"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <a
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-primary-400 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-300"
              href={siteConfig.phoneHref}
            >
              <PhoneIcon size={16} />
              Call {siteConfig.phone}
            </a>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
