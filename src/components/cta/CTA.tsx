import styles from "./cta.module.scss";

const CTA = () => {
  return (
    <section className="sectionPadding">
      <div className={styles.cta}>
        <div className={styles.content}>
          <p>Request Early Access to Get Started</p>
          <h1>Register today & start exploring the endless possibilities.</h1>
        </div>
        <div className={styles.actions}>
          <button type="button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
