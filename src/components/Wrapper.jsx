import Header from "./Header";
import Window from "./Window";
import Button from "./Button";
import { useReducer, useState } from "react";

const ACTIONS = {
    ADD_DIGIT: "add-digit",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    EVALUATE: "evaluate"
};

function reducer(state, { type, payload }) {

    switch(type) {

        case ACTIONS.ADD_DIGIT:
            if (payload.btn === "0" && state.result === "0") {
                return state;
            }
            if (state.result != undefined && payload.btn === "." && state.result.slice(-1) == ".") {
                return state;
            }
            return {
                ...state,
                result: `${ state.result || "" }${ payload.btn }`
            };


        case ACTIONS.DELETE_DIGIT:
            return {
                ...state,
                result: state.result.slice(0, state.result.length-1)
            };

        case ACTIONS.CHOOSE_OPERATION:
            if (state.result == null) {
                return state;
            }
            if ((state.result.slice(-1) == payload.btn) || (state.operation.includes(state.result.slice(-1)))) {
                return state
            }
            return {
                ...state,
                result: `${ state.result || "" }${ payload.btn }`,
                operation: payload.btn
            };

        case ACTIONS.CLEAR:
            return {};
        
        case ACTIONS.EVALUATE:
            return {
                ...state,
                result: `${ (Math.round(eval(state.result.replace("x", "*").replace(/\b0*((\d+\.\d+|\d+))\b/g, "$1")) * 100) / 100).toFixed(2) }`
            };
    };
}

export default function Wrapper() {

    const [theme, setTheme] = useState()
    const [{ result }, dispatch] = useReducer(reducer, { operation: ["+", "-", "/", "x"] });

    const btns = [
        "7", "8", "9", "DEL",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "/", "x",
        "RESET", "="
    ];

    const btnElements = btns.map((btn) => {
        switch (btn) {

            case "+":
            case "-":
            case "/":
            case "x":
                return <Button handleClick={() => dispatch( { type: ACTIONS.CHOOSE_OPERATION, payload: { btn } } )} key={btn} btnName={btn}/>

            case "=":
                return <Button handleClick={() => dispatch( { type: ACTIONS.EVALUATE } )} key={btn} btnName={btn}/>
            
            case "DEL":
                return <Button handleClick={() => dispatch( { type: ACTIONS.DELETE_DIGIT } )} key={btn} btnName={btn}/>
            
            case "RESET":
                return <Button handleClick={() => dispatch( { type: ACTIONS.CLEAR } )} key={btn} btnName={btn}/>

            default:
                return <Button handleClick={() => dispatch( { type: ACTIONS.ADD_DIGIT, payload: { btn } } )} key={btn} btnName={btn}/>

        }
    });

    const handleClickTheme = (event) => {
        document.body.setAttribute("data-theme", event.target.value);
    }
    
    return (
        <div className="app">
            <Header handleClickTheme={handleClickTheme}/>
            <Window result={result}/>
            <div className="btns-wrapper">
                {btnElements}
            </div>
        </div>
    );
}