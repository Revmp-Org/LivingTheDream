import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head>
        {/* Google Analytics – Loads Only if Consent is Given */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== "undefined") {
                  const isCookieAccepted = localStorage.getItem("cookieConsent") === "true";
                  if (isCookieAccepted) {
                    var script1 = document.createElement("script");
                    script1.src = "https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}";
                    script1.async = true;
                    document.head.appendChild(script1);

                    var script2 = document.createElement("script");
                    script2.innerHTML = \`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                    \`;
                    document.head.appendChild(script2);
                  }
                }
              })();
            `,
          }}
        />

        {/* Leadfeeder Tracking – Loads Only if Consent is Given */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== "undefined") {
                  const isCookieAccepted = localStorage.getItem("cookieConsent") === "true";
                  if (isCookieAccepted) {
                    var script = document.createElement("script");
                    script.src = "https://sc.lfeeder.com/lftracker_v1_lAxoEaK3EOBaOYGd.js";
                    script.async = true;
                    document.head.appendChild(script);
                  }
                }
              })();
            `,
          }}
        />
      </Head>
      <body className="md:overflow-visible">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
