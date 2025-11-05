import React from "react";
import Calendar from "./components/Calendar.jsx";

export default function App(){
  return (
    <div className="min-h-screen text-white selection:bg-white/20 selection:text-white/90">
      <header className="px-4 sm:px-8 py-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold">SurveySparrow Calendar</h1>
            <p className="text-white/70">A clean, responsive Google Calendar–style clone</p>
          </div>
          <a
            href="https://github.com/new"
            className="inline-flex w-max items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/15 px-4 py-2 shadow-soft backdrop-blur transition"
            target="_blank" rel="noreferrer"
            title="Create a repo and push your code">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.3 2.783 7.943 6.65 9.233.486.087.664-.211.664-.47 0-.232-.009-.846-.013-1.661-2.705.588-3.276-1.303-3.276-1.303-.442-1.122-1.079-1.422-1.079-1.422-.882-.603.067-.591.067-.591.975.068 1.488 1.002 1.488 1.002.867 1.486 2.275 1.057 2.83.809.088-.628.339-1.058.617-1.302-2.159-.246-4.431-1.08-4.431-4.81 0-1.062.38-1.93 1.003-2.611-.101-.246-.435-1.235.095-2.574 0 0 .816-.261 2.676.997A9.34 9.34 0 0112 6.844a9.34 9.34 0 012.438.328c1.86-1.258 2.675-.997 2.675-.997.531 1.339.197 2.328.097 2.574.624.681 1.003 1.55 1.003 2.61 0 3.741-2.276 4.561-4.444 4.803.348.3.658.89.658 1.794 0 1.294-.012 2.338-.012 2.667 0 .26.176.56.67.465 3.862-1.292 6.642-4.933 6.642-9.232 0-5.385-4.365-9.75-9.75-9.75z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base">Push to GitHub</span>
          </a>
        </div>
      </header>
      <main className="px-2 sm:px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <Calendar />
        </div>
      </main>
      <footer className="px-4 sm:px-8 py-6 text-center text-xs text-white/60">
        Built with React, Tailwind & date-fns · Responsive for phone, tablet, and desktop
      </footer>
    </div>
  );
}
