import "./Keyboard.css"
import sampler from "../sampler.ts";
import {FC, useCallback, useEffect, useState} from "react";
import {ShowKeysType} from "../App.tsx";

type KeynoteProps = {
    note: string,
    keyHint: string,
    keyCode: string,
    color: string
}

type SimpleShowKeys = Pick<ShowKeysType, "isShowKeys">;

const AllKeynoteProps: Array<KeynoteProps> = [
    {note: "C4", keyHint: "A", keyCode: "KeyA", color: "white"},
    {note: "C#4", keyHint: "W", keyCode: "KeyW", color: "black"},
    {note: "D4", keyHint: "S", keyCode: "KeyS", color: "white"},
    {note: "D#4", keyHint: "E", keyCode: "KeyE", color: "black"},
    {note: "E4", keyHint: "D", keyCode: "KeyD", color: "white"},
    {note: "F4", keyHint: "F", keyCode: "KeyF", color: "white"},
    {note: "F#4", keyHint: "T", keyCode: "KeyT", color: "black"},
    {note: "G4", keyHint: "G", keyCode: "KeyG", color: "white"},
    {note: "G#4", keyHint: "Y", keyCode: "KeyY", color: "black"},
    {note: "A4", keyHint: "H", keyCode: "KeyH", color: "white"},
    {note: "A#4", keyHint: "U", keyCode: "KeyU", color: "black"},
    {note: "B4", keyHint: "J", keyCode: "KeyJ", color: "white"},
    {note: "C5", keyHint: "K", keyCode: "KeyK", color: "white"},
    {note: "C#5", keyHint: "O", keyCode: "KeyO", color: "black"},
    {note: "D5", keyHint: "L", keyCode: "KeyL", color: "white"},
    {note: "D#5", keyHint: "P", keyCode: "KeyP", color: "black"},
    {note: "E5", keyHint: ";", keyCode: "Semicolon", color: "white"},
]

const Keynote: FC<KeynoteProps & SimpleShowKeys> = ({note, keyHint, keyCode, color, isShowKeys}) => {

    const [isPlaying, setPlaying] = useState(false);

    const play = useCallback(() => {
        if (!isPlaying) {
            sampler.triggerAttack(note);
            setPlaying(true)
        }
    }, [isPlaying, note]);

    const stop = useCallback(() => {
        sampler.triggerRelease(note);
        setPlaying(false)
    }, [note]);

    // @ts-ignore
    const handleClick = (e) => {
        e.preventDefault()
        stop();
        play();
    }


    // @ts-ignore
    const handleClickedMouseEntered = (e) => {
        e.preventDefault()
        if (e.buttons > 0) {
            play();
        }
    };

    // @ts-ignore
    const handleClickLeave = (e) => {
        e.preventDefault()
        stop();
    };


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === keyCode) {
                play();
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === keyCode) {
                stop();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        // Don't forget to clean up
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [play, stop, keyCode]);

    const classes = [color, isPlaying ? 'pressed' : '']

    return (
        <div onMouseDown={handleClick}
             onMouseEnter={handleClickedMouseEntered}
             onMouseLeave={handleClickLeave}
             onTouchStart={handleClick}
             onTouchEnd={handleClickLeave}
             className={classes.join(" ")}>
            {isShowKeys && <span>{keyHint}</span>}
        </div>
    );
};

const Keyboard: FC<SimpleShowKeys> = ({isShowKeys}) => {
    return (
        <div className="piano-keys">
            {AllKeynoteProps.map((props) => (
                <Keynote {...props} isShowKeys={isShowKeys}/>
            ))}
        </div>
    );
};

export default Keyboard;