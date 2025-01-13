import React from "react";

type TextTokenProps = {
  children: React.ReactNode;
  fixedSize?: boolean;
};

export default function TextToken({
  children,
  fixedSize = false,
}: TextTokenProps) {
  const className = ["tkn", fixedSize && "tkn--fixed-size"]
    .filter(Boolean)
    .join(" ");

  return <span className={className}>{children}</span>;
}
