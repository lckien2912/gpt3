import possibility from "assets/possibility.png";
import styles from "./possibility.module.scss";

const Possibility = () => {
  return (
    <section className={`${styles.possibility} sectionPadding`}>
      <div className={styles.image}>
        <img src={possibility} alt="Possibility" />
      </div>
      <div className={styles.content}>
        <h1 className="gradientText">
          The possibilities are beyond your imagination
        </h1>
        <p className={styles.description}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className={styles.access}>Request Early Access to Get Started</p>
      </div>
    </section>
  );
};

export default Possibility;
