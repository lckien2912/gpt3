import styles from "./feature.module.scss";

interface Props {
  title: string;
  description: string;
  type?: "row" | "column";
  size?: "sm" | "md";
}

const Feature = ({ title, description, type = "row", size = "md" }: Props) => {
  return (
    <div className={`${styles.wrapper} ${styles[type]} ${styles[size]}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
