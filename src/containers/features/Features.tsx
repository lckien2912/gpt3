import { Feature } from "components";
import styles from "./features.module.scss";

const CONTENTS = [
  {
    id: 1,
    title: "Improving end distrusts instantly",
    description:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 2,
    title: "Become the tended active",
    description:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 3,
    title: "Message or am nothing",
    description:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 4,
    title: "Really boy law county",
    description:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
];

const Features = () => {
  return (
    <section className={`${styles.wrapper} sectionPadding`}>
      <div className={styles.heading}>
        <h1 className="gradientText">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className={styles.features}>
        {CONTENTS.map(({ id, title, description }) => (
          <Feature key={id} title={title} description={description} size="sm" />
        ))}
      </div>
    </section>
  );
};

export default Features;
