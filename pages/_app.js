import "styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/layout.scss";
import { ThemeProvider } from "styled-components";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#909090",
  },
};
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Comments1</title>
        <meta name="Description" content="Comments1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
