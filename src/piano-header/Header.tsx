import "./Header.css"
import "../sampler.ts";
import {ChangeEvent, FC, useState} from "react";
import {changeVolume} from "../sampler.ts";
import {ShowKeysType} from "../App.tsx";

const Header: FC<ShowKeysType> = ({isShowKeys, showKeys}) => {
    const [volume, setVolume] = useState(0);

    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(event.target.value);
        setVolume(newVolume);
        changeVolume(newVolume)
    };

    const onChangeShowKeys = (event: ChangeEvent<HTMLInputElement>) => {
        showKeys(event.target.checked);
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
                <input
                    className="checkbox"
                    type="checkbox"
                    name="piano-keys"
                    onChange={onChangeShowKeys}
                    checked={isShowKeys}
                />
            </label>
        </div>
    )
}

export default Header;