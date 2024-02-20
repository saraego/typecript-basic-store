import { Redirect, Route } from "react-router-dom";
import { RoutesEnum } from "./enum";
import { Header } from "../components/header";


type PropsPrivate = {
    component?:any;
    isAdmin?:any;
    path?:any;
}

export const PrivateRoute = ({component,isAdmin,...rest}:PropsPrivate) =>{
    const user = localStorage.getItem('loja:izabely');

    if(!user){
        return <Redirect to={RoutesEnum.Login}/>
    }


    return (
        <>
            {!isAdmin && <Header/>}
            <Route {...rest} component={component}/>
        </>
    )
    
}