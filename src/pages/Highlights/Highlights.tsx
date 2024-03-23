import { Link } from "@tanstack/react-router";

function Highlights() {
  return (
    <>
      <main className="flex flex-col justify-center">
        <article className="flex flex-col items-center justify-center gap-4 py-20">
          <header>
            <h2 className="flex items-center gap-3 text-5xl font-bold">
              <span className="text-violet-500">All About</span>
              <span className="px-3 py-1 text-white bg-purple-500 bg-gradient-to-r from-violet-500 to-purple-500">
                React
              </span>
              <span className="text-purple-500">I Love It</span>
            </h2>
            <p className="text-lg font-semibold text-center">
              React ❤️ React Native ❤️ Typescript
            </p>
          </header>
          <img
            className="p-6 rounded-full bg-gradient-to-b from-violet-500 to-purple-500 w-60 h-60"
            src="/cute-avatar.png"
            alt="cute-avatar"
          />
        </article>
        <div className="flex flex-col p-16 bg-gradient-to-t from-violet-500 to-purple-500">
          <article className="flex flex-col w-full px-20 py-12 bg-white text-slate-700">
            <h3 className="mb-10 text-3xl font-bold uppercase">Timeline✨</h3>
            <section className="relative px-4 pb-10 border-l-2 border-yellow-300">
              <header>
                <h4 className="text-xl font-semibold">
                  PT United Tractors Tbk
                </h4>
                <div className="text-sm font-light">May 2023 - Now</div>
                <div className="mb-6 text-lg font-medium">
                  Front End Developer
                </div>
              </header>
              <ul className="ml-10 list-disc">
                <li>
                  Develop and maintain Heavy Equipment Management for Mobile
                  using React Native.
                </li>
                <li>
                  Develop and maintain Corporate Running Event Application for
                  Web using React (Progressive Web Application).
                </li>
                <li>
                  Collaborate with Business Analyst, Quality Ansurance
                  Developer, Back End Developer, and Technical Lead.
                </li>
                <li>
                  Manage development proccess with Azure DevOps, Azure
                  Pipelines, and Git.
                </li>
              </ul>
              <span className="absolute py-0.5 bg-white -left-3 top-0">⭐</span>
            </section>
            <section className="relative px-4 pb-10 border-l-2 border-yellow-300">
              <header>
                <h4 className="text-xl font-semibold">UT School Jakarta</h4>
                <div className="text-sm font-light">Oct 2023 - Mar 2023</div>
                <div className="mb-6 text-lg font-medium">
                  Full Stack Programmer Student
                </div>
              </header>
              <ul className="ml-10 list-disc">
                <li>Basic Web Development (HTML, CSS, and Javascript).</li>
                <li>Basic Front End Development (React and React Native).</li>
                <li>Basic Back End Development (NodeJS, .NET and Laravel).</li>
                <li>Mentored by Professional Developers.</li>
              </ul>
              <span className="absolute py-0.5 bg-white -left-3 top-0">⭐</span>
            </section>
            <section className="relative px-4 border-l-2 border-transparent">
              <header>
                <h4 className="text-xl font-semibold">
                  Bukit Asam Vocational High School
                </h4>
                <div className="text-sm font-light">Jul 2019 - Jun 2022</div>
                <div className="mb-6 text-lg font-medium">
                  Software Engineering Student
                </div>
              </header>
              <ul>
                <li>
                  Basic knowledges about Web Development, Database, Object
                  Oriented Programming and Business.
                </li>
              </ul>
              <span className="absolute py-0.5 bg-white -left-3 top-0">⭐</span>
            </section>
          </article>
        </div>
      </main>
      <footer className="flex justify-center text-white bg-gradient-to-b from-violet-500 to-purple-500">
        <article className="pt-20 pb-8 text-lg font-semibold">
          <p>
            Hello 👋 You can reach me at the{" "}
            <Link
              className="px-1 transition duration-300 bg-white text-slate-800 hover:text-white hover:bg-transparent hover:underline"
              to="/social-media"
            >
              Social Media
            </Link>
          </p>
        </article>
      </footer>
    </>
  );
}

export default Highlights;
