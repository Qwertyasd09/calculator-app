export default function Button( { btnName, handleClick } ) {
    return (
        <button onClick={handleClick} className={`btn btn-${(btnName == "=") ? "EQUAL" : btnName}`} key={btnName}>{btnName}</button>
    )
}