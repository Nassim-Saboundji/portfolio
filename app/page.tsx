import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col  items-center">
      <section className="flex flex-col items-center py-3 px-6">
        <h1 className="text-lg font-bold">Nassim Saboundji</h1>
        <p className="italic">FullStack Software Developer specialized in JavaScript/TypeScript based Next.js/React web app development</p>
      </section>
      <div className="px-6">
        <section className="flex flex-col items-start p-3">
          <h2 className="text-lg font-bold py-4">Experience</h2>

          <h3 className="font-bold">JavaScript Mastery - Role: Software Developer Mentor  (June 2023 - December 2023)</h3>
          <ul className="list-disc px-8 py-4">
            <li>Improved students&apos; proficiency in React, Next.js and JavaScript/TypeScript through 1-on-1s and team meetings.</li>
            <li>Conducted code reviews, providing students with actionable feedback and guidance to produce higher quality code.</li>
            <li>Created written tutorials providing clear and concise instructions on setting up various technologies.
            </li>
          </ul>


          <h3 className="font-bold">Replit - Role: Software Developer, Product  (March 2022 - December 2022)</h3>
          <ul className="list-disc px-8 py-4">
            <li>Proposed, designed and participated in the implementation of Replit’s following feature which increased user retention by 50% and reduced churn. <a href="" target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Co-authored official blog post presenting the feature.</a>
            </li>
            <li>Revamped publishing flow frontend enabling users to publish templates which led to an increase in Replit’s power as a platform.</li>
            <li>Implemented company profiles feature which led to 20 companies (including Twitter, Stripe, Hugging Face and many others) doing DevRel on Replit and proposing 40+ high quality templates on our platform.
            </li>
            <li>
              Built moderation tools as GraphQL endpoints that improved the Trust & Safety team’s ability to take quick action against spammers and other malicious users of the site.
            </li>
          </ul>
        </section>
        <section className="flex flex-col items-start p-3 ">
          <h2 className="text-lg font-bold">
            Skills
          </h2>
          <ul className="list-disc px-8 py-4">
            <li>JavaScript/TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>SQL (Postgres)</li>
            <li>CSS & TailwindCSS</li>
          </ul>
        </section>
        <section className="flex flex-col items-start p-3">
          <h2 className="text-lg font-bold">Projects</h2>
        </section>
        <section className="flex flex-col items-start p-3">
          <h2 className="text-lg font-bold">Education</h2>
          <p>Bachelor of Science in Computer Science from the university of Montreal (Sept 2018 - Dec 2021)</p>
        </section>
      </div>
    </main>
  );
}
