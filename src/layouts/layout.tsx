import React, { type PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
