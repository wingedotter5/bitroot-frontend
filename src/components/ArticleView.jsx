import styles from "./styles/ArticleView.module.css";

export default function ArticleView({ article }) {
  return (
    <div className={styles.article}>
      <img
        className={styles.thumbnail}
        src={article?.thumbnail?.large}
        alt="thumnail"
      />
      <div className={styles.body}>
        <h2 className={styles.title}>{article?.title}</h2>
        <p>{article?.content}</p>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={article?.author?.avatar}
            alt={article?.author?.name}
          />
          <div>{`${article?.author?.name} - ${article?.author?.role}`}</div>
        </div>
      </div>
    </div>
  );
}
