import React from "react";

export default function GrayRBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="gBx">{children}</div>;
}
