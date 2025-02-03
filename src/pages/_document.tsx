import { Html, Head, Main, NextScript } from "next/document";

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
      </Head>
      <body className="md:overflow-visible">
        {/* Google Tag Manager - NoScript Fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
