import styles from "./article.module.scss";

interface Props {
  imgSrc: string;
  date: string;
  title: string;
}

const Article = ({ imgSrc, date, title }: Props) => {
  return (
    <div className={styles.article}>
      <div className={styles.image}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <span>{date}</span>
          <h2>{title}</h2>
        </div>
        <a href="#">Read Full Article</a>
      </div>
    </div>
  );
};

export default Article;
