export type Role = {
  // Doubles as the section anchor on /work.
  id: string
  company: string
  companyUrl: string
  title: string
  dates: string
  summary: string
  highlights?: string[]
  stack: string[]
}

// Newest first. Read by both the about page's work table and /work itself.
export const roles: Role[] = [
  {
    id: "rise-x",
    company: "Rise-X",
    companyUrl: "https://rise-x.io",
    title: "Full-Stack Software Developer",
    dates: "Feb 2021 — Aug 2026",
    summary:
      "Full-stack on an offline-first Electron app — React front end, C#/.NET back end — that keeps working with no connection and syncs the moment it's back.",
    highlights: [
      "Re-architected a large React codebase to TypeScript.",
      "Led a 5-person team spread across Australia, Ukraine, and the Philippines.",
    ],
    stack: ["Electron", "React", "TypeScript", "C#/.NET"],
  },
  {
    id: "restoplus",
    company: "Restoplus",
    companyUrl: "https://restoplus.com",
    title: "Full-Stack Software Developer",
    dates: "Jul 2020 — Feb 2021",
    summary:
      "Took the table-booking feature from concept to release and kept the React frontend, Node backend, and React Native app running.",
    stack: ["React", "React Native", "Node"],
  },
  {
    id: "streetby",
    company: "StreetBy",
    companyUrl: "https://streetby.com",
    title: "Full-Stack Software Developer",
    dates: "Apr 2017 — Jul 2020",
    summary:
      "Owned the merchant management module on a Node backend and integrated Paynamics payments.",
    stack: ["Node", "Paynamics"],
  },
]

export const RESUME_URL =
  "https://drive.google.com/file/d/1lxz2nwO_lAgggL1GhcDxLBJDRUlIZ294/view?usp=sharing"
