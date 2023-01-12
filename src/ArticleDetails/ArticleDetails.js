
import "./ArticleDetails.css";
const ArticleDetails = ({ article }) => {

  const newTab = () => {
    window.open(article.short_url);
  };

  return !article ? (
    <h3>Loading</h3>
  ) : (
    <div className="details">
      <h3>{article.title}</h3>
      <h4>{article.byline}</h4>
      <img
        className="details-image"
        src={
          article.multimedia?.[1].url ||
          "https://library.northwestu.edu/wp-content/uploads/2019/06/nytimes.png"
        }
      />
      <p className="p-info">{article.abstract}</p>
      <div className="date-section">
        <p className="p-info">Section: {article.section.toUpperCase()}</p>
      </div>
      <p className="nyTimes-article" onClick={newTab}>
        Read Entire Article
      </p>
    </div>
  );
};

export default ArticleDetails;
