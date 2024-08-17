import './App.css'
import "./piano-header/Header.tsx"
import Header from "./piano-header/Header.tsx";
import Keyboard from "./piano-keys/Keyboard.tsx";

function App() {

    return (
        <div className="container">
            <div className="piano">
                <Header/>
                <Keyboard/>
            </div>
        </div>
    )
}

export default App
