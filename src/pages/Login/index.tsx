import { Title } from "../../components/title"
import { Container, ContainerItens } from "./styles"
import FormLogin from "../../components/form-login"
import { Link } from "react-router-dom"
import { RoutesEnum } from "../../routes/enum"



export const Login = () =>{

    return (
        <Container>
           <ContainerItens>
               <Title title="Login"/>
               <FormLogin/>
               <span>Não possui conta ? <Link to={RoutesEnum.Register}>Cadastre-se</Link></span>
           </ContainerItens>
        </Container>
    )
}