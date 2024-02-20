import { Container, ContainerText } from "./styles"
import { useUser } from "../../hooks/UserContext"

export const Header = () =>{
    const {logout,userData} = useUser()
    console.log(userData);
    return (
        <Container>
            <div className="container-left">
                <a href="#">Home</a>
                <a href="#">Produtos</a>
                <a href="#">Sobre</a>
            </div>

            <div className="container-right">
                <a href="#">Carrinho</a>

                <div className="divisoria"></div>

                <ContainerText>
                    <p>Olá, {userData?.name}</p>
                    <a href="#" onClick={logout}>Sair</a>
                </ContainerText>
            </div>
        </Container>
    )
}