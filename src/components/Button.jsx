export default function Button( { btnName, handleClick } ) {
    let attributeBtn = "";

    switch (btnName) {

        case "+":
        case "-":
        case "/":
        case "x":
            attributeBtn = "operation";
            break;
            
        case "=":
            attributeBtn = "equal";
            break;
        
        case "DEL":
            attributeBtn = "delete";
            break;
        
        case "RESET":
            attributeBtn = "reset";
            break;
        
        case ".":
            attributeBtn = "dot";
            break;
        
        default:
            attributeBtn = "number";
            break;
    }

    return (
        <button {...{"data-type": attributeBtn}} onClick={handleClick} className={`btn btn-${(btnName == "=") ? "EQUAL" : btnName}`} key={btnName}>{btnName}</button>
    )
}