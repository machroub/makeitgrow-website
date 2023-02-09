import logo192 from "../logo.svg";
import "../styles/Article.css";

export  default function Article(props) {
    const article = {...props}
     return (
        <div className="hero-ctn">
            {/* H1,2,3 ? */}
            <h2>{article.title}</h2>
            {article.body.map((el) =>  <p>{el}</p>)}
        </div>
    );
}

