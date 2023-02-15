'use client';

import { Rubik } from '@next/font/google';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import Typewriter from 'typewriter-effect';

const reading = Rubik({
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

const states = [
  'Gaming',
  'Coding',
  'Work',
  'Editing Videos',
  'Streaming',
] as const;

type State = (typeof states)[number];

const colors: Record<State, { color: string; shadow: string; text: string }> = {
  Gaming: {
    color: 'hsl(50, 80%, 60%)',
    text: 'hsl(0, 10%, 10%)',
    shadow: 'hsla(50, 80%, 60%, 0.2)',
  },
  Coding: {
    color: 'hsl(120, 80%, 60%)',
    text: 'hsl(0, 10%, 10%)',
    shadow: 'hsla(120, 55%, 60%,0.2)',
  },
  Work: {
    color: 'hsl(240, 80%, 60%)',
    text: 'hsl(0, 10%, 100%)',
    shadow: 'hsla(240, 80%, 60%, 0.2)',
  },
  'Editing Videos': {
    color: 'hsl(190, 80%, 60%)',
    text: 'hsl(0, 10%, 10%)',
    shadow: 'hsla(190, 80%, 60%, 0.2)',
  },
  Streaming: {
    color: 'hsl(280, 80%, 60%)',
    text: 'hsl(0, 10%, 100%)',
    shadow: 'hsla(280, 80%, 60%, 0.2)',
  },
};

const TYPE_WAIT_DELAY = 1300;

function buildString(string: State) {
  const { color, shadow } = colors[string];
  return `
    <span
      style="
        color: ${color};
        text-shadow: 0px 0px 64px ${shadow};
      ">
      ${string}
    </span>
  `
    .trim()
    .trimEnd();
}

const OS_USAGES: Array<{ name: State; icon: JSX.Element }> = [
  {
    name: 'Gaming',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="18"
        fill="none"
        viewBox="0 0 22 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.8 17.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V1.875c0-.621-.504-1.125-1.125-1.125H2.175c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
  {
    name: 'Coding',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="18"
        fill="none"
        viewBox="0 0 21 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.15 4.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0019.4 15V3A2.25 2.25 0 0017.15.75H3.65A2.25 2.25 0 001.4 3v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    name: 'Work',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.25 12.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.29-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.182 2.182 0 00.75-1.661V6.706c0-1.081-.768-2.015-1.837-2.175a48.117 48.117 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.98 23.98 0 0110 13.75a24 24 0 01-7.577-1.22 2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 011 10.489V6.706c0-1.081.768-2.015 1.837-2.175a48.11 48.11 0 013.413-.387m7.5 0V3.25A2.25 2.25 0 0011.5 1h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.668 48.668 0 00-7.5 0M10 10.75h.008v.008H10v-.008z"
        />
      </svg>
    ),
  },
  {
    name: 'Editing Videos',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="18"
        fill="none"
        viewBox="0 0 22 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1.975 16.5h17.25m-17.25 0A1.125 1.125 0 01.85 15.375M1.975 16.5h1.5c.621 0 1.125-.504 1.125-1.125M19.225 16.5c.621 0 1.125-.504 1.125-1.125M19.225 16.5h-1.5a1.125 1.125 0 01-1.125-1.125m-15.75 0V2.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125M4.6 15.375v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M.85 2.625c0-.621.504-1.125 1.125-1.125M.85 2.625v1.5c0 .621.504 1.125 1.125 1.125m0 7.5A1.125 1.125 0 01.85 11.625v-1.5C.85 9.504 1.354 9 1.975 9m0 3.75h1.5m16.875 2.625V2.625m0 12.75v-1.5c0-.621-.504-1.125-1.125-1.125M20.35 2.625c0-.621-.504-1.125-1.125-1.125m1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m0 7.5c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5M16.6 15.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125m1.5-11.25H1.975m17.25 0h-1.5c-.621 0-1.125.504-1.125 1.125M1.975 1.5h1.5c.621 0 1.125.504 1.125 1.125m12 0c0-.621-.504-1.125-1.125-1.125h-9.75c-.621 0-1.125.504-1.125 1.125m12 0v1.5a1.125 1.125 0 001.125 1.125M16.6 2.625v5.25m2.625-2.625h-1.5m1.5 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M4.6 2.625v1.5c0 .621-.504 1.125-1.125 1.125M4.6 2.625v5.25M1.975 5.25h1.5m-1.5 0C1.354 5.25.85 5.754.85 6.375v1.5C.85 8.496 1.354 9 1.975 9m1.5-3.75c.621 0 1.125.504 1.125 1.125v1.5M1.975 9h1.5M4.6 7.875A1.125 1.125 0 005.725 9M4.6 7.875C4.6 8.496 4.096 9 3.475 9m14.25-3.75c-.621 0-1.125.504-1.125 1.125v1.5m0 0C16.6 8.496 16.096 9 15.475 9M16.6 7.875c0 .621.504 1.125 1.125 1.125m1.5 0h-1.5m-12 0h9.75m-9.75 0C5.104 9 4.6 9.504 4.6 10.125M15.475 9c.621 0 1.125.504 1.125 1.125m-12 0v1.5c0 .621-.504 1.125-1.125 1.125M4.6 10.125C4.6 9.504 4.096 9 3.475 9m14.25 0c-.621 0-1.125.504-1.125 1.125m0 0v1.5c0 .621.504 1.125 1.125 1.125"
        />
      </svg>
    ),
  },
  {
    name: 'Streaming',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="16"
        fill="none"
        viewBox="0 0 22 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M14.95 6.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53L14.95 9.5M3.7 14.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 001.45 3.5v9a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
];

const OS_THEMES = ['dracula', 'gruvbox', 'material'] as const;

type Theme = (typeof OS_THEMES)[number];

export default function Page() {
  const [typedState, setTypedState] = useState<State>(states[0]);
  const [SELECTED_OS_USAGE, setSelectedOSUsage] = useState<State>('Gaming');
  const [SELECTED_OS_THEME, setSelectedOsTheme] = useState<Theme>('dracula');

  const { color, shadow } = useMemo(() => colors[typedState], [typedState]);

  return (
    <main className="flex flex-col">
      <section
        id="grid-after"
        style={{
          backgroundImage: "url('/grid.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative flex h-[90vh] max-h-[698px] flex-col items-center justify-center gap-16 bg-primary-background px-4 py-8 md:px-16 md:py-16"
      >
        <h1
          className={`z-10 text-center text-4xl font-bold text-primary-title md:text-5xl lg:text-6xl ${reading.className} max-w-5xl`}
        >
          The easiest way to bootstrap your Linux System for{' '}
          <Typewriter
            options={{ delay: 100, autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .callFunction(() => setTypedState(states[0]))
                .typeString(buildString(states[0]))
                .pauseFor(TYPE_WAIT_DELAY)
                .deleteAll()

                .callFunction(() => setTypedState(states[1]))
                .typeString(buildString(states[1]))
                .pauseFor(TYPE_WAIT_DELAY)
                .deleteAll()

                .callFunction(() => setTypedState(states[2]))
                .typeString(buildString(states[2]))
                .pauseFor(TYPE_WAIT_DELAY)
                .deleteAll()

                .callFunction(() => setTypedState(states[3]))
                .typeString(buildString(states[3]))
                .pauseFor(TYPE_WAIT_DELAY)
                .deleteAll()

                .callFunction(() => setTypedState(states[4]))
                .typeString(buildString(states[4]))
                .pauseFor(TYPE_WAIT_DELAY)
                .deleteAll()
                .start();
            }}
          />
        </h1>

        <div className="z-10 flex w-full max-w-5xl flex-col items-center justify-center gap-2 md:flex-row">
          <button
            style={{
              boxShadow: `0px 0px 64px ${shadow}`,
              color: color,
              borderColor: color,
              transition: `all ${TYPE_WAIT_DELAY * 4}ms, filter 200ms`,
              // transition: `filter 200ms`,
            }}
            className={`flex items-center justify-center rounded-full border-2 border-warning-base bg-primary-background p-5 text-xl hover:brightness-125 md:text-2xl`}
          >
            Bootstrap my Linux now!
          </button>
          <button
            style={{
              background: shadow,
              transition: `all ${TYPE_WAIT_DELAY * 4}ms, filter 200ms`,
            }}
            className={`flex items-center justify-center rounded-full p-5 text-xl hover:brightness-125 md:text-2xl`}
          >
            Documentation
          </button>
        </div>
      </section>

      <section
        style={{
          background: 'linear-gradient(to bottom, #000, hsl(240, 3%, 6%)',
        }}
        className="relative flex flex-col items-center gap-16 px-4 py-8 md:px-16 md:py-16"
      >
        <h2
          className={`text-3xl font-bold text-primary-title md:text-4xl xl:text-5xl ${reading.className}`}
        >
          Select your usage
        </h2>

        <div className="flex w-full max-w-5xl flex-wrap gap-2 md:flex-nowrap md:gap-5 xl:gap-16">
          {OS_USAGES.map(({ name, icon }, index) => {
            const variants: Record<State, string> = {
              Gaming: 'hover:bg-[hsla(50,80%,60%,0.2)]',
              Coding: 'hover:bg-[hsla(120,55%,60%,0.2)]',
              Work: 'hover:bg-[hsla(240,80%,60%,0.2)]',
              'Editing Videos': 'hover:bg-[hsla(190,80%,60%,0.2)]',
              Streaming: 'hover:bg-[hsla(280,80%,60%,0.2)]',
            };

            return (
              <button
                onClick={() => setSelectedOSUsage(name)}
                style={
                  SELECTED_OS_USAGE === name
                    ? {
                        background: colors[name].color,
                        color: colors[name].text,
                      }
                    : {}
                }
                className={`
                  flex w-[calc(50%-4px)] flex-col items-center justify-center gap-2 rounded border border-primary-placeholder bg-primary-background p-5 text-primary-title
                  focus-visible:ring focus-visible:ring-[hsla(0,0%,100%,0.1)] md:w-full
                ${
                  OS_USAGES.length % 2 !== 0 && index === OS_USAGES.length - 1
                    ? '!w-full'
                    : ''
                }
                ${variants[name]}
              `}
                key={name}
              >
                {icon}
                {name}
              </button>
            );
          })}
        </div>

        <h2
          className={`text-3xl font-bold text-primary-title md:text-4xl xl:text-5xl ${reading.className}`}
        >
          Pick a theme
        </h2>

        <div className="flex w-full max-w-5xl flex-wrap gap-2 md:flex-nowrap md:gap-5 xl:gap-16">
          {OS_THEMES.map((name, index) => (
            <button
              onClick={() => setSelectedOsTheme(name)}
              className={`
              flex w-[calc(50%-4px)] flex-col items-center justify-center gap-2 rounded border border-primary-placeholder bg-primary-background p-5 text-primary-title
              focus-visible:ring focus-visible:ring-[hsla(0,0%,100%,0.1)] md:w-full
              ${
                SELECTED_OS_THEME === name
                  ? 'bg-warning-base !text-primary-background'
                  : ''
              }
                ${
                  OS_THEMES.length % 2 !== 0 && index === OS_THEMES.length - 1
                    ? '!w-full'
                    : ''
                }
            `}
              key={name}
            >
              {name}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
