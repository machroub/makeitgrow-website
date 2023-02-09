import "../styles/Hero.css";
function Hero(props) {
    return (
        <div className="hero-ctn">
            {props.children}
        </div>
    );
}

export default Hero;
