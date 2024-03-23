import { useState } from "react";

function SocialMedia() {
  const [subject, setSubject] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <>
      <main className="flex flex-col items-center justify-center px-3 py-10 bg-gradient-to-t from-violet-500 to-purple-500">
        <article className="w-full p-6 mb-10 text-lg bg-white sm:w-96">
          <h2 className="mb-5 text-3xl font-bold text-center text-purple-500">
            <span className="text-white">📱</span>Social Media
          </h2>
          <ul className="flex flex-col gap-1.5 mb-3">
            <li>
              <a
                className="block w-full px-5 py-3 font-semibold text-center text-white transition hover:bg-yellow-300 bg-rose-600"
                href="https://www.youtube.com/aprizaprasetio"
                target="_blank"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                className="block w-full px-5 py-3 font-semibold text-center text-white hover:bg-yellow-300 bg-cyan-600"
                href="https://www.linkedin.com/in/aprizaprasetio/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                className="block w-full px-5 py-3 font-semibold text-center text-white bg-blue-500 hover:bg-yellow-300"
                href="https://www.facebook.com/aprizap"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="block w-full px-5 py-3 font-semibold text-center text-white bg-indigo-500 hover:bg-yellow-300"
                href="https://www.discordapp.com/users/308816128426115073"
                target="_blank"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                className="block w-full px-5 py-3 font-semibold text-center text-white hover:bg-yellow-300 bg-slate-600"
                href="https://www.facebook.com/aprizap"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
          <p className="font-medium text-slate-800">
            Feel free to contact me anytime 😊
          </p>
        </article>
      </main>
      <footer className="flex flex-col-reverse items-center justify-end w-full gap-5 p-3 pb-6 sm:flex-row">
        <article className="flex-grow">
          <p className="text-lg font-bold text-slate-800">
            Special thanks to{" "}
            <a
              className="underline transition hover:text-yellow-300"
              href="https://www.vercel.com"
              target="_blank"
            >
              Vercel
            </a>{" "}
            for providing free React Hosting ❤️
          </p>
          <p className="text-center text-slate-800 sm:text-start">
            ©️Copyright {new Date().getUTCFullYear()}
          </p>
        </article>
        <article className="w-full sm:w-1/2 lg:w-1/3 text-slate-900">
          <h2 className="mb-3 text-xl font-bold">Contact Me</h2>
          <form
            className="flex items-start gap-3 font-medium"
            onSubmit={(event) => {
              event.preventDefault();
              setIsSubmitted(true);
              if (subject.length === 0) return;
              window.open(`mailto:aprizaprasetio@gmail.com?subject=${subject}`);
            }}
          >
            <div className="flex flex-col flex-grow">
              <input
                className="flex-grow px-3 py-2 mb-1 bg-slate-200 placeholder:text-slate-600 outline-yellow-300"
                onChange={(event) => setSubject(event.target.value)}
                placeholder="Subject"
                value={subject}
              />
              {isSubmitted && subject.length === 0 ? (
                <p className="text-sm text-rose-500">The subject is required</p>
              ) : null}
            </div>
            <button
              className="px-6 py-2 text-white transition bg-purple-500 hover:bg-yellow-300 hover:bg-none"
              type="submit"
            >
              Contact
            </button>
          </form>
        </article>
      </footer>
    </>
  );
}

export default SocialMedia;
