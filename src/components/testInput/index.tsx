
import { HTMLInputTypeAttribute } from "react";
import { Input, Label, MessageErro } from "./styles";

type PropsInputs = {
  label?: string;
  inputType?: HTMLInputTypeAttribute;
  paragrafos?: string;
  register: any;
  name: string; // Adicionando a propriedade name
};

export const TestInput = ({ label, inputType, paragrafos, register, name }: PropsInputs) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label> {/* Adicione htmlFor e a propriedade name para associar o rótulo ao input */}
      <Input type={inputType} {...register(name)} /> {/* Aqui passamos o nome do campo para register */}
      {paragrafos && <MessageErro>{paragrafos}</MessageErro>} {/* Exibe a mensagem de erro se existir */}
    </>
  );
};
