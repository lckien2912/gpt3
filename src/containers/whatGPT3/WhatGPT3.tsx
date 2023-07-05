import { Feature } from "components";
import styles from "./whatGPT3.module.scss";

const WhatGPT3 = () => {
  return (
    <section className="sectionPadding ">
      <div className={styles.wgpt3}>
        <Feature
          title="What is GPT-3"
          description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
        <div className={styles.heading}>
          <h1 className="gradientText">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className={styles.wrapper}>
          <Feature
            title="Chatbots"
            description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
            type="column"
          />
          <Feature
            title="Knowledgebase"
            description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b."
            type="column"
          />
          <Feature
            title="Education"
            description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b."
            type="column"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
