import "./Header.css"
import "../sampler.ts";
import {ChangeEvent, useState} from "react";
import {changeVolume} from "../sampler.ts";

const Header = () => {
    const [volume, setVolume] = useState(0);

    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(event.target.value);
        setVolume(newVolume);
        changeVolume(newVolume)
    };

    return (
        <div className="header">
            <h2>Live Piano</h2>
            <div>
                <label htmlFor="volume">Volume</label>
                <input
                    type="range"
                    min="-20"
                    max="20"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="slider"
                    id="volume"
                    name="volume"/>
            </div>
            <label>
                Show keys
                <input disabled checked className="checkbox" type="checkbox" name="piano-keys"/>
            </label>
        </div>
    )
}

export default Header;