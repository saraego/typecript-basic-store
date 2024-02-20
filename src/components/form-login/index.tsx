// FormTest.js

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../button";
import { TestInput } from "../testInput";
import { toast } from 'react-toastify';
import { Api } from "../../services/api";
import { Form } from "./styles";
import { useUser } from "../../hooks/UserContext";
import { useHistory } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

export default function FormLogin() {
  const history = useHistory()
  const {login} = useUser()
 
  
  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup.string().required("Campo Obrigatório").min(6, 'Mínimo 6 caracteres'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (client) => {
    
    try {
      const {data} = await toast.promise(
        Api.post("sessions",{
          email:client.email,
          password:client.password
        }),
        {
          success:"Seja Bem-vindo(a)",
          pending:"Carregando",
          error:"Verificar email ou senha"
        }
      )

      login(data);

      setTimeout(()=>{
        if(data.admin){
          console.log("Voce é admin");
        }else{
          history.push("/")
          
        }
      },1400)
    } catch (error:any) {
      toast.error(error)
    }

  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TestInput label="Email" paragrafos={errors.email?.message} register={register} name="email"  />
      <TestInput label="Senha" paragrafos={errors.password?.message} register={register} name="password" inputType="password" />
      <Button type="submit" style={{ marginTop: 25 }}>Cadastrar</Button>
    </Form>
  );
}
