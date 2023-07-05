import people from "assets/people.png";
import ai from "assets/ai.png";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={`${styles.header} sectionPadding`}>
      <div className={styles.content}>
        <h1 className={`${styles.title} gradientText`}>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={styles.input}>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className={styles.people}>
          <img src={people} alt="People" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={styles.image}>
        <img src={ai} alt="AI" />
      </div>
    </header>
  );
};

export default Header;
