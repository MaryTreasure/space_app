import React, { useState } from 'react';
import { CustomInput } from '../../../Commons/CustomInput';

export const AuthForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChangeFieldForm = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevValues) => ({ ...prevValues, [fieldName]: e.target.value }));
  };
  return (
    <div>
      <CustomInput
        fieldLabel="Name"
        fieldName="name"
        value={formState.name}
        handleChangeFieldForm={handleChangeFieldForm}
      />
      <CustomInput
        fieldLabel="Email"
        fieldName="email"
        value={formState.email}
        handleChangeFieldForm={handleChangeFieldForm}
      />
      <CustomInput
        fieldLabel="Password"
        fieldName="password"
        value={formState.password}
        type="password"
        handleChangeFieldForm={handleChangeFieldForm}
      />
    </div>
  );
};
