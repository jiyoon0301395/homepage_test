import React from "react";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function AppFrame({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <article>{children}</article>
      <Footer />
    </main>
  );
}
