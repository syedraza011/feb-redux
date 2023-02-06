import {useSelector} from "react-redux";
import TextButton from "./components/TextButton";
import ToggleButton from "./components/ToggleButton";

function App() {

    const toggle = useSelector(state => state.toggle);
    const text = useSelector(state => state.text);


    return (
        <div className="App">
            <h1>{toggle ? "True" : "False"}</h1>
            <h1>{text}</h1>
            <TextButton/>
            <ToggleButton/>
        </div>
    );
}

export default App;
