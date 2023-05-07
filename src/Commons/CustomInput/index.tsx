import React from 'react';

interface Iprops {
  value: string;
  fieldLabel: string;
  fieldName: string;
  type?: React.HTMLInputTypeAttribute;
}

export const CustomInput = ({ value, fieldLabel, fieldName, type }: Iprops) => {
  return (
    <div>
      <span>{fieldLabel}</span>
      <input value={value} type={type} />
    </div>
  );
};
