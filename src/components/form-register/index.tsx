// FormTest.js

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../button";
import { TestInput } from "../testInput";
import { toast } from 'react-toastify';
import { Api } from "../../services/api";
import { Form } from "./styles";

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordComfirm: string;
};

export default function FormTest() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup.string().required("Campo Obrigatório").min(6, 'Mínimo 6 caracteres'),
    passwordComfirm: yup.string().required("Campo Obrigatório").min(6, 'Mínimo 6 caracteres')
    .oneOf([yup.ref('password')], 'Senhas devem ser iguais'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    
    try {
      const {status} = await Api.post('users',{
        name:data.name,
        email:data.email,
        password:data.password
      },{validateStatus:()=> true})

      if(status === 201 || status === 200){
        toast.success("Conta criada")

        setTimeout(()=>{
          console.log("outra page");
          
        },1400)
      }else if(status === 409){
        toast.success("Email já em uso")
      }else {
        throw new Error()
      }

    } catch (error:any) {
      toast.error(error)
    }

  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TestInput label="Nome" paragrafos={errors.name?.message} register={register} name="name" />
      <TestInput label="Email" paragrafos={errors.email?.message} register={register} name="email" />
      <TestInput label="Senha" paragrafos={errors.password?.message} register={register} name="password"  inputType="password"/>
      <TestInput label="Confirma senha" paragrafos={errors.passwordComfirm?.message} register={register} name="passwordComfirm" inputType="password"/>
      <Button type="submit" style={{ marginTop: 25 }}>Cadastrar</Button>
    </Form>
  );
}
