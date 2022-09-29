import React, { useCallback } from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Typography from "./Typography";

type Props = {
  children: React.ReactNode;
  breadcrumbs: string | string[];
};

export default function Template({ children, breadcrumbs }: Props) {
  const parsedBreadcrumbs = useCallback(() => {
    if (Array.isArray(breadcrumbs)) {
      return breadcrumbs.join(" / ");
    }
    return breadcrumbs;
  }, []);

  return (
    <div className="grid container-grid-mobile sm:container-grid">
      <Navbar />
      <Container>
        <div className="flex items-center justify-between flex-col sm:flex-row gap-3 sm:gap-0">
          <Typography variant="heading3" className="text-slate-500">
            {parsedBreadcrumbs()}
          </Typography>
          <Searchbar />
        </div>
        {children}
      </Container>
    </div>
  );
}
