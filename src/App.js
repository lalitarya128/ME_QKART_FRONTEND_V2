import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
<div className="App">
        <Switch >
          <Route path={"/register"}>
            <Register />
          </Route>
          <Route path={"/login"}>
            <Login/>
          </Route>
          <Route path={"/checkout"}>
            <Checkout/>
          </Route>
          <Route path={"/thanks"}>
            <Thanks/>
          </Route>
          <Route path={"/products"}>
            <Products/>
          </Route>
          <Route extact path={"/"}>
            <Products/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
