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
      "Full-stack on an offline-first Electron app — React front end, C#/.NET back end — that keeps working with no connection and syncs to the cloud the moment it's back.",
    highlights: [
      "Led a 5-person team of frontend and backend developers spread across Australia, Ukraine, and the Philippines, running sprint planning, daily scrum, and retrospectives.",
      "Built and maintained the C#/.NET endpoints and services behind the front end, owning features end to end rather than the UI alone.",
      "Re-architected a large React codebase from JavaScript to TypeScript: typesafe, reusable functional components, Zustand for client state, and React Query for server state.",
      "Practiced TDD with 80%+ unit-test coverage, kept a Storybook for designers and product owners, and maintained Playwright suites that catch regressions in critical flows before every release.",
      "Adopted Claude Code and MCP tooling, building custom Skills for code review, documentation, and internal workflows.",
    ],
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "C#/.NET",
      "Zustand",
      "React Query",
      "Storybook",
      "Playwright",
      "Claude Code",
    ],
  },
  {
    id: "restoplus",
    company: "Restoplus",
    companyUrl: "https://restoplus.com",
    title: "Full-Stack Software Developer",
    dates: "Jul 2020 — Feb 2021",
    summary:
      "Took the table-booking feature from concept to release and kept the React frontend, Node backend, and React Native app running.",
    highlights: [
      "Practiced TDD with Sinon, backed by end-to-end tests in Cypress and Puppeteer.",
      "Shipped the app to the Google Play Store.",
    ],
    stack: ["React", "React Native", "Node", "Sinon", "Cypress", "Puppeteer"],
  },
  {
    id: "streetby",
    company: "StreetBy",
    companyUrl: "https://streetby.com",
    title: "Full-Stack Software Developer",
    dates: "Apr 2017 — Jul 2020",
    summary:
      "Built and owned the merchant management module on a Node backend, and shipped the app to both the Google Play Store and the Apple App Store.",
    highlights: [
      "Integrated Paynamics for online payments, Globe SMS for messaging, Branch.io for deep linking, and OneSignal for push notifications.",
      "Built tailored reports that surfaced data insights for the marketing and sales teams.",
      "Worked with the CEO, product manager, and marketing team to assess technical options and inform decisions.",
    ],
    stack: ["Node", "Paynamics", "Globe SMS", "Branch.io", "OneSignal"],
  },
]

export const RESUME_URL =
  "https://drive.google.com/file/d/1lxz2nwO_lAgggL1GhcDxLBJDRUlIZ294/view?usp=sharing"
