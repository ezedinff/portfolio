import Head from "next/head";
import {useRouter} from "next/router";
import React from "react";

interface Props {
    title?: string;
    description?: string;
    image?: string;
    siteUrl?: string;
}

const seo: React.FC<Props> = ({title, description, image, siteUrl}) => {
    const {pathname} = useRouter();
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="description" content={description}/>
                <meta name="image" content={image}/>

                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={image}/>
                <meta property="og:url" content={`${siteUrl}${pathname}`}/>
                <meta property="og:type" content="website"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:creator" content={""}/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={image}/>
                <meta name="robots" content="index, follow"/>
                <meta name="author" content="Ezedin Fedlu"/>
                <meta name="keywords" content="software engineer, web developer, full stack developer, react, next.js, typescript"/>
                <link rel="canonical" href={`${siteUrl}${pathname}`}/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Ezedin Fedlu",
                            "jobTitle": "Software Engineer",
                            "url": siteUrl,
                            "image": image,
                            "description": description,
                            "sameAs": [
                                "https://github.com/ezedinfedlu",
                                "https://linkedin.com/in/ezedinfedlu",
                                "https://blog.ezedinfedlu.com"
                            ]
                        })
                    }}
                />
            </Head>
        </>
    );
};

export default seo;
