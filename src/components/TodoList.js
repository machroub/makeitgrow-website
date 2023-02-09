import { useState } from "react";
import Compteur from "./Compteur"
const TodoList = ({ todo }) => {
    let isopen = true;
    const [cart, setCart] = useState(todo);
    let start = 8;
    const [compte, setCompteur] = useState(start);

    return (
        <div>setCompteur
            <button onClick>x</button>
            <ul>
                {cart.map((todoElement, index) => (
                    <li className={index} key={`${todoElement}-${index}`}>
                        {todoElement}
                        {index % 2 === 0 ? <span>☀️</span> : <span>💧</span>}
                        <button
                            onClick={() => {
                                setCart(() => {
                                    cart.splice(index, 1);
                                    console.log(`element ${index} deleted`);
                                });
                            }}>
                            supprimer
                        </button>
                    </li>
                ))}
            </ul>
            <Compteur  compte={compte} setCompteur={setCompteur} start={10} increment={2} />
        </div>
    );
};
export default TodoList;
