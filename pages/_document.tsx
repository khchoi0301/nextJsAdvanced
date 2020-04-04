import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

    setGoogleTags() {
        return {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-98794084-2');
          `
        };
    }

    render() {
        console.log("_document.js render")

        return (
            <html lang="en">
                <Head>
                    <link rel="manifest" href="/static/manifest.json" />

                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="application-name" content="dev-khchoi" />
                    <meta name="apple-mobile-web-app-title" content="dev-khchoi" />
                    <meta name="theme-color" content="#111" />
                    <meta name="msapplication-navbutton-color" content="#111" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="msapplication-starturl" content="/" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />

                    <meta name="description" content="A site for my programming portfolio" />
                    {/* <meta charset="utf-8" /> */}
                    <meta name="robot" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-98794084-2"
                    />
                    {/* We call the function above to inject the contents of the script tag */}
                    <script dangerouslySetInnerHTML={this.setGoogleTags()} />
                </body>
                <style global jsx>{`
                    body {
                        font-family: 'Roboto', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}