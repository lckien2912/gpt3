import {
  Footer,
  Blog,
  Possibility,
  Header,
  Features,
  WhatGPT3,
} from "./containers";
import { Navbar, Brand, CTA, ScrollTop } from "./components";
import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={`${styles.app} gradientBg`}>
      <Navbar />
      <Header />
      <main>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default App;
