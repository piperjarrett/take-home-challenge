import './Article.css'
import { Link } from 'react-router-dom'

const Article = ({ article}) => {

    return <div className='article'>
        <h3>{article.title}</h3>
        <Link to={article.title}>
            <button className='detail-button'>
                More Details
            </button>
        </Link>
    </div>
}

export default Article