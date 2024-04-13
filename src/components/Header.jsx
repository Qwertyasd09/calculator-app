export default function Header({ handleClickTheme }) {
    
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
                    <input onClick={handleClickTheme} className="button" type="radio" name="toggle" id="one" value="theme-one" />
                    <input onClick={handleClickTheme} className="button" type="radio" name="toggle" id="two" value="theme-two" />
                    <input onClick={handleClickTheme} className="button" type="radio" name="toggle" id="three" value="theme-three" />
                </div>
            </div>
        </header>
        
    )
}