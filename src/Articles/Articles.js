import Article from "../Article/Article";
import "./Articles.css";

const Articles = ({ originalArticles, filteredArticles }) => {
  let allArticles;
  if (!filteredArticles.length) {
    allArticles = originalArticles.map((article) => {
      return <Article article={article} />;
    });
  } else {
    allArticles = filteredArticles.map((article) => {
      return <Article article={article} />;
    });
  }

  return <div className="articles-container">{allArticles}</div>;
};

export default Articles;
