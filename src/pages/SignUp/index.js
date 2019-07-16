import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Informe um e-mail válido')
        .required('E-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'A senha precisa ter pelo menos 6 caracteres')
        .required('Senha é obrigatória'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form onSubmit={handleSubmit} schema={schema}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />
                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}
