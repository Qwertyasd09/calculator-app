export default function Header() {
    return (
        <header>
            <h1 className="title">calc</h1>
            <h2 className="label-theme">THEME</h2> 
            <div className="container-theme">
                <div className="label-number-theme">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                
                <div className="tri-state-toggle">
                    <input className="button" type="radio" name="toggle" id="one" />
                    <input className="button" type="radio" name="toggle" id="two" />
                    <input className="button" type="radio" name="toggle" id="three" />
                </div>
            </div>
        </header>
        
    )
}