import React, { useState } from "react"
import './AppMainContent.css'

function AppMainContent (props) {

    let [NumTarget, setNumTarget] = useState(0);

    function plus() {
        setNumTarget(NumTarget + 1);


    }
    function minus() {
        setNumTarget(NumTarget - 1);
    }
    function restore() {
        setNumTarget(0)

    }
    return (
        <div>
            <div className="Numbers">
                <div>{NumTarget}</div>
            </div>
            <div className="bottonsPanel">
                <button className="allBottons botton1" onClick={plus}>Увеличить</button>
                <button className="allBottons botton2" onClick={minus}>Уменьшить</button>
                <button className="allBottons botton3" onClick={restore}>Сбросить</button>
            </div>
        </div>
    )
}

export default AppMainContent;