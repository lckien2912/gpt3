import { google, slack, atlassian, dropbox, shopify } from "./imports";
import styles from "./brand.module.scss";

const Brand = () => {
  return (
    <section className={`${styles.brands} sectionPadding reverseGradientBg`}>
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={shopify} alt="Shopify" />
      </div>
    </section>
  );
};

export default Brand;
