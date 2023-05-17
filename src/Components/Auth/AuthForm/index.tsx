import React, { useEffect, useState } from 'react';
import { CustomInput } from '../../../Commons/CustomInput';
import styles from './AuthForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../store/userData';
import { Link } from 'react-router-dom';
import Arrow from './Arrow.png';
import { routes } from '../../../utils/constants/routes';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.userData);
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
      dispatch(setUserData({ token: 'token', name: formState.name, email: formState.email }));
      console.log('AUTH');
    }
  };
  return (
    <>
    <Link className={styles.back_button} to={routes.INFOPAGE}>
    <img src={Arrow} alt="" /> Take me home
  </Link>
    <div className={styles.auth_wrapper}>
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
      <button className={styles.auth_btn} onClick={handleFinishForm}>Log in</button>
    </div>
    </>
  );
};
