import React, { type ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

type LayoutProps = {
  children: ReactNode;
  PageTitle: string;
};

export function Layout({ children, PageTitle }: LayoutProps) {
  return (
    <React.Fragment>
      <head>
        <title>{PageTitle ? `Ruabr - ${PageTitle}` : "Ruabr"}</title>
      </head>
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  );
}
