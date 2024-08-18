import './App.css'
import "./piano-header/Header.tsx"
import Header from "./piano-header/Header.tsx";
import Keyboard from "./piano-keys/Keyboard.tsx";
import {useState} from "react";

export interface ShowKeysType {
    isShowKeys: boolean,
    showKeys: (isShowKeys: boolean) => void
}

function App() {

    const [isShowKeys, showKeys] = useState(true);

    return (
        <div className="container">
            <div className="piano">
                <Header isShowKeys={isShowKeys} showKeys={showKeys}/>
                <Keyboard isShowKeys={isShowKeys}/>
            </div>
        </div>
    )
}

export default App
