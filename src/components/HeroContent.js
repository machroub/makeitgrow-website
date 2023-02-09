import "../styles/Hero.css";
cc
function Hero(props) {
    const img = {...props};
    console.log(img.img);
    return (
        <div className="hero-ctn">
            <div className="hero-left">
                <img src={`../${img.img}`} />
            </div>
            <div className="hero-right">
                <h1>
                    LA SOLUTION DIGITALE POUR ACCROITRE ET GERER VOTRE ACTIVITÉ
                </h1>
                <p>
                    Votre loisir, notre service, la fusion d'une solution
                    perenne
                </p>
                <button className="demo-btn">demander une demo</button>
            </div>
        </div>
    );
}
export default Hero;
