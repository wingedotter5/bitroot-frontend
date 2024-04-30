import { useState, useEffect } from "react";
import styles from "./styles/App.module.css";
import ArticleCard from "./ArticleCard";
import ArticleCardSkeleton from "./ArticleCardSkeleton";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts",
        );
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className={styles.container}>
      <section className={styles.articles}>
        {loading ? (
          [1, 2, 3, 4].map((num) => <ArticleCardSkeleton key={num} />)
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <h2>No Articles</h2>
        )}
      </section>
    </div>
  );
}
