import Article from "../Article/Article";
import './Articles.css'

const Articles = ({ articles }) => {
  const allArticles = articles.map((article) => {
    return <Article article={article} />;
  });
  return <div className="articles-container">{allArticles}</div>;
};

export default Articles;
