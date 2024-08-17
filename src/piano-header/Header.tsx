import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <h2>Playable piano</h2>
            <div>
                <label htmlFor="volume">Volume</label>
                <input className="slider" type="range" id="volume" name="volume" min="0" max="100"/>
            </div>
            <label>
                Show keys
                <input className="checkbox" type="checkbox" name="piano-keys"/>
            </label>
        </div>
    )
}

export default Header;