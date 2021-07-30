import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
interface Props {
  title?: string;
  description?: string;
  image?: string;
  siteUrl?: string;
}

const seo: React.FC<Props> = ({ title, description, image, siteUrl }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`${siteUrl}${pathname}`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={""} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
    </>
  );
};

export default seo;
