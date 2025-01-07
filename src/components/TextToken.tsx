import React from "react";

export default function TextToken({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <span className="tkn">{children}</span>;
}
