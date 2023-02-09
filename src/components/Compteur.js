import React from "react";
import { useState } from "react";
function Compteur({ compte, setCompteur, increment }) {
    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        setCompteur(compte + increment);
                    }}>
                    compteur + 1
                </button>
            </div>
            {<div>compteur = {compte}</div>}
        </div>
    );
}
export default Compteur;
