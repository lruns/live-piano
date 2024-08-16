import './App.css'
import * as Tone from "tone";

function App() {

    const playSound = () => {
        //create a synth and connect it to the main output (your speakers)
        const synth = new Tone.Synth().toDestination();

        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease("C4", "8n");
    }

    return (
        <div className="container">
            <div className="piano">
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
                <div className="piano-keys">
                    <div className="white"><span>A</span></div>
                    <div className="black"><span>W</span></div>
                    <div className="white"><span>S</span></div>
                    <div className="black"><span>E</span></div>
                    <div className="white"><span>D</span></div>

                    <div className="white"><span>F</span></div>
                    <div className="black"><span>T</span></div>
                    <div className="white"><span>G</span></div>
                    <div className="black"><span>Y</span></div>
                    <div className="white"><span>H</span></div>
                    <div className="black"><span>U</span></div>
                    <div className="white"><span>J</span></div>

                    <div className="white"><span>K</span></div>
                    <div className="black"><span>O</span></div>
                    <div className="white"><span>L</span></div>
                    <div className="black"><span>P</span></div>
                    <div className="white"><span>;</span></div>
                </div>
            </div>
        </div>
    )
}

export default App
