import {
  BoltIcon,
  BuildingIcon,
  ClipboardCheckIcon,
  HardHatIcon,
  HomeIcon,
  LightbulbIcon,
  PlugIcon,
  WireIcon,
  WrenchIcon,
} from "@/components/icons";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: typeof BoltIcon;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "panel-upgrades",
    title: "Electrical Panel Upgrades",
    description:
      "Replace outdated fuse boxes and undersized panels with modern 100A or 200A service to safely support today's electrical demands.",
    icon: BoltIcon,
    highlights: [
      "Upgrade from a fuse box or undersized panel to 100A or 200A copper service",
      "Free up capacity for EV chargers, hot tubs, AC units, and home additions",
      "ESA permit and inspection handled as part of the job",
      "Coordinated shutdown with your utility to keep downtime short",
    ],
  },
  {
    slug: "pot-lights",
    title: "Pot Lights & Recessed Lighting",
    description:
      "Custom pot light layouts and LED recessed lighting installs that upgrade any room or ceiling with clean, modern light.",
    icon: LightbulbIcon,
    highlights: [
      "Custom layout planning for kitchens, living rooms, basements, and exteriors",
      "Energy-efficient LED fixtures with dimming options",
      "Insulation-contact (IC) rated fixtures where required",
      "Clean cuts and patch-ready ceilings when the job is done",
    ],
  },
  {
    slug: "ev-charger-installation",
    title: "EV Charger Installation",
    description:
      "Home charging station installs for Tesla and all major EV brands, done right and ready to plug in.",
    icon: PlugIcon,
    highlights: [
      "Level 2 charger installs for Tesla, ChargePoint, and all major EV brands",
      "Dedicated circuit sized correctly for your charger and panel capacity",
      "Garage, driveway, and exterior mounting options",
      "Panel capacity assessment included, with an upgrade quote if you need one",
    ],
  },
  {
    slug: "wiring-rewiring",
    title: "Wiring & Rewiring",
    description:
      "New wiring runs and full home rewires, including replacement of old or unsafe knob-and-tube and aluminum wiring.",
    icon: WireIcon,
    highlights: [
      "Full or partial home rewires for older properties",
      "Replacement of knob-and-tube and aluminum wiring with modern copper",
      "New circuit runs for additions, workshops, and outbuildings",
      "Work planned to minimize disruption to your walls and ceilings",
    ],
  },
  {
    slug: "outlets-switches-fixtures",
    title: "Outlets, Switches & Fixtures",
    description:
      "Installation of new outlets, USB outlets, dimmers, switches, and light fixtures throughout your home or business.",
    icon: LightbulbIcon,
    highlights: [
      "Standard, GFCI, and USB/USB-C outlet installation",
      "Dimmer and smart switch installation and wiring",
      "Light fixture, fan, and chandelier hookups",
      "Outlet relocation and childproofing",
    ],
  },
  {
    slug: "troubleshooting-repairs",
    title: "Electrical Troubleshooting & Repairs",
    description:
      "Flickering lights, tripped breakers, or dead outlets — we diagnose the issue and fix it safely and correctly.",
    icon: WrenchIcon,
    highlights: [
      "Diagnosis of flickering lights, dead outlets, and tripping breakers",
      "Safety checks on warm outlets, switches, and panels",
      "Repair of damaged wiring and loose connections",
      "A clear explanation of the issue and the fix before work starts",
    ],
  },
  {
    slug: "renovation-electrical",
    title: "Renovation Electrical",
    description:
      "Electrical work for kitchen, bathroom, and basement renovations, coordinated with your contractor from rough-in to finish.",
    icon: HomeIcon,
    highlights: [
      "Rough-in and finish electrical for kitchen and bathroom renovations",
      "Basement apartment and secondary suite wiring",
      "Coordination with your contractor's schedule and inspections",
      "Layout planning for outlets, switches, and lighting",
    ],
  },
  {
    slug: "new-construction-wiring",
    title: "New Construction Wiring",
    description:
      "Full electrical rough-in and finish work for new builds, additions, and basement apartments.",
    icon: HardHatIcon,
    highlights: [
      "Full electrical rough-in for new builds and additions",
      "Service entrance and panel installation",
      "Coordination with framers, insulators, and drywallers",
      "Final trim and fixture installation",
    ],
  },
  {
    slug: "commercial-electrical",
    title: "Commercial Electrical",
    description:
      "Installation and maintenance for offices, retail spaces, and commercial units across the GTA.",
    icon: BuildingIcon,
    highlights: [
      "Office, retail, and commercial unit wiring and maintenance",
      "Lighting retrofits and energy-efficient upgrades",
      "Panel and service work for commercial tenants",
      "Scheduling around business hours to limit disruption",
    ],
  },
  {
    slug: "electrical-inspections",
    title: "Electrical Safety Inspections",
    description:
      "Thorough inspections for peace of mind, home insurance, or real estate transactions.",
    icon: ClipboardCheckIcon,
    highlights: [
      "Full panel and wiring safety inspections",
      "Documentation for home insurance and real estate transactions",
      "Identification of outdated or unsafe wiring, including knob-and-tube and aluminum",
      "A clear report of findings and recommended next steps",
    ],
  },
];
