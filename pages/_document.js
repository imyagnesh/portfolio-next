import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Header />
          <main>
            <Main />
          </main>
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}
