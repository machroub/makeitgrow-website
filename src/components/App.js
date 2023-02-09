import logo from "../logo.svg";
import "../styles/App.css";
import "./Banner";
import Banner from "./Banner";
import Todo from "./Todo";
import Nav from "./Nav";
import Hero from "./Hero";
import Article from "./Article";
import micke from "../img/micke.png";
import julien from "../img/julien.png";
import mache from "../img/mache.png";
import finger from "../img/finger.png";
import comm from "../img/comm.png";
import board from "../img/board.jpg";
import people from "../img/people.png";
import meeting from "../img/meeting.png";

function App() {
    return (
        <div className="App">
            <div>
                <Nav />
                <section id="first-section" className="first-section">
                    <Hero>
                        <div className="hero-left">
                            <h1>
                                LA SOLUTION DIGITALE POUR ACCROITRE ET GERER
                                VOTRE ACTIVITÉ
                            </h1>
                            <p>
                                Votre loisir, notre service, la fusion d'une
                                solution perenne
                            </p>
                            <button className="demo-btn">
                                demander une demo
                            </button>
                        </div>
                        <div className="hero-right">
                            <img src={"../bubble.png"} />
                            {/* <img src={`../${img.img}`} /> */}
                        </div>
                    </Hero>
                </section>
                <section className="second-section">
                    <div className="bloc-ctn">
                        <div className="bloc-left">
                            <img src={finger} />
                        </div>
                        <div className="bloc-right">
                            <h1>LA DIGITALISATION A VOTRE PORTÉE</h1>
                            <p>
                                Oguiz est la solution pour développer le chiffre
                                d’affaires de votre activité ! Nous vous
                                accompagnons et vous conseillons dans la mise en
                                place de votre stratégie digitale. Grâce à notre
                                large gamme d’outils, nous vous permettons de
                                créer des expériences exceptionnelles pour vos
                                clients et tout cela modulable en fonction de
                                vos besoins/envies
                            </p>
                        </div>
                    </div>
                </section>
                <section id="third-section">
                    <div>
                        <h3>NOS SERVICES</h3>
                        <p>ce que nous vous proposons :</p>
                    </div>
                </section>
                <section className="fourth-section">
                    <div className="bloc-ctn">
                        <div className="bloc-right">
                            <h1>LA DIGITALISATION A VOTRE PORTÉE</h1>
                            <p>
                                Oguiz est la solution pour développer le chiffre
                                d’affaires de votre activité ! Nous vous
                                accompagnons et vous conseillons dans la mise en
                                place de votre stratégie digitale. Grâce à notre
                                large gamme d’outils, nous vous permettons de
                                créer des expériences exceptionnelles pour vos
                                clients et tout cela modulable en fonction de
                                vos besoins/envies
                            </p>
                        </div>
                        <div className="bloc-left">
                            <img src={comm} />
                        </div>
                    </div>
                </section>
                <hr />
                <section id="sixth-section">
                    <div className="step-ctn">
                        <div id="step-one" className="step">
                            <div>
                                <img src={board} alt="test image" />
                            </div>
                            <div>
                                <h3>UN PARCOURS TOTALEMENT DIGITAL</h3>
                            </div>
                            <div>
                                <p>
                                    Nos outils vous permettent d’offrir,une
                                    immersion totalement digitale à vos clients.
                                </p>
                                <p>
                                    Prise de rendez vous, demande
                                    d’informations,paiements et gestion des
                                    prestations.
                                </p>
                                <p>
                                    Tout peux etre geré à distance de maniere
                                    automatique
                                </p>
                            </div>
                        </div>
                        <div id="step-two" className="step">
                            <div>
                                <img src={board} alt="test image" />
                            </div>
                            <div>
                                <h3>UNE OFFRE PERSONNALISABLE</h3>
                            </div>
                            <div>
                                <p>
                                    Nos experts vous accompagnent dans l’analyse
                                    de vos besoins
                                </p>
                                <p>
                                    Son objectif ? Déterminer un plan d’actions
                                    pertinent en fonction de nombreux facteurs
                                    spécifiques à votre activité : Outils de
                                    communication, réservation, commande, carte,
                                    planning, facture…
                                </p>
                                <p>
                                    ou choisissez parmis nos nombreux outils et
                                    composez votre solution sur mesure
                                </p>
                            </div>
                        </div>
                        <div id="step-three" className="step">
                            <div>
                                <img src={meeting} alt="test image" />
                            </div>
                            <div>
                                <h3>UNE EQUIPE À VOTRE ECOUTE</h3>
                            </div>
                            <div>
                                <p>
                                    Un outil de ticketing à été mis en place
                                    pour vous permettre de restez en contact
                                    avec l’équipe Spark (à tout moment)
                                </p>
                                <p>
                                    Une incompréhension, une remarque, une
                                    modification à faire, nous sommes la pour
                                    vous aider
                                </p>
                                <p>
                                    cette solution est la votre faisont la
                                    evoluer ensemble !
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section id="seventh-section">
                    <h3>L’ÉQUIPE</h3>
                    <p>
                        Oguiz est une entreprise jeune et innovante qui propose
                        une série d’outils permettant aux professionnels
                        d’offrir une expérience unique à leurs clients.
                    </p>
                    <p>
                        Avec une équipe d’experts en marketing, de développeurs
                        et de designers, nos plateformes offrent une solution
                        complète aux prestataire de loisirs.
                    </p>
                    <p>
                        Notre offre est construite autour de la facilité
                        d’utilisation afin que vous puissiez tirer le meilleur
                        parti de votre temps.
                    </p>
                    <div className="team-ctn">
                        <img src={julien} />
                        <img src={mache} />
                        <img src={micke} />
                    </div>
                </section>
                <section id="third-section">
                    <div>
                        <h3>COMMENT AMELIORER VOTRE AFFAIRE</h3>
                        <p>ce que nous vous proposons :</p>
                        <button>prendre rendez-vous</button>
                    </div>
                </section>
                {/* <div>
                  <Article
                      title="La digitalisation à votre portée"
                      body={[
                          "Spark Studio est la solution pour développer le chiffre d'affaires de votre activité ! Nous vous accompagnons et vous conseillons dans la mise en place de votre stratégie digitale.",
                          "Grace à notre large gamme d'outils nous vous permettons de créer                des expériences exceptionnelles pour vos clients et tout cela modulable en fonction de vos besoins/envies.",
                      ]}
                  />
                  <Article
                      title="12345"
                      body={['premier paragraphe','sdfvfvdf','zefefzefzef','zefzrfzrfz']}
                  />
              </div> */}
            </div>
            <div>{/* <Banner /> */}</div>
            <div>{/* <Todo /> */}</div>
        </div>
    );
}

export default App;
