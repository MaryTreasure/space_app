import React from 'react';
import styles from './CustomInput.module.scss';

interface Iprops {
  value: string
  fieldLabel: string
  fieldName: string
  type?: React.HTMLInputTypeAttribute
  handleChangeFieldForm: (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomInput = ({ value, fieldLabel, fieldName, type, handleChangeFieldForm }: Iprops) => {
  return (
    <div className={styles.form}>
      <span>{fieldLabel}</span>
      <input value={value} type={type} onChange={handleChangeFieldForm(fieldName)}/>
    </div>
  );
};
