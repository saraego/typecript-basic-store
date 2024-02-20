import { Title } from "../../components/title"
import { Container, ContainerItens } from "./styles"
import FormTest from "../../components/form-register"
import { RoutesEnum } from "../../routes/enum"
import { Link } from "react-router-dom"




export const Register = () =>{

    return (
        <Container>
           <ContainerItens>
               <Title title="Cadastre-se"/>
               <FormTest/>
               <span>Já possui uma conta ? <Link to={RoutesEnum.Login}>Faça seu login</Link></span>
           </ContainerItens>
        </Container>
    )
}