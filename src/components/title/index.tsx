import { H1 } from "./styles";

type TitleProps = {
    title:string;
}

export const Title = ({title}:TitleProps) => {
    return (
        <H1>{title}</H1>
    )
}