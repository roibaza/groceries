import './App.css';
import { Provider } from "react-redux";
import Groceries from "./Groceries";
import store from "./redux/store";

const App = () => {
  return (
    <div className="App">
        <Provider store={store}>
            <Groceries />
        </Provider>
    </div>
  );
}

export default App;
