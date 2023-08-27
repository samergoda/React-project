import "./App.css";
import Home from "./component/Home/Home.jsx";
import NavBar from "./component/NavBar/NavBar";
import Event from "./component/Event/Event";
import Card from "./component/Card/Card";
import Category from "./component/Category/Category";
import { Provider } from "react-redux";
import store from "./Redux/Store";


function App() {
  return (
    <Provider store={store}>
    <div className="bg-[#FAF9F8] h-screen p-7 ">
      <NavBar />
      <div className="flex  min-[200px]:flex-wrap md:flex-nowrap">
        <Event />
        <Category />
        <Card />
      </div>
    </div>
    </Provider>
  );
}

export default App;
