import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface ISEO {
  title: string;
  description: string;
}

const SEO: React.FC<any> = ({ title, description }: ISEO) => (
  <HelmetProvider>
    <Helmet>
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </Helmet>
  </HelmetProvider>
);
export default SEO;
