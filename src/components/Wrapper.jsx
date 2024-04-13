import Header from "./Header";
import Window from "./Window";
import Button from "./Button";
import { useReducer } from "react";

const ACTIONS = {
    ADD_DIGIT: "add-digit",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    EVALUATE: "evaluate"
}

function reducer(state, { type, payload }) {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            return state;
    }
}

export default function Wrapper() {

    const [{ result, operation }, dispatch] = useReducer(reducer, {})

    const btns = [
        "7", "8", "9", "DEL",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "/", "x",
        "RESET", "="
    ];

    const handleClick = (event) => (
        console.log(event.target.getAttribute('data-type'))
    );

    const btnElements = btns.map((btn) => (
        <Button handleClick={handleClick} key={btn} btnName={btn}/>
    ));
    
    return (
        <div className="app">
            <Header />
            <Window result={result}/>
            <div className="btns-wrapper">
                {btnElements}
            </div>
        </div>
    );
}