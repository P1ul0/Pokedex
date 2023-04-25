import * as yup from 'yup';

export const Login = yup.object().shape({
  email: yup.string().email('Email inválido').required('Informe um email'),
  senha: yup.string().required('Informe uma senha')
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(20, 'A senha deve ter no máximo 20 caracteres'),
});
