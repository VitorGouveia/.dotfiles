import React from 'react';

import '@/styles/global.css';
import { Navbar } from '@/components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

        <title>
          The easiest way to bootstrap your Linux System | LinuxBootstrap
        </title>
        <meta name="Author" content="Vitor Neves Gomes Gouveia" />
        <meta
          name="description"
          content="Generate dotfiles and bootstrap your linux system for gaming, work, coding."
        />

        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="bg-[#000] text-primary-base">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
