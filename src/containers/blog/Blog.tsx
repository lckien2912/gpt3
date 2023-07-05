import { Article } from "components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import styles from "./blog.module.scss";

const SUB_POSTS = [
  {
    id: 1,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: "Sep 26, 2021",
    imgSrc: blog02,
  },
  {
    id: 2,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: "Sep 26, 2021",
    imgSrc: blog03,
  },
  {
    id: 3,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: "Sep 26, 2021",
    imgSrc: blog04,
  },
  {
    id: 4,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: "Sep 26, 2021",
    imgSrc: blog05,
  },
];

const Blog = () => {
  return (
    <section className={`${styles.blogs} sectionPadding`}>
      <h1 className="gradientText">
        A lot is happening, We are blogging about it.
      </h1>
      <div className={styles.posts}>
        <div className={styles.mainPost}>
          <Article
            imgSrc={blog01}
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            date="Sep 26, 2021"
          />
        </div>
        <div className={styles.subPosts}>
          {SUB_POSTS.map(({ id, title, date, imgSrc }) => (
            <Article key={id} title={title} date={date} imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
