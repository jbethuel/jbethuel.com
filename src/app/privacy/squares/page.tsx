import type { Metadata } from "next"
import { CustomLink } from "@/components/custom-link"
import { Intro } from "@/components/intro"
import { Fragment } from "react"

export const metadata: Metadata = {
  title: "squares - Privacy Policy",
  description: "Privacy policy for squares, a habit tracker by Joseph Bethuel Dela Cruz.",
}

const CONTACT_EMAIL = "jbethuel.dev@gmail.com"

type Section = {
  heading: string
  body: React.ReactNode
}

const sections: Section[] = [
  {
    heading: "The short version",
    body: (
      <p className="font-light">
        squares collects nothing. There is no account, no server, and no analytics or tracking of
        any kind. Every Habit you track stays in storage on your device, and it leaves only when you
        decide to export it or put it on a Share Card.
      </p>
    ),
  },
  {
    heading: "What squares stores",
    body: (
      <p className="font-light">
        The Habits you create, the Days you log, and your app settings are saved in local storage on
        your device. squares has no backend and makes no network calls to send this data anywhere,
        at any time.
      </p>
    ),
  },
  {
    heading: "Notifications",
    body: (
      <p className="font-light">
        The Daily Reminder is scheduled on your device by the operating system. It is never sent as
        a push notification, and squares has no way to know whether or when a reminder was shown.
      </p>
    ),
  },
  {
    heading: "Export and Import",
    body: (
      <p className="font-light">
        Export writes your data to a file and hands it to your device&apos;s share sheet - you
        choose where it goes, whether that is a folder, another app, or cloud storage you already
        use. Import reads a file you choose the same way. Neither operation sends anything to
        squares or to any server we run.
      </p>
    ),
  },
  {
    heading: "Share Card",
    body: (
      <p className="font-light">
        A Share Card is drawn on your device and handed to your device&apos;s share sheet, where you
        pick the destination - saving the image, messaging it, or posting it. squares does not
        receive or keep a copy, and no server is involved in making one.
      </p>
    ),
  },
  {
    heading: "Third parties",
    body: (
      <p className="font-light">
        squares uses no third-party analytics, advertising, or crash-reporting services. No data
        about you or your use of the app is shared with anyone, because none is collected in the
        first place.
      </p>
    ),
  },
  {
    heading: "Deleting your data",
    body: (
      <p className="font-light">
        Uninstalling squares deletes everything on the device, and there is no cloud backup to also
        clear - squares turns off Android&apos;s automatic app backup for exactly this reason. If
        you want to keep your data first, use Export before you uninstall.
      </p>
    ),
  },
  {
    heading: "Children",
    body: (
      <p className="font-light">
        squares is not directed at children and collects no personal information from anyone,
        regardless of age.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p className="font-light">
        If this policy ever changes, the update will be posted at this same address.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p className="font-light">
        Questions about this policy can go to{" "}
        <CustomLink
          href={`mailto:${CONTACT_EMAIL}`}
          className="underline underline-offset-4 decoration-gray-700 transition-colors hover:text-brand hover:decoration-brand"
        >
          {CONTACT_EMAIL}
        </CustomLink>
        .
      </p>
    ),
  },
]

export default function SquaresPrivacyPage() {
  return (
    <Fragment>
      <Intro title="privacy" subTitle="squares - last updated September 17, 2026" />
      <section>
        {sections.map((section) => (
          <article key={section.heading} className="mb-6">
            <h2 className="font-semibold underline underline-offset-8 decoration-gray-700">
              {section.heading}
            </h2>
            <div className="mt-2">{section.body}</div>
          </article>
        ))}
      </section>
    </Fragment>
  )
}
