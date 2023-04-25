import * as yup from 'yup';

export const Cadastro = yup.object().shape({
//   username: yup.string().required('Informe um nome de usuário'),
  nome: yup.string().required('Informe seu nome'),
  email: yup.string().email('Email inválido').required('Informe um email'),
  senha: yup.string().required('Informe uma senha')
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(20, 'A senha deve ter no máximo 20 caracteres'),
  confirmacaoSenha: yup.string().required('Informe uma senha')
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(20, 'A senha deve ter no máximo 20 caracteres')
    .oneOf([yup.ref('senha'), null], 'As senhas não conferem'),
});