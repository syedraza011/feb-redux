import {useSelector} from "react-redux";

function App() {

  const toggle = useSelector(state=>state.toggle);

  return (
    <div className="App">
      <h1>{toggle?"True":"False"}</h1>
    </div>
  );
}

export default App;
