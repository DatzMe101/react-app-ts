import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/auth';

export interface Form {
  email: string;
  password: string;
}

export const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState<Form>({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  } as Form);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const { data } = await login(form);
      localStorage.setItem('token', data?.token);
      history.push('/');
    } catch (error) {}
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder='Email'
          name='email'
          value={form.email}
          onChange={onInputChange}
        />
        <input
          placeholder='Password'
          name='password'
          type='password'
          value={form.password}
          onChange={onInputChange}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
