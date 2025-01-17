import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: { Component: React.ComponentType<any>; pageProps: any }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
