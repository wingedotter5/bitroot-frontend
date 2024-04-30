import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./styles/ArticleCard.module.css";
import { formatDate } from "../utils";
import Modal from "./Modal";
import ArticleView from "./ArticleView";

export default function ArticleCard({ article }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <article className={styles.article}>
      <div className={styles.thumbnailWrapper}>
        <img
          className={styles.thumbnail}
          src={article?.thumbnail?.small}
          alt="thumbnail"
        />
        <div className={styles.thumbnailOverlay}>
          <button onClick={openModal} className={styles.learnmoreBtn}>
            Learn More
          </button>
        </div>
      </div>
      <div className={styles.body}>
        <div>
          <div>
            <span className="circle circle__aqua"></span>
            <span className="circle circle__orange"></span>
          </div>
          <h2 onClick={openModal} className={styles.title}>
            {article?.title}
          </h2>
        </div>
        <p>{article?.content}</p>
        <div className={styles.footer}>
          <div>{`${article?.author?.name}, ${article?.author?.role}`}</div>
          <div>{formatDate(new Date(article?.date))}</div>
        </div>
      </div>

      {isModalOpen &&
        createPortal(
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ArticleView article={article} />
          </Modal>,
          document.getElementById("portal"),
        )}
    </article>
  );
}
