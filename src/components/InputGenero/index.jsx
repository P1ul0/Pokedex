import {
  LabelInput,
  OptionInput,
  SelectInput,
  TextValidationInput,
} from "./style";

export const InputGenero = ({
  name,
  id,
  masculino,
  feminino,
  error,
  ...props
}) => {
  return (
    <>
      <LabelInput for={id}>Gênero :</LabelInput>
      <SelectInput name={name} id={id} {...props}>
        <OptionInput value={null}>Selecione Um Gênero </OptionInput>  
        <OptionInput value={masculino}>Masculino</OptionInput>
        <OptionInput value={feminino}>Feminino</OptionInput>
      </SelectInput>
      {error && <TextValidationInput>{error}</TextValidationInput>}
    </>
  );
};
