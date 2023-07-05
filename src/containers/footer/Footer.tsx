import logo from "assets/logo.svg";
import styles from "./footer.module.scss";

const DETAILS = [
  {
    id: 1,
    title: "Links",
    contents: [
      { id: 1, content: "Overall" },
      { id: 2, content: "Social Media" },
      { id: 3, content: "Counters" },
      { id: 4, content: "Contact" },
    ],
  },
  {
    id: 2,
    title: "Company",
    contents: [
      { id: 1, content: "Terms & Conditions" },
      { id: 2, content: "Privacy Policy" },
      { id: 3, content: "085-132567" },
      { id: 4, content: "info@payme.net" },
    ],
  },
];

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} sectionPadding`}>
      <h1 className={`${styles.heading} gradientText`}>
        Do you want to step in to the future before others?
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <img src={logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className={styles.left}>
          {DETAILS.map(({ id, title, contents }) => (
            <div key={id} className={styles.content}>
              <h2>{title}</h2>
              <div>
                {contents.map(({ id, content }) => (
                  <a href="##" key={id}>
                    {content}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <span>© {date} GPT-3. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
