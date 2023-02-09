import logo from "../img/logo-oguiz.png";
import "../styles/Nav.css";

function Nav() {
    return <div className="nav">
        <div className="logo-header">
            <img alt="logo makeitgrow" src={logo} />
        </div>
        <div>
            <div className="link"><a href="#">A propos</a></div>
            <div className="link"><a href="#">Notre solution</a></div>
            <div className="link"><a href="#">L'équipe</a></div>
            <div className="link"><a href="#">Nous contacter</a></div>
        </div>
    </div>;
}
export default Nav;
