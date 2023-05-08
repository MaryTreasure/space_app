import React, { useEffect, useState } from 'react';
import { CustomInput } from '../../../Commons/CustomInput';
import styles from './AuthForm.module.scss';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../store/userData';

export const AuthForm = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChangeFieldForm = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevValues) => ({ ...prevValues, [fieldName]: e.target.value }));
  };
  useEffect(() => {
    if (isError && formState.password.length > 5) {
      setIsError(false);
    }
  }, [formState.password]);

  const [isError, setIsError] = useState(false);

  const handleFinishForm = () => {
    if (formState.password.length < 5) {
      setIsError(true);
    } else {
      dispatch(setUserData({token: 'token', name: formState.name, email: formState.email }));
      console.log('AUTH');
    }
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
      <span className={`${styles.error_title} ${isError ? styles.has_error : styles.no_error}`}>
        Password must be more than 5 characters
      </span>
      <button onClick={handleFinishForm}>Log in</button>
    </div>
  );
};
