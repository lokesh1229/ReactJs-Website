import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Header from "./Header";
// import Main from "./Main";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import  {BrowserRouter} from "react-router-dom";


ReactDOM.render(
<BrowserRouter>
    <App/>
</BrowserRouter>,document.getElementById("root"));

