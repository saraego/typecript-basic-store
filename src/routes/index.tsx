
import {Switch,Route, BrowserRouter as Router} from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { RoutesEnum } from "./enum";
import { Home } from "../pages/Home";
import { PrivateRoute } from "./private";


export const Routes = () =>{

    return (
        <Router>
            <Switch>
                <Route component={Login} path={RoutesEnum.Login}/>
                <Route component={Register} path={RoutesEnum.Register}/>
                <PrivateRoute component={Home} path={RoutesEnum.Home}/>
             </Switch>
        </Router>
    )
}