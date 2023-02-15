'use client';

import { AnchorHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Rubik } from '@next/font/google';

const reading = Rubik({
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

const transparency = 'rgba(255, 255, 255, 0.05)';
const pages: Array<{ href: string; name: string }> = [
  {
    name: 'Readme',
    href: '/readme',
  },
  {
    name: 'Docs',
    href: '/docs',
  },
  {
    name: 'CLI',
    href: '/cli',
  },
];

function Tux() {
  return (
    <svg
      className="shrink-0"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0874 14.3918C9.48734 15.137 7.99838 15.1278 6.99813 15.0569C5.80594 14.9705 4.84703 14.6446 4.42588 14.3596C4.16603 14.1836 3.81353 14.2519 3.63675 14.5125C3.45994 14.7727 3.52894 15.1244 3.78956 15.3012C4.46684 15.76 5.66531 16.1011 6.91841 16.1915C7.131 16.2066 7.36353 16.2166 7.61487 16.2166C8.70484 16.2166 10.0886 16.1125 11.5687 15.4241C11.8536 15.292 11.9765 14.9539 11.8437 14.6693C11.7112 14.3844 11.3738 14.2615 11.0888 14.3943L11.0873 14.3918H11.0874ZM17.4012 13.551C17.4562 8.61574 17.9626 -0.710662 8.51475 0.0430566C-0.814219 0.794182 1.65947 10.6481 1.52106 13.9481C1.39741 15.6943 0.818656 17.8285 0 19.9995L2.52094 19.9999C2.77969 19.0801 2.97125 18.1695 3.05172 17.3014C3.20969 17.4112 3.3729 17.5134 3.54078 17.6074C3.8235 17.7738 4.06563 17.9949 4.32328 18.2286C4.92341 18.7763 5.60441 19.396 6.93463 19.4736C7.02322 19.4787 7.11291 19.4813 7.20188 19.4813C8.54834 19.4813 9.46813 18.8926 10.2071 18.4186C10.561 18.1924 10.867 17.996 11.156 17.9023C11.9747 17.6461 12.6896 17.2324 13.2248 16.706C13.3064 16.6253 13.3843 16.5411 13.4585 16.4536C13.7563 17.545 14.1635 18.7737 14.616 19.9987L20 19.9984C18.7074 18.0023 17.3739 16.0461 17.4012 13.5495V13.551V13.551ZM2.42353 10.8658V10.8647C2.33088 9.25431 3.10119 7.89937 4.14463 7.83809C5.18844 7.77643 6.10862 9.03434 6.20087 10.6443V10.6458C6.20606 10.7322 6.20828 10.8182 6.20828 10.9031C5.87794 10.9857 5.57969 11.1068 5.31209 11.2471C5.31062 11.2349 5.31063 11.2235 5.30991 11.2109C5.22094 10.297 4.73225 9.60606 4.21847 9.66843C3.70431 9.73046 3.36103 10.5233 3.45075 11.4372C3.4895 11.8358 3.60428 12.192 3.7645 12.4611C3.72425 12.4921 3.61169 12.5747 3.48322 12.6685C3.38578 12.7397 3.26841 12.8257 3.12556 12.9309C2.73691 12.4208 2.47078 11.69 2.42316 10.8621L2.42353 10.8658V10.8658ZM12.9938 14.8473C12.9565 15.6988 11.8437 16.5001 10.8146 16.8212L10.8087 16.8234C10.3809 16.9626 9.99963 17.2062 9.59622 17.4646C8.91747 17.8982 8.21616 18.3471 7.20372 18.3471C7.13766 18.3471 7.06863 18.3449 7.00256 18.3411C6.07503 18.2873 5.63984 17.8908 5.09137 17.39C4.80125 17.1265 4.50156 16.8526 4.11547 16.6259L4.10625 16.6208C3.27247 16.1498 2.75534 15.5644 2.72103 15.0547C2.70516 14.8011 2.81772 14.5822 3.05616 14.4021C3.57622 14.012 3.92503 13.7573 4.15497 13.5886C4.41112 13.4011 4.48863 13.345 4.54622 13.2901C4.59107 13.2478 4.63525 13.2049 4.67872 13.1612C5.15634 12.6973 5.95469 11.92 7.18122 11.92C7.93122 11.92 8.76094 12.2086 9.64497 12.7774C10.0613 13.0486 10.4237 13.1738 10.8822 13.3325C11.1974 13.4414 11.5561 13.565 12.0345 13.7702L12.0422 13.7739C12.4885 13.9577 13.0174 14.2925 12.9923 14.8465L12.9938 14.8473V14.8473ZM12.7476 12.8467C12.66 12.8019 12.5703 12.7611 12.4789 12.7246C12.0474 12.5393 11.7012 12.4146 11.4137 12.3145C11.5727 12.0045 11.6713 11.6173 11.6802 11.1972C11.703 10.1748 11.1867 9.34327 10.5278 9.34215C9.86934 9.34143 9.31794 10.1686 9.29541 11.191C9.29393 11.2243 9.29393 11.2577 9.29541 11.291C8.8905 11.105 8.49188 10.9684 8.10063 10.8861C8.09916 10.8473 8.09656 10.8101 8.09547 10.7713V10.7702C8.05781 8.90624 9.20056 7.36381 10.6489 7.32506C12.0976 7.28631 13.3013 8.7649 13.34 10.6274V10.6289C13.3573 11.4711 13.1311 12.2474 12.7461 12.849L12.7476 12.8468V12.8467Z"
        fill="#F4F4F5"
      />
    </svg>
  );
}

function Menu() {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.75H17.25M0.75 6H17.25M0.75 11.25H17.25"
        stroke="#F4F4F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Github() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0.295898C5.374 0.295898 0 5.6689 0 12.2959C0 17.5979 3.438 22.0959 8.207 23.6829C8.806 23.7939 9 23.4219 9 23.1059V20.8719C5.662 21.5979 4.967 19.4559 4.967 19.4559C4.421 18.0689 3.634 17.6999 3.634 17.6999C2.545 16.9549 3.717 16.9709 3.717 16.9709C4.922 17.0549 5.556 18.2079 5.556 18.2079C6.626 20.0419 8.363 19.5119 9.048 19.2049C9.155 18.4299 9.466 17.8999 9.81 17.6009C7.145 17.2959 4.343 16.2669 4.343 11.6699C4.343 10.3589 4.812 9.2889 5.579 8.4489C5.455 8.1459 5.044 6.9249 5.696 5.2729C5.696 5.2729 6.704 4.9509 8.997 6.5029C9.954 6.2369 10.98 6.1039 12 6.0989C13.02 6.1039 14.047 6.2369 15.006 6.5029C17.297 4.9509 18.303 5.2729 18.303 5.2729C18.956 6.9259 18.545 8.1469 18.421 8.4489C19.191 9.2889 19.656 10.3599 19.656 11.6699C19.656 16.2789 16.849 17.2939 14.177 17.5909C14.607 17.9629 15 18.6929 15 19.8129V23.1059C15 23.4249 15.192 23.7999 15.801 23.6819C20.566 22.0929 24 17.5959 24 12.2959C24 5.6689 18.627 0.295898 12 0.295898Z"
        fill="#F4F4F5"
      />
    </svg>
  );
}

function ClickTarget({
  children,
  widthAuto = false,
}: {
  widthAuto?: boolean;
  children: (props: { className: string }) => JSX.Element;
}) {
  return children({
    className: `
      flex ${
        widthAuto
          ? 'w-auto min-w-[44px] min-h-[44px]'
          : 'aspect-square h-11 w-auto'
      } items-center justify-center rounded p-2 transition-all hover:bg-[hsla(0,0%,100%,0.1)] focus-visible:ring focus-visible:ring-[hsla(0,0%,100%,0.1)]
    `.trim(),
  });
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  widthAuto?: boolean;
};

function Link({ children, href, className, widthAuto = false }: LinkProps) {
  const isOutsideLink = href.includes('https://');

  return (
    <ClickTarget widthAuto={widthAuto}>
      {({ className: clickStyling }) =>
        isOutsideLink ? (
          <a
            href={href}
            className={`${clickStyling} ${className ? className : ''}`}
          >
            {children}
          </a>
        ) : (
          <NextLink
            href={href}
            className={`${clickStyling} ${className ? className : ''}`}
          >
            {children}
          </NextLink>
        )
      }
    </ClickTarget>
  );
}

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 640px)');

    const isDesktop = media.matches;

    if (isDesktop) {
      setMobileMenu(false);
    }

    const callback = (event: MediaQueryListEvent) => {
      const isDesktop = event.matches;

      if (isDesktop) {
        setMobileMenu(false);
      }
    };

    media.addEventListener('change', callback);

    return () => {
      media.removeEventListener('change', callback);
    };
  }, []);

  return (
    <>
      <header
        style={
          mobileMenu
            ? { background: 'linear-gradient(to bottom, #171717, #000)' }
            : {}
        }
        className={
          mobileMenu ? 'absolute z-10 h-screen w-screen' : 'sticky top-0 z-50'
        }
      >
        <nav
          style={
            mobileMenu
              ? {}
              : { background: transparency, borderColor: transparency }
          }
          className={`p-4 ${
            mobileMenu ? '' : 'border-b ![backdrop-filter:blur(12px)]'
          }`}
        >
          <div className="m-auto flex w-full max-w-5xl items-center justify-between">
            <Link href="/" className={`gap-2`} widthAuto>
              <Tux />

              <h1
                className={`${reading.className} text-lg font-bold text-primary-title`}
              >
                LinuxBootstrap
              </h1>
            </Link>

            <div className="flex items-center gap-4">
              <ul className="hidden items-center gap-4 sm:flex">
                {pages.map(({ name, href }) => (
                  <li key={href}>
                    <Link
                      className={`text-base font-normal text-primary-base ${reading.className}`}
                      widthAuto
                      href={href}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ClickTarget>
                {({ className }) => (
                  <button
                    className={`${className} sm:hidden`}
                    onClick={() => setMobileMenu((menu) => !menu)}
                  >
                    <Menu />
                  </button>
                )}
              </ClickTarget>

              <div
                style={{ background: 'rgba(255, 255, 255, 0.12)' }}
                className="h-full min-h-[24px] w-[2px] rounded-full"
              />

              <Link
                target="_blank"
                href="https://github.com/VitorGouveia/LinuxBootstrap"
              >
                <Github />
              </Link>
            </div>
          </div>
        </nav>

        {mobileMenu && (
          <ul className="flex flex-col items-start gap-2 p-4 sm:hidden">
            {pages.map(({ name, href }) => (
              <li key={href}>
                <Link
                  className={`text-2xl font-normal text-[hsla(0,0%,100%,0.8)] ${reading.className}`}
                  widthAuto
                  href={href}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
};
